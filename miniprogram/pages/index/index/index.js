// miniprogram/pages/index/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
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
    hotNews:[],
    openid:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              app.globalData.userInfo = res.userInfo;
              var user = res.userInfo;
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  // console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxb67b23a24ceb75e5&secret=930308084669b7c8059fc1296971f2f9&js_code=' + res.code + '&grant_type=authorization_code',
                    success: res => {
                      // 获取到用户的 openid
                      app.globalData.openid = res.data.openid;
                      app.globalData.hasUserInfo = true;
                      app.countUser(user, res.data.openid);
                    }
                  });
                }
              });

            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });
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

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      // console.log("用户的信息如下：");
      // console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  }


})