// miniprogram/pages/resume/resumeLibrary/resumeLibrary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    resumeModel:[]
=======
    recommend:'../../../images/resume/recommend.png',

>>>>>>> cdde0a06a82a3c8da0e853aa06b72bb4a5975c56
  },


// 实现点击下载

download:function(e){
  const url = e.currentTarget.dataset.url
  // 下载文件
  wx.downloadFile({
    url: url,
    success(res){
      if(res.statusCode ==200){
        console.log(res.tempFilePath)
        wx.openDocument({
          filePath:res.tempFilePath,
          success(res){
            console.log(res)
          },
          fail(res){
            console.log(res)
          }
        })
      }
    }
  })
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