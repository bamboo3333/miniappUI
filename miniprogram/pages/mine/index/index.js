// miniprogram/pages/mine/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo:false,
    userInfo:{},
    openid:'',
    defaultAvatar:'../../../images/mine/avatar-default.png',

    // 设置菜单栏
    items:[
      {
        icon:'../../../images/mine/Improve-information.png',
        text:'修改信息',
        right:'../../../images/mine/right.png',
        url:'../improveInformation/improveInformation'
      },
      {
        icon:'../../../images/mine/signin.png',
        text:'每日签到',
        right:'../../../images/mine/right.png',
        url:'../../wetCamp/index/index'
      },
      {
        icon:'../../../images/mine/resume.png',
        text:'我的简历',
        right:'../../../images/mine/right.png',
        url:'../../resume/index/index'
      },
      {
        icon:'../../../images/mine/contact-us.png',
        text:'联系我们',
        right:'../../../images/mine/right.png',
        url:'../contactUs/contactUs'
      }
    ],



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    
  },
  onReady: function(){
    this.userAuthorized();
  },

// 获取openid
getOpenid:function(){
  let that = this ;
  wx.login({
   success:function(res){
     console.log(res)
     wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      method:'POST',
      data:{
        js_code:res.code,
        appid:'wxb67b23a24ceb75e5',
        secret:'930308084669b7c8059fc1296971f2f9',
        grant_type:'authorization_code'
      },
      header:{
        'content-type':'appliaction/x-www-form-urlencode',
      },
      success:function(response){
        that.setData({
          openid:response.data.openid
        })
        console.log(123);
        console.log(response);
      },
      fail:function(data){
        console.log(data)
      }
     })
   }
  })

},

  /**
   * 跳转到完善信息页面
   */
  gotoPage:function(e){
    if(e.currentTarget.dataset.url == '../../resume/index/index' || e.currentTarget.dataset.url=='../../wetCamp/index/index'){
        wx.switchTab({
        url: e.currentTarget.dataset.url
     });
    }else{
    wx.navigateTo({
        url: e.currentTarget.dataset.url
    });
    }
  },

  // 当页面加载时候就进行授权处理
  userAuthorized:function(){
    var that = this;
    console.log(that.data.items);
      wx.getSetting({
        success: (res) => {
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: data => {
                // console.log(data);
                that.setData({
                  userInfo: data.userInfo,
                  hasUserInfo: true
                });
                app.globalData.hasUserInfo = true;
                app.globalData.userInfo = data.userInfo;
              },
            })
          }else{
            that.setData({
              hasUserInfo:false
            })
          }
        },
      })
  },

/**
 * 点击立即登录，实现微信授权登录
 */

showLogin:function(event){
  let that = this 
  that.getOpenid()
  console.log(that.data.openid)
  console.log("hhah")
  // if(that.userInfo){
  //   wx.showModal({  
  //     title: '授权登录',  
  //     content: '是否授权登录？',  
  //     success: function(res) {  
  //         if (res.confirm) {  
  //           wx.login({
  //             success:function(result){
  //               wx.getUserInfo({
  //                 success: (res) => {
  //                   // 向服务器请求数据
  //                   wx.request({
  //                     // 后端提供的接口
  //                     url: 'url',
  //                     method:'POST',
  //                     data:{
  //                       nickName:that.data.userInfo.nickName,
  //                       gender:that.data.userInfo.gender,
  //                       avatarUrl:that.data.userInfo.avatarUrl,
  //                     },
  //                     header:{
  //                       'content-type': 'application/json' //默认值
  //                     },
  //                     success:function(res){
  //                         wx.showToast({
  //                           title: '登录成功',
  //                           icon:'success'
  //                         })
  //                     }
  //                   })
  //                 },
  //               })
  //             }
  //           }) 
  //           getApp().globalData.userInfo = that.userInfo,
  //           getApp().globalData.hasUserInfo = true
  //           that.setData({
  //             userInfo:that.userInfo,
  //             hasUserInfo:true
  //           });
  //         } else if (res.cancel) {
  //           that.setData({
  //             userInfo:{},
  //             hasUserInfo:false
  //           });
  //           getApp().globalData.userInfo ={},
  //           getApp().globalData.hasUserInfo = false
  //         }  
  //     }  
  // });
  // }
},
})