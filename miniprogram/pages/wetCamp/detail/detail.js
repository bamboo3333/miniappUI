// miniprogram/pages/wetCamp/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    train:{}
=======
    describe:'../../../images/wetCamp/describe.png',
    example:'../../../images/wetCamp/example.png',
    remarks:'../../../images/wetCamp/remarks.png',
    link:'../../../images/wetCamp/link.png',
    comment:'../../../images/wetCamp/comment.png',
    release:'../../../images/wetCamp/release.png'

>>>>>>> cdde0a06a82a3c8da0e853aa06b72bb4a5975c56
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var index = options.index;
    var trains = wx.getStorageSync("trains");
    var train = trains[index];
    console.log(train);
    that.setData({
      train:train
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

  }
})