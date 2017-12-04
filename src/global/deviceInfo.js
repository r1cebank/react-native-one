import { NetInfo } from 'react-native';
import DeviceInfo from 'react-native-device-info';

/**
 * Get current network condition
 * @returns {Promise}
 */
async function networkCondition () {
    return NetInfo.getConnectionInfo();
}

/**
 * Get current device name
 * @returns {string}
 */
function deviceName () {
    return DeviceInfo.getDeviceName();
}

export default {
    deviceName,
    networkCondition
}
