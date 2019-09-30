/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SectionList, View} from 'react-native';
import {observer} from 'mobx-react';
import {ListRow} from 'teaset';
import {SBaseContainer} from '../../components';
import MeHeader from './Views/MeHeader';
import {MeMobx} from '../../mobx/Me/MeMobx';



@observer
export default class Me extends Component {

   constructor(props){
      super(props);

      // mobx
       this.meMebox = new MeMobx();
   };

   render() {
      const {meListResult} = this.meMebox;

      return <SBaseContainer
         style={styles.container}
         isHiddenNavigationBar={true}
      >
         <MeHeader/>
         <SectionList
            listKey={'meListKey'}
            sections={meListResult.slice()} // slice()：方法来转换成原生的数组
            方法来转换成原生的数组
            renderSectionHeader={this._sectionHeader}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => `${item.sectionIndex} -- ${index}`}
         />
      </SBaseContainer>;
   }

   componentDidMount(): void {
      // 加载列表数据; 需要传用户类型
      this.meMebox.loadMeListData(userTypes.visitor);
   }

   _sectionHeader = ({section}) =>{
      const {sectionIndex} = section;
      const height = sectionIndex === 0? 0:10;

      return(
          <View style={{height}}/>
      );
   };

   _renderItem = ({item, index, section}) =>{
      const {icon, title} = item;
      return (
          <ListRow icon={icon} title={title} accessory={'indicator'} onPress={()=>this._listRowOnPress(item)}/>
      );
   };
   _listRowOnPress = (item)=>{
      alert(item.title);
   };
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colorConfig.bgColor,
   },
});
