// miniprogram/pages/resume/resumeLibrary/resumeLibrary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resumeModel:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var resModels = wx.getStorageSync("traineeModel");
    console.log(resModels);
    that.setData({
      resumeModel:resModels
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  gotoPageResume:function(e){
    var index = e.currentTarget.dataset["index"];
    const url = '../detail/detail';
    wx.navigateTo({
      url: url+'?index='+index,
    })
  }
})