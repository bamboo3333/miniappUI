// miniprogram/pages/resume/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgURL:[
      '../../../images/resume/slider-1.PNG',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3110807267,2350271632&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2215815949,1750406079&fm=11&gp=0.jpg'
    ],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    

    // 简历分类(左右滑动)
    items:[
      {
        url:'../resume/resumeLibrary/resumeLibrary',
        text:'设计师',
        icon:'../../../images/resume/design.jpg'
      },
      {
        url:'../resume/resumeLibrary/resumeLibrary',
        text:'工程师',
        icon:'../../../images/resume/engineer.jpg'
      },
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'运维',
        icon:'../../../images/resume/Operation-and-maintenance.jpg'
      },
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'测试',
        icon:'../../../images/resume/test.jpg'
      },
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'产品经理',
        icon:'../../../images/resume/product-manager.jpg'
      }

    ],
    swiperData:{
      previous:28,
      next:400
    },
   
     // icon
      classificationIcon:'../../../images/resume/classification.png',
      recommend:'../../../images/resume/recommend.png'

  },
  handleSwiperChange(e) {
    const currentIndex = e.detail.current
    if(currentIndex == 0) {
      this.setData({
        swiperDis: {
          previous: 28,
          next: 400
        }
      })
    }else if(currentIndex == 1) {
      this.setData({
        swiperDis: {
          previous: 214,
          next: 214
        }
      })
    }else if(currentIndex == 2) {
      this.setData({
        swiperDis: {
          previous: 400,
          next: 28
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  gotoPageResume:function(){
    const url = '../detail/detail';
    wx.navigateTo({
      url: url,
    });
  },
  gotopage:function(){
    const url = '../resumeLibrary/resumeLibrary';
    wx.navigateTo({
      url: url,
    });
  }
})