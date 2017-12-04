import { NetInfo } from 'react-native';
import DeviceInfo from 'react-native-device-info';

async function networkCondition () {
    return NetInfo.getConnectionInfo();
}

function deviceName () {
    return DeviceInfo.getDeviceName();
}

export default {
    deviceName,
    networkCondition
};
