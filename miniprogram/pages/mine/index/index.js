// miniprogram/pages/mine/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo:true,
    userInfo:{},
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
    this.setData({
      userInfo: app.globalData.userInfo
      })
  },
  onReady: function(){
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


})