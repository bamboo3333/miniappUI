//app.js
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

    this.globalData = {}
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
globalData:{
  hasUserInfo:false,
  userInfo:{}
}
})
