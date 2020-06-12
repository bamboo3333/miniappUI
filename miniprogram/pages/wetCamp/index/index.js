// miniprogram/pages/wetCamp/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trains:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTrainMessage();
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
   * 加载训练题
   */
  getTrainMessage: function () {
    var that = this;
    wx.request({
      url: "http://localhost:8080/train/all",
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res);
        var trains = res.data.data;
        // console.log(data);
        wx.setStorageSync("trains", trains);
        that.setData({
          trains:trains
        })
        console.log(that.data.trains);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})