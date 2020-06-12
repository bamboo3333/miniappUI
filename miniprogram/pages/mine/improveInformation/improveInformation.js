// miniprogram/pages/mine/improveInformation/improveInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo:true,
    userInfo:{},
    defaultAvatar:'../../../images/mine/avatar-default.png',
    userPassword:'',
    userPhone:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hasUserInfo = getApp().globalData.hasUserInfo;
    if(hasUserInfo){
      this.setData({
        userInfo:getApp().globalData.userInfo,
        hasUserInfo:true
      })
    }else{
       wx.showModal({
        title:'提示',
        content:'未登录，请先登录！！',
        showCancel:false,
        success:function(res){
          if(res.confirm){
            wx.switchTab({
               url:'../index/index'
            })
          }
        }
       })
    }  
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
  /**
   *  验证手机号是否输入符合鬼法
   */
  formSubmit:function(e){
    let password = e.detail.value.password
    let phone = e.detail.value.phone
    if(password === '' ||phone === ''){
      wx.showToast({
        title: '内容不能为空',
        image:'../../../images/mine/warning.png',
        duration:2000
      });
    }else if(!(/^[0-9a-zA-Z]{6,25}$/g.test(password))){
      wx.showToast({
        title: '输入不规范',
        image:'../../../images/mine/warning.png',
        duration:2000
      });
    }else if(!this.validateTelephone(phone)){
          wx.showToast({
            title: '电话号码不规范',
            image:'../../../images/mine/warning.png',
            duration:2000
          });
    }else{
      wx.request({
        // 后端提供的端口
        url: 'url',
        method:'POST',
        data:{userPassword:password,userPhone:phone},
        header:{
          "Content-Type":"application/X-www-form-urlencoded"
        },
        success:function(){
          wx.showToast({
            title: '成功',
            icon:'success',
            duration:2000
          })
        },
        fail:function(){
          wx.showModal({
            title:'提示',
            content:'系统拼命中,请稍后再尝试',
            showCancel:false,
            success:function(res){
              if(res.confirm){
                  wx.switchTab({
                    url: '../index/index'
                  })
              }
            }
          })
        }
      })
    }
  
  },

  validateTelephone:function(phone){
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (phone.length == 0) {
      return false;
    } else if (phone.length < 11) {
      return false;
    } else if (!myreg.test(phone)) {
      return false;
    } else {
      return true
    }
  },

})