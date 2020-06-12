// miniprogram/pages/resume/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgURL:[
      '../../../images/resume/slider-1.PNG',
      '../../../images/resume/slider-2.jpg',
      '../../../images/resume/slider-3.jpg'
    ],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
<<<<<<< HEAD
    recommend:[]
=======
    

    // 简历分类(左右滑动)
    items:[
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'设计师',
        icon:'../../../images/resume/design.jpg'
      },
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'工程师',
        icon:'../../../images/resume/engineer.jpg'
      },
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'运维师',
        icon:'../../../images/resume/Operation-and-maintenance.jpg'
      },
      {
        url:'../resumeLibrary/resumeLibrary',
        text:'测试师',
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
>>>>>>> cdde0a06a82a3c8da0e853aa06b72bb4a5975c56
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getResumeMsg("traineeModel",0);
  },
 


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 后面再优化
    var models = wx.getStorageSync("traineeModel");
    var recommend = [];
    console.log(models)
    for(var i=0;i<3;i++){
      recommend[i] = models[i];
    }
    this.setData({
      recommend: recommend
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 获取后端简历信息
   */
 
  gotoPageResume:function(){
    const url = '../detail/detail';
    wx.navigateTo({
      url: url,
    });
  },
  /**
   * 页面跳转
   */
  gotopage:function(){
    const url = '../resumeLibrary/resumeLibrary';
    wx.navigateTo({
      url: url,
    });
  }
})