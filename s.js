var upnp = require('node-upnp-utils');
 
// Start the discovery process
upnp.startDiscovery({
  mx:3,
  st:'upnp:urn:Belkin:device:**'
});
 
    console.log ('');
    console.log ('Searching for Active Device :');

setTimeout(() => {
  upnp.stopDiscovery(() => {
    var device_list = upnp.getActiveDeviceList();
    console.log(device_list.length + ' Device Found.');
    console.log ('');
    device_list.forEach((device) => {
      var ip   = device['address'];
      var name = device['description']['device']['friendlyName'];
      console.log('Device Name : ' + name );
      console.log('Device IP : ' + ip);
      console.log ('');

      //console.log(' * ' + name + ' (' + ip + ')');
    });
    process.exit();
  });
}, 10000);
