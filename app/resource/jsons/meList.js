/**
 * @author Mr.Hong
 */

import * as Icon from '../../utils/IconPaths';

/*2019-05-29 visitor: 0; parents: **/
const meList = {
   'visitor': [
      {
         data: [
            {type: 0, icon: Icon.me_order, title: "我的订单"},
            {type: 1, icon: Icon.me_integral, title: "我的积分"}
         ],
         sectionIndex: 0
      },
      {
         data: [
            {type: 8, icon: Icon.me_recommend, title: "推荐给朋友"},
            {type: 9, icon: Icon.me_setting, title: "设置"}
         ],
         sectionIndex: 1
      }
   ],

   'parents': [
      {
         data: [
            {type: 0, icon: Icon.me_order, title: "我的订单"},
            {type: 1, icon: Icon.me_integral, title: "我的积分"},
            {type: 2, icon: Icon.me_pay, title: "缴费"}
         ],
         sectionIndex: 0
      },
      {
         data: [
            {type: 10, icon: Icon.me_diypen, title: "我发布的帖子"},
            {type: 11, icon: Icon.me_diypcoket, title: "帖子草稿"},
            {type: 12, icon: Icon.me_myHB, title: "我的绘本"}
         ],
         sectionIndex: 1
      },
      {
         data: [
            {type: 3, icon: Icon.me_mychildren, title: "孩子信息"},
            {type: 5, icon: Icon.me_invitation, title: "邀请家人"}
         ],
         sectionIndex: 2
      },
      {
         data: [
            {type: 8, icon: Icon.me_recommend, title: "推荐给朋友"},
            {type: 9, icon: Icon.me_setting, title: "设置"}
         ],
         sectionIndex: 3
      }
   ],

   'teacher': [
      {
         data: [
            {type: 0, icon: Icon.me_order, title: "我的订单"},
            {type: 1, icon: Icon.me_integral, title: "我的积分"},
            {type: 2, icon: Icon.me_pay, title: "缴费"}
         ],
         sectionIndex: 0
      },
      {
         data: [
            {type: 10, icon: Icon.me_diypen, title: "我发布的帖子"},
            {type: 11, icon: Icon.me_diypcoket, title: "帖子草稿"},
            {type: 12, icon: Icon.me_myHB, title: "我的绘本"}
         ],
         sectionIndex: 1
      },
      {
         data: [
            {type: 8, icon: Icon.me_recommend, title: "推荐给朋友"},
            {type: 9, icon: Icon.me_setting, title: "设置"}
         ],
         sectionIndex: 2
      }
   ],

   'admin': [
      {
         data: [
            {type: 0, icon: Icon.me_order, title: "我的订单"},
            {type: 1, icon: Icon.me_integral, title: "我的积分"}
         ],
         sectionIndex: 0
      },
      {
         data: [
            {type: 10, icon: Icon.me_diypen, title: "我发布的帖子"},
            {type: 11, icon: Icon.me_diypcoket, title: "帖子草稿"},
            {type: 12, icon: Icon.me_myHB, title: "我的绘本"}
         ],
         sectionIndex: 1
      },
      {
         data: [
            {type: 8, icon: Icon.me_recommend, title: "推荐给朋友"},
            {type: 9, icon: Icon.me_setting, title: "设置"}
         ],
         sectionIndex: 2
      }
   ],

   'leader': [
      {
         data: [
            {type: 0, icon: Icon.me_order, title: "我的订单"},
            {type: 1, icon: Icon.me_integral, title: "我的积分"},
            {type: 2, icon: Icon.me_pay, title: "缴费"}
         ],
         sectionIndex: 0
      },
      {
         data: [
            {type: 10, icon: Icon.me_diypen, title: "我发布的帖子"},
            {type: 11, icon: Icon.me_diypcoket, title: "帖子草稿"},
            {type: 12, icon: Icon.me_myHB, title: "我的绘本"}
         ],
         sectionIndex: 1
      },
      {
         data: [
            {type: 8, icon: Icon.me_recommend, title: "推荐给朋友"},
            {type: 9, icon: Icon.me_setting, title: "设置"}
         ],
         sectionIndex: 2
      }
   ]
};

export default meList;
