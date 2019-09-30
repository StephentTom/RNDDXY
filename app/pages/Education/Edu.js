/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SectionList, View} from 'react-native';
import {observer} from 'mobx-react';
import {ListRow} from "teaset";
import {SBaseContainer} from '../../components';
import {EduMobx} from '../../mobx/Edu/EduMobx';
import EduItemView from './Views/EduItemView';

type Props = {};


@observer
export default class Edu extends Component<Props> {

   constructor(props) {
      super(props);

      this.eduMobx = new EduMobx();
   }

   render() {
      const {eduListResult} = this.eduMobx;

      return (
         <SBaseContainer
             style={styles.container}
             title={'教学'}
             isNeedBackButton={false}
             contentViewStyle={{backgroundColor: 'white'}}
         >
            <SectionList
                listKey={'eduListKey'}
                sections={eduListResult.slice()}
                renderSectionHeader={this.renderSectionHeader}
                renderItem={this.renderItem}
                stickySectionHeadersEnabled={false}
                keyExtractor={(item)=>`${item.enumeration}`}
            />
         </SBaseContainer>
      );
   }

   componentDidMount(): void {
      this.eduMobx.getEduListData();
   };

   renderSectionHeader = ({section})=>{
      const {sectionIndex, title} = section;
      const backgroundColor = sectionIndex === 0? 'white': colorConfig.bgColor;

      return (
         <View>
            <View style={[styles.separateStyle, {backgroundColor}]}/>

            <ListRow style={[styles.sectionHeadStyle, {backgroundColor: 'white'}]} title={title} titleStyle={{fontSize: 17}} bottomSeparator={'none'}/>
         </View>
      );
   };

   renderItem = ({item, index, section})=>{
     return(
        <EduItemView item={item}/>
     );
   };
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },

   separateStyle: {
      height: 10,
   },

   sectionHeadStyle: {
      height: 30,
   }
});
