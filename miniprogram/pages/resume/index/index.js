// miniprogram/pages/resume/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgURL:[
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3878716296,1431912479&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3110807267,2350271632&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2215815949,1750406079&fm=11&gp=0.jpg'
    ],
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    recommend:[]
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