var app=getApp()
Page({
  
goBaidu:function(){
  wx.navigaTo({
    url:'../out/out',
    success:function(){

    },//成功后的回调；
    fail:function(){},//失败后的回调；
    complete:function(){}
  })
},
})