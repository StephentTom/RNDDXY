/**
 * @Author Mr.Hong
 * @Date 2019/05/29
 * @Project WebStorm
 */

import MeListJSON from '../../resource/jsons/meList';
import {SMeListSectionModel} from './interfaces';

/*2019-05-29 获取我界面列表数据**/
export async function getMeListData(userType: string):Promise<SMeListSectionModel> {
    let sectionArray = MeListJSON.visitor;
    
    switch (userType) {
        case userTypes.parents: sectionArray = MeListJSON.parents; break;
        case userTypes.teacher: sectionArray = MeListJSON.teacher; break;
        case userTypes.admin: sectionArray = MeListJSON.admin; break;
        case userTypes.leader: sectionArray = MeListJSON.leader; break;
        default: break;
    }

    return await new Promise.resolve(sectionArray);
}





