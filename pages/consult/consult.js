// pages/consult/consult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: false,
    tihuoWay: '实习生',
    searchContent: "",
    message: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:8080/news/all',
      data: '',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        var newslList = that.data.message;
        if(res.data.msg=="OK"){
          for(var i=0;i<res.data.data.length;i++){
            var obj = {};
            obj.title = res.data.data[i].title;
            obj.typeId = res.data.data[i].typeId;
            newslList.push(obj);
          }
          that.setData({
            message:newslList
          })
        }
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  // 下来框事件绑定
  bindShowMsg() {
  //  console.log(this.data.select);
    this.setData({
      select: !this.data.select
    })
  },
  //选择下拉框特定内容的数据获取
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  //获取搜索内容
  getInput(e){
    this.setData({
      searchContent: e.detail.value
    })
  },
  //搜索按钮事件绑定
  search(e){
    var searchContent = this.data.searchContent;
    //进行搜索操作
    
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

  }
})