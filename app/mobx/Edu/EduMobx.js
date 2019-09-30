/**
 * @Author Mr.Hong
 * @Date 2019/05/31
 * @Project WebStorm
 */

import {observable, action, computed, runInAction} from 'mobx';
import {ConfigMobx} from '../ConfigMobx';
import {getEduList} from '../../servers/Edu';
import {SEduListSectionModel} from '../../servers/Edu/interfaces';
import * as Icon from "../../utils/IconPaths";


export class EduMobx extends ConfigMobx {
/*2019-05-31 教学界面列表**/
    @observable eduList: Array<SEduListSectionModel> = [];


    @action getEduListData = async() =>{
        this.showLoading();

        try {
            const result = await getEduList();

            runInAction('获取教学界面列表数据', ()=>{
                this.eduList = result;
            })
        } catch (e) {
            this.hideLoading();
        } finally {
            this.hideLoading();
        }
    };
    @computed get eduListResult() {
        return this.eduList.map(value=>{
            return {
                title: value.title,
                sectionIndex: value.sectionIndex,
                data: value.data.slice(),
            }
        })
    }
}
