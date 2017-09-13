# NodeSinric

Node Module to test Kakopappa Sinric.ino for ESP8266 as a Belkin Wemo Switch 

Requirement:
1. NodeJS installed
2. NPM installed

Do this Step
1. Open terminal using Ctrl+Alt+T 
2. Create ssdp directory using 
   
   $ mkdir ssdp
   $ cd ssdp
   
3. Install node -upnp-utils from https://www.npmjs.com/package/node-upnp-utils from Futomi
   $ npm install xml2js
   $ npm install node-upnp-utils
   
4. Still in ssdp directory clone my github :
   $ git clone https://github.com/Kecubunk/NodeSinric.git
   
5. go to Node Sinric Folder
   $ cd NodeSinric

6. Upload Sinric.ino by Kakopappa into ESP8266

7. Run s.js to do M-search 
   $ node s.js
