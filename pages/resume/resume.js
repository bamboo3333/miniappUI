Page({
  data: {
    headUrl: '',
    person:{}
  },
  onLoad: function () {
    this.loadHead();
    this.loadInfo();
  },
  loadInfo:function(){
    var person = wx.getStorageSync("person");
    this.setData({person:person});
  },
  addHead: function () {
    var page = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath;
            console.log(savedFilePath);
            wx.setStorageSync("headUrl", savedFilePath);
          }
        })
        page.loadHead();
      }
    })
    page.loadHead();
  },
  loadHead: function () {
    var headUrl = wx.getStorageSync("headUrl");
    this.setData({ headUrl: headUrl });
  },
  editBaseInfo: function () {
    wx.navigateTo({
      url: '../baseInfo/baseInfo'
    })
  }
})