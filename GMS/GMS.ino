#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8); //Digital Pin 7 = TX, Digital Pin 8 = RX
unsigned char simmbuffer[64];
int bindex=0;

void setup(){
GPRS.begin(19200);
Serial.begin(19200);
Serial.println("Serial ready");
Serial.println(GPRS.available());
}

void loop(){
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
if (Serial.available())
GPRS.write(Serial.read());
sendSMS();
}


void sendSMS() {
  // AT command to set SIM900 to SMS mode
  GPRS.print("AT+CMGF=1\r"); 
  delay(100);

  // REPLACE THE X's WITH THE RECIPIENT'S MOBILE NUMBER
  // USE INTERNATIONAL FORMAT CODE FOR MOBILE NUMBERS
  GPRS.println("AT + CMGS = \"+5592981284762\""); 
  delay(100);
  
  // REPLACE WITH YOUR OWN SMS MESSAGE CONTENT
  GPRS.println("Message example from Arduino Uno."); 
  delay(100);

  // End AT command with a ^Z, ASCII code 26
  GPRS.println((char)26); 
  delay(100);
  GPRS.println();
  // Give module time to send SMS
  delay(5000); 
}




 
