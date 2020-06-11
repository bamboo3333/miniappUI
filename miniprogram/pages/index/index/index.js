// miniprogram/pages/index/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 背景图片
    bcImage:'../../../images/hire-new/bc.png',
    searchImage:'../../../images/hire-new/search.png',
    // 招聘类别
    items:[
      {
        url:'../trainee/trainee',
        icon:'../../../images/hire-new/trainee-default.png',
        text:'实习生'
      },
      {
        url:'../fullTime/fullTime',
        icon:'../../../images/hire-new/fullTime-default.png',
        text:'全职'
      },
      {
        url:'../partTimeJob/partTimeJob',
        icon:'../../../images/hire-new/partTimeJob-default.png',
        text:'兼职'
      }
    ],

    isInput:false,
    inputData:"",
    number:0,
    inputValue:"",
    todayNews:[],
    hotNews:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodayNews(1);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getHotyNews(2);
  },

  getHotyNews: function (type) {
    var that = this;
    wx.request({
      url: "http://localhost:8080/news/today",
      data: { type: type },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res.data.data);
        var data = res.data.data;
        console.log(data);
        that.setData({
          hotNews: data
        });
        wx.setStorageSync("hot", data);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  getTodayNews: function (type) {
    var that = this;
    wx.request({
      url: "http://localhost:8080/news/today",
      data: { type: type },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res.data.data);
        var data = res.data.data;
        console.log(data);
        that.setData({
          todayNews:data
        });
        wx.setStorageSync("today", data);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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

  /**
   *   输入招聘新闻标题，匹配数据。并显示出来给用户，进行提示
   * 需要传入的数据
   * 更具输入的数据
   * data{}
   */
  inputHireNewsTitle:function(e){
    let that = this;
    that.setData({
      inputData: e.detail.value,
      isInput:true,
      number:2
    });
  },

  /**
   * 回车事件，通过回车进行数据获取
   */
  onShow:function(e){
      let that =this;
      that.setData({
        inputValue:"",
        isInput:false
      });
      console.log("hh");
  },

  /**
   * 
   */



})