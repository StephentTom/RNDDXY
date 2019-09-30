/**
 * @Author Mr.Hong
 * @Date 2019/05/31
 * @Project WebStorm
 */

import EduListJSON from '../../resource/jsons/eduList';
import {SEduListSectionModel} from './interfaces';


export async function getEduList():Promise<SEduListSectionModel> {
    let sectionArray = EduListJSON.list;

    return await new Promise.resolve(sectionArray);
}