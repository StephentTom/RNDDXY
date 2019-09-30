/**
 * @Author Mr.Hong
 * @Date 2019/05/31
 * @Project WebStorm
 */

/*2019-05-31 教学界面 1.列表组模型 2.组中item模型**/
export interface SEduListSectionModel {
    title: string,
    sectionIndex: number,
    data: Array<[SEduListItemModel]>,
}
export interface SEduListItemModel {
    enumeration: number,
    icon: any,
    title: string
}