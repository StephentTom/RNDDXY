/**
 * @Author Mr.Hong
 * @Date 2019/05/29
 * @Project WebStorm
 */

/*2019-05-29 1.我界面列表section字段声明; 2.组中item字段声明 **/
export interface SMeListSectionModel {
    data: Array<SMeListItemModel>,
    sectionIndex: number
}

export interface SMeListItemModel {
    type: number,
    icon: any,
    title: string
}