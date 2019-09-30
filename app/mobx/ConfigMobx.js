/**
 * @Author Mr.Hong
 * @Date 2019/05/29
 * @Project WebStorm
 */

import React from "react";
import {observable, action} from 'mobx';
import {Toast} from 'teaset';
import {SCustomToast} from '../components';



class ConfigMobx {
    static toastKey = null;

    @action showLoading(msg?: string) {
        if (ConfigMobx.toastKey) return;

        ConfigMobx.toastKey = Toast.show({
            text: msg,
            icon: <SCustomToast />,
            position: 'center',
            duration: Math.pow(10, 6),
        });
    }

    @action hideLoading(){
        if (!ConfigMobx.toastKey) return;

        Toast.hide(ConfigMobx.toastKey);
        ConfigMobx.toastKey = null;
    }

    @action showToast(msg?: string, duration?: number, position?: string = 'center') {
        Toast.message(msg, duration, position);
    }

    @action showSuccessToast(msg?: string) {
        Toast.success(msg, 2500, 'center');
    }

    @action showFailToast(msg?: string) {
        Toast.fail(msg, 2500, 'center');
    }
}

export {ConfigMobx};