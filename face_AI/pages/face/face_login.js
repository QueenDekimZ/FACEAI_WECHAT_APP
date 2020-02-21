//index.js
//获取应用实例
var time = null;
var myCanvas = null;
var windowHeight, windowWidth;
var type = null;
var suc_flag = 0;
Page({
  data: {
    device: true,
    camera: true,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  },
  onLoad() {
    this.setData({
      ctx: wx.createCameraContext(),
      device: this.data.device,
    })
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 屏幕宽度、高度
        windowHeight = res.windowHeight;
        windowWidth = res.windowWidth;
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
      }
    })
  },
  open() {
    this.setData({
      camera: true,
      login_res: "登录中..."
    })
    type = "takePhoto";
    let ctx = wx.createCameraContext(this)
    let that = this
    time = setInterval(function () {
      if (type == "takePhoto") {
        console.log("begin takephoto")
        // interval_limit += 200;
        // if (interval_limit >= 5000){
        //   type =="endPhoto";
        //   interval_limit = 0;
        // }
        ctx.takePhoto({
          quality: "normal",
          success: (res) => {
            console.log(res.tempImagePath)
            var tempImagePath = res.tempImagePath
            wx.uploadFile({
              url: 'http://192.168.43.236:90/face_login',
              filePath: tempImagePath,
              name: 'file',
              header: { "Content-type": "multipart/form-data" }, 
              success: function (res) {
                if (res.data == "success") {
                  type = "endPhoto";
                  suc_flag = 1;
                  that.setData({
                    login_res: "登录成功"
                  })}
                // else {
                //   that.setData({
                //     login_res: "...llsklsk..."
                //   })
                //   interval_limit = interval_limit + 200;
                //   if (interval_limit >= 3000){
                //     type = "endPhoto";
                //     interval_limit = 0;
                //     that.setData({
                //       login_res: "登陆超时"
                //     })
                //   }
                // }
                
              },
            })
          }
        })
      }
    }, 200)
    setTimeout(function () {
      clearInterval(time);
      type = "endPhoto";
      if (suc_flag == 0){
        that.setData({
          login_res: "登陆超时"
        })
      }
      suc_flag = 0;
    }, 5000)

  },
  // 关闭模拟的相机界面
  close() {
    console.log("关闭相机");
    type = "endPhoto"
    this.setData({
      login_res: "停止登录"
    })
  },
})
