//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '/images/haibao/1.jpg',
      '/images/haibao/2.jpg',
      '/images/haibao/3.jpg'
    ],
    message:{}
  },
  getMessage: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/news/all',
      data: '',
      header: {
        'content-type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({message:res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})
