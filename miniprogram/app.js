//app.js
var app = getApp()
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }

  },
/**
 * 获取新闻信息
 */
  getMessage: function (jobType,typeId) {
    var that = this;
    wx.request({
      url: "http://localhost:8080/news/jobInfo",
      data: { typeId: typeId },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        // console.log(res.data.data);
        var data = res.data.data;
        // console.log(data);
        wx.setStorageSync(jobType, data);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
/**
 * 获取简历模板
 */
  getResumeMsg: function (resumeType,typeId) {
    var that = this;
    wx.request({
      url: "http://localhost:8080/resume/all",
      data: {typeId:typeId},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var data = res.data.data;
        wx.setStorageSync(resumeType, data);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 统计用户活跃量
   */
  countUser: function(user,openid){
    // 获取openid，统计用户活跃度
    var timestamp = Date.parse(new Date());
    var date = new Date(timestamp);
    var M = date.getMonth() + 1;
    var userInfo = {};
    userInfo.openid = openid;
    userInfo.userName = user.nickName;
    userInfo.userAvatar = user.avatarUrl;
    // 男性
    if(user.gender==1){
      userInfo.sex = "男"
    }else{
      userInfo.sex = "女"
    }
    userInfo.address = user.country;

    console.log(userInfo);
    
    wx.request({
      url: 'http://localhost:8080/user/info',
      data: {user:userInfo},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
    })
  },

globalData:{
  hasUserInfo:false,
  userInfo:{},
  openid:""
}
})
