#include <TinyGPS++.h>
#include <SoftwareSerial.h>
/*
   This sample sketch demonstrates the normal use of a TinyGPS++ (TinyGPSPlus) object.
   It requires the use of SoftwareSerial, and assumes that you have a
   4800-baud serial GPS device hooked up on pins 4(rx) and 3(tx).
*/
static const int RXPin = 4, TXPin = 3;
static const uint32_t GPSBaud = 9600;

// The TinyGPS++ object
TinyGPSPlus gps;

// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);
SoftwareSerial GPRS(7,8);
void setup(){ 
  ss.begin(GPSBaud);
  Serial.begin(115200);
  GPRS.begin(9600);
  start_gsm();
 /*Serial.println("░░░░░░░▄▄▄█████▄▄▄░░░░░░░ ");
 Serial.println("░░░░░██░░░░░░░░░░░██░░░░░");
 Serial.println("░░░██░░░░░░░░░░░░░░░██░░░");
 Serial.println("░░█░░░░░░░░░░░░░░░░░░░█░░");
 Serial.println("░█░▄▀▀▀▄░░░░░░▄▀▀▀▄░░░░█░");
 Serial.println("░█▐░░▄██▌░░░░▐░░▄██▌░░░░█");
 Serial.println("█░▐▄▄███▌░░░░▐▄▄███▌░░░░█");
 Serial.println("█░░░░░░░░░░░░░░░░░░░░░░░█");
 Serial.println("█░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░█");
 Serial.println("█░░░█▒▒▒▒▒▒▒▒▒▒▒▒▒▒█░░░░█");
 Serial.println("░█░░█▒▒Hahahaha▒▒▒▒█░░░░█░");
 Serial.println("░░█░░█▒▒▒▒▒░░░░░░▒█░░░░█░");
 Serial.println("░░░█░░█▒▒▒░░░░░░░█░░░██░░");
 Serial.println("░░░░██░▀▀▀▀▀▀▀▀▀▀░░░█░░░░");
 Serial.println("░░░░░░▀▀▀▀██████▀▀▀▀░░░░░");
 Serial.println("███████████████████] 99% Complete!");*/
}

void loop()
{
readingGPS();
}


void readingGPS(){
  ss.listen();
  while (ss.available() > 0)
    if (gps.encode(ss.read()))
      create_request();

  
}

void create_request(){
  if (gps.location.isValid()){
        SendRequest("latitude="+String(gps.location.lat(),10)+"&placa="+"ARD1234"+"&velocidade="+String(gps.speed.kmph())+"&longitude="+String(gps.location.lng(),10));

        if(gps.speed.kmph()>80){
          sendSMS("exeeced limit of speed, more than :"+String(gps.speed.kmph()));
        }
        delay(2000);
  }


  }


 void start_gsm(){
 
    GPRS.println("AT");
    Serial.println(GPRS.readString());

    GPRS.println("AT+CREG?");
    Serial.println(GPRS.readString());

    delay(1000);

    
    GPRS.println("AT+SAPBR=3,1,\"CONTYPE\",\"GPRS\"");
    Serial.println(GPRS.readString());

    delay(1000);

    GPRS.println("AT+SAPBR=3,1,\"APN\",\"tim.br\"");
    Serial.println(GPRS.readString());

    delay(1000);


    GPRS.println("AT+SAPBR=3,1,\"USER\",\"tim\"");
    Serial.println(GPRS.readString());

    delay(1000);


    GPRS.println("AT+SAPBR=3,1,\"PWD\",\"tim\"");
    Serial.println(GPRS.readString());

    delay(1000);


    GPRS.println("AT+SAPBR=1,1");
    Serial.println(GPRS.readString());

    delay(1000);

    GPRS.println("AT+HTTPINIT");
    Serial.println(GPRS.readString());

    delay(5000);




  }

void sendSMS(String txt) {
  GPRS.listen();
  GPRS.print("AT+CMGF=1\r"); 
  delay(1000);

  // REPLACE THE X's WITH THE RECIPIENT'S MOBILE NUMBER
  // USE INTERNATIONAL FORMAT CODE FOR MOBILE NUMBERS
  GPRS.println("AT + CMGS = \"+5592981284765\""); 
  delay(1000);
  
  // REPLACE WITH YOUR OWN SMS MESSAGE CONTENT
  GPRS.println(txt); 
  delay(1000);

  // End AT command with a ^Z, ASCII code 26
  GPRS.print((char)26); 
  delay(1000);
  GPRS.println();
  // Give module time to send SMS
  delay(5000); 
}
  void SendRequest(String text){
    GPRS.listen();
    GPRS.println("AT+HTTPPARA=\"CID\",1");
    delay(500);
    GPRS.println("AT+HTTPPARA=\"URL\",\"http://isotechcameras.ddns.net/get?"+text+"\"");
    Serial.println(GPRS.readString());
    delay(500);

    GPRS.println("AT+HTTPACTION=0");
    Serial.println(GPRS.readString());


  }


