/**
 * @Author Mr.Hong
 * @Date 2019/05/31
 * @Project WebStorm
 */

import * as Icon from '../../utils/IconPaths';


const eduList = {
    list: [
        {
            title: "童声童梦",
            sectionIndex: 0,
            data: [
                [
                    {enumeration: 12, icon: Icon.edu_gushihui, title: "故事会"},
                    {enumeration: 13, icon: Icon.edu_huiben, title: "绘本"},
                    {enumeration: 14, icon: Icon.edu_gequ, title: "歌曲"}
                ]
            ]
        },
        {
            title: "小课堂",
            sectionIndex: 1,
            data: [
                [
                    {enumeration: 15, icon: Icon.edu_diy, title: "手工DIY"},
                    {enumeration: 16, icon: Icon.edu_zbkt, title: "直播课堂"},
                    {enumeration: 17, icon: Icon.edu_tsgl, title: "图书管理"}
                ]
            ]
        },
        {
            title: "育儿教室",
            sectionIndex: 2,
            data: [
                [
                    {enumeration: 18, icon: Icon.edu_ddkc, title: "点点科创"},
                    {enumeration: 19, icon: Icon.edu_parentsbible, title: "家长宝典"}
                ]
            ]
        }
    ]
};

export default eduList;