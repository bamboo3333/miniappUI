// miniprogram/pages/index/hireCard/hireCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 存放信息索引
    index:"",
    type:"",
    job:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var index = options.index;
    var type = options.type;
    var jobType = "";
    var job = {};
    if(type==0){
      var traineeList = wx.getStorageSync("trainee");
      job = traineeList[index];
      jobType = "trainee";
    }else if(type==1){
      var fullTimeList = wx.getStorageSync("fullTime");
      job = fullTimeList[index];
      jobType = "fullTime";
    }else if(type==2){
      var partTimeList = wx.getStorageSync("partTime");
      job = partTimeList[index];
      jobType = "partTime";
    } else if (type == 3) {
      var partTimeList = wx.getStorageSync("today");
      job = partTimeList[index];
      jobType = "today";
    } else if (type == 4) {
      var partTimeList = wx.getStorageSync("hot");
      job = partTimeList[index];
      jobType = "hot";
    }
    that.setData({
      job:job,
      index:index,
      type:jobType
    });
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