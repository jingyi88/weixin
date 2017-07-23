//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  data: {
    objectArray: [
    { id: 5, unique: 'unique_5'},
    { id: 4, unique: 'unique_4'},
    { id: 3, unique: 'unique_3'},
    { id: 2, unique: 'unique_2'},
    { id: 1, unique: 'unique_1'},
    { id: 0, unique: 'unique_0'},
  ],
    numberArray: [1, 2, 3, 4]
},
  switch: function(e) {
  const length = this.data.objectArray.length
  for (let i = 0; i < length; ++i) {
    const x = Math.floor(Math.random() * length)
    const y = Math.floor(Math.random() * length)
    const temp = this.data.objectArray[x]
    this.data.objectArray[x] = this.data.objectArray[y]
    this.data.objectArray[y] = temp
  }
  this.setData({
    objectArray: this.data.objectArray
  })
},
addToFront: function(e) {
  const length = this.data.objectArray.length
  this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
  this.setData({
    objectArray: this.data.objectArray
  })
},
addNumberToFront: function(e) {
  this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
  this.setData({
    numberArray: this.data.numberArray
  })
}
})

