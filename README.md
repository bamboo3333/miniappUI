# miniappUI
微信小程序前端
接受管理后端的数据    

![界面展示](https://s1.ax1x.com/2020/03/23/8Hr5M8.png)

    
    主要关注index.js中的`getMessage`函数：用来与数据库交互    
        
***        
``` javascript
     getMessage: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/news/one',
      data: '',
      header: {
        'content-type':'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(res.data);
        that.setData({message:res.data})
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
```
