/**
 * @author Mr.Hong
 */

import Device from 'react-native-device-info';


const DeviceInfo = {
   deviceToken: Device.getUniqueID(),
   deviceModel: Device.getModel(), // 设备类型
   deviceSysVer: Device.getSystemVersion(), // 系统版本号
   deviceAppVer: Device.getVersion(), // app大版本号
   deviceAppReadableVer: Device.getReadableVersion() // app具体版本
};

export default DeviceInfo;