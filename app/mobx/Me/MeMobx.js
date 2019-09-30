/**
 * @Author Mr.Hong
 * @Date 2019/05/29
 * @Project WebStorm
 */

import {action, computed, observable, runInAction} from 'mobx';
import {ConfigMobx} from '../ConfigMobx';
import {getMeListData} from '../../servers/Me';
import {SMeListSectionModel} from '../../servers/Me/interfaces';


export class MeMobx extends ConfigMobx {
/*2019-05-31 我界面列表数据**/
    // @observable meList = []; // 方式一, 这样创建出来的数组不是一个真正的原生数组
    @observable meList: Array<SMeListSectionModel> = []; // 方式二


    /*2019-05-29 获取我的界面列表数据**/
    @action loadMeListData = async (userType?: userTypes = userTypes.visitor) =>{
        this.showLoading();

        try {
            const result = await getMeListData(userType);

            runInAction('请求我界面列表数据', ()=>{
                // this.meList.replace(result); // 方式一
                this.meList = result; // 方式二
            })
        } catch (e) {
            this.showFailToast();
        } finally {
            this.hideLoading();
        }
    };
    // 防止使用mobx数组后发出⚠️
    @computed get meListResult() { // 使用computed改造数据
        return this.meList.map((value)=>{
            return {
                // 如果是SectionList，其数据结构是多维数组，只是在调用mobx数据时使用slice()一下消除警告，因为其数据内部的数组依然是mobx数据
                data: value.data.slice(),
                sectionIndex: value.sectionIndex
            }
        })
    }
}
