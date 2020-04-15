// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({ userInfo: userInfo })
    })
  },
  finishResume: function () {
    wx.navigateTo({
      url: '../resume/resume',
    })
  }

})