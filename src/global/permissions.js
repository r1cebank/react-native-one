import Permissions from 'react-native-permissions';

async function checkPermission (permissions) {
    return Permissions.checkMultiple(permissions);
}

async function requestPermision (permission) {
    return Permissions.request(permission);
}

async function checkAll () {
    return checkPermission([
        'location',
        'camera',
        'microphone',
        'photo',
        'contacts',
        'event'
    ]);
}

export default {
    checkAll,
    checkPermission,
    requestPermision
};
