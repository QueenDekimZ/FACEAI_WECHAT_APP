// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  go_face_detect:function() {
    wx.navigateTo({
      url: '/pages/face/ssd_detection',
    })
  },
  go_face_recognition: function(){
    wx.navigateTo({
      url: '/pages/face/face_recognition',
    })
  },
  go_face_landmark: function(){
    wx.navigateTo({
      url: '/pages/face/face_landmark',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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