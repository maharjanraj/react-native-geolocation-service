import { NativeModules, DeviceEventEmitter } from 'react-native';

class GeoLocation {
  constructor() {
    this.nativeModules = NativeModules;
    this.deviceEventEmitter = DeviceEventEmitter;
  }

  startLocationService() {
    console.log("startLocationService")
    return NativeModules.GeoLocation.startService();
  }

  stopLocationService() {
    NativeModules.GeoLocation.stopService();
  }

  listenToLocationUpdate(callback) {
    this.startLocationService();
    this.deviceEventEmitter.addListener('updateLocation', (geoData) => {
      callback(geoData);
    });
  }

  stopListeningToLocationUpdate(type, id) {
    this.deviceEventEmitter.removeListener('updateLocation');
    this.stopLocationService();
  }
}

export default new GeoLocation();
