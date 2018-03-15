#include <SoftwareSerial.h>
#include <TinyGPS++.h>
#include "inetGSM.h"
InetGSM inet;


boolean started = false;
char smsbuffer[160];
char n[20];

byte valor;

SoftwareSerial GPRS(7, 8); //Digital Pin 7 = TX, Digital Pin 8 = RX

unsigned char simmbuffer[64];
int bindex=0;

static const int RXPin = 4, TXPin = 3;
static const uint32_t GPSBaud = 9600;


// The TinyGPS++ object
TinyGPSPlus gps;

// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);



void setup(){
  Serial.begin(19200);
  ss.begin(GPSBaud);
  GPRS.begin(19200); 

  Serial.println("Serial ready");
  //sendSMS();

 
}

void loop(){


       Serial.println(getLocation());

    GPRS.listen();


     if (Serial.available()){
     GPRS.write(Serial.read());
  }

  
  if (GPRS.available()){
    while(GPRS.available()){
      simmbuffer[bindex++]=GPRS.read();
      if(bindex == 64)break;
  }
    Serial.write(simmbuffer,bindex);
    for (int i=0; i<bindex;i++){
      simmbuffer[i]=NULL;
    }
    bindex = 0;
  }
    
}







String getLocation(){
   ss.listen();
  while (ss.available() > 0){
    
    gps.encode(ss.read());
    if (gps.location.isUpdated()){
      // Latitude in degrees (double)
      //  Serial.print("Latitude= "); 
       // Serial.print(gps.location.lat(), 6); 
      // Longitude in degrees (double)
      //  Serial.print(" Longitude= "); 
       // Serial.println(gps.location.lng(), 6); 

      // Raw date in DDMMYY format (u32)
     //   Serial.print("Raw date DDMMYY = ");
      //  Serial.println(gps.date.value()); 

      // Raw time in HHMMSSCC format (u32)
      //  Serial.print("Raw time in HHMMSSCC = "); 
       // Serial.println(gps.time.value()); 

      // Speed in kilometers per hour (double)
       // Serial.print("Speed in km/h = "); 
      //  Serial.println(gps.speed.kmph()); 

      
    }
  }
  return String(gps.location.lat(),6)+" "+String(gps.location.lng(),6)+" "+String(gps.date.value())+" "+String(gps.time.value())+" "+String(gps.speed.kmph());
  }

void sendSMS() {
  GPRS.listen();
  // AT command to set SIM900 to SMS mode
  GPRS.print("AT+CMGF=1\r"); 
  delay(100);

  // REPLACE THE X's WITH THE RECIPIENT'S MOBILE NUMBER
  // USE INTERNATIONAL FORMAT CODE FOR MOBILE NUMBERS
  GPRS.println("AT + CMGS = \"+5592981284767\""); 
  delay(100);
  
  // REPLACE WITH YOUR OWN SMS MESSAGE CONTENT
  GPRS.println(" teste SmS + loc "+getLocation()); 
  delay(100);

  // End AT command with a ^Z, ASCII code 26
  GPRS.println((char)26); 
  delay(100);
  GPRS.println();
  // Give module time to send SMS
  delay(5000); 
}










void envia_GSM(String texto)
{ GPRS.begin(19200); 
  char temp_string[55];
  char msg[10];
  int numdata;
  if (inet.attachGPRS("claro.com.br", "claro", "claro")){
    Serial.println(F("status=Conectado..."));
  Serial.println("Started");
    delay(100);
  String valor = "MSG_Texto1=" + texto;
  valor.toCharArray(temp_string, 55);
  numdata = inet.httpPOST("http://isotechcameras.ddns.net/", 80, "http://isotechcameras.ddns.net/", temp_string, msg , 100);
  delay(5000);
  }
  else{ 
    Serial.println(F("status=Nao conectado !!"));}

}





 void powerUpOrDown()
{
  //Liga o GSM Shield
  Serial.print(F("Liga GSM..."));
  pinMode(6, OUTPUT);
  digitalWrite(6, LOW);
  delay(1000);
  digitalWrite(6, HIGH);
  delay(1000);
  Serial.println(F("OK!"));
  digitalWrite(6, LOW);
  delay(500);
}
