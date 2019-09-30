/**
 * @author Mr.Hong
 */

import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import {SEduListItemModel} from '../../../servers/Edu/interfaces';


type Props = {
   item: Array<SEduListItemModel>
}

// const actions = new Map([
//    [12, {module: 'Web', source: H5.libraryManage}], // 故事会
//    [13, {module: 'HuiBen'}],
//    [14, {module: 'Song'}],
//    [15, {module: 'DIY', searchType: null}],
//    [16, {module: 'Living'}],
//    [17, {module: 'Web', isShare: true, source: H5.libraryManage}], // 图书管理
//    [18, {module: 'DDCreate'}],
//    [19, {module: 'ValuableBook'}]
// ]);


class EduItemView extends PureComponent<Props> {

   render() {
      const {item} = this.props;

      return (
         <View style={styles.container}>
            {item.map(value=>{
               return(
                  <TouchableOpacity
                     key={value.enumeration}
                     style={styles.itemStyle}
                     activeOpacity={kActiveOpacity}
                  >
                     <Image source={value.icon} style={styles.imageStyle}/>
                     <Text style={styles.textStyle}>{value.title}</Text>
                  </TouchableOpacity>
               )
            })}
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingVertical: 10,
      backgroundColor: 'white',
   },

   itemStyle: {
      width: kScreenWidth/3,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageStyle: {
      width:90,
      height: 90
   },
   textStyle: {
      marginTop: 8,
   }
});

export default withNavigation(EduItemView);
