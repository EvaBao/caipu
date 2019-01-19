//index.js
//获取应用实例
var app = getApp()
var arr_name = ["常见菜式", "主食", "小吃", "甜品", "饮品", "餐时", "适宜人群", "食疗食补",
                "场景", "时节", "饮食方式", "女性", "男性", "中式菜系", "外国美食",
                "烘培", "传统美食", "制作作难度", "所需时间", "菜品口味", "主要工艺"]
var arr_link = [1, 10, 15, 52, 62, 68, 75, 82, 98, 112, 147, 161, 218, 166, 182,
                188, 192, 197, 202, 205, 212, 227, 132]
var file = "../../pages/list/list"
Page({
    data: {
        items: [{
            id: "1",
            src: "../../res/img/caishi.jpg",
            text: arr_name[0]
        }, {
            id: "10",
            src: "../../res/img/zhushi.jpg",
            text: arr_name[1]
        }, {
            id: "15",
            src: "../../res/img/xiaochi.jpg",
            text: arr_name[2]
        }, {
            id: "52",
            src: "../../res/img/tianpin.jpg",
            text: arr_name[3]
        }, {
            id: "62",
            src: "../../res/img/yinpin.jpg",
            text: arr_name[4]
        }, {
            id: "68",
            src: "../../res/img/canshi.png",
            text: arr_name[5]
        }, {
            id: "75",
            src: "../../res/img/renqun.png",
            text: arr_name[6]
        }, {
            id: "82",
            src: "../../res/img/tiaoyang.png",
            text: arr_name[7]
        }, {
            id: "98",
            src: "../../res/img/changjing.jpg",
            text: arr_name[8]
        }, {
            id: "112",
            src: "../../res/img/shijie.jpg",
            text: arr_name[9]
        }, {
            id: "147",
            src: "../../res/img/fangshi.png",
            text: arr_name[10]
        }, {
            id: "161",
            src: "../../res/img/nvxingjibing.png",
            text: arr_name[11]
        }, {
            id: "218",
            src: "../../res/img/nanxing.png",
            text: arr_name[12]
        }, {
            id: "166",
            src: "../../res/img/zhongshi.jpg",
            text: arr_name[13]
        }, {
            id: "182",
            src: "../../res/img/waiguo.jpg",
            text: arr_name[14]
        }, {
            id: "188",
            src: "../../res/img/hongpei.png",
            text: arr_name[15]
        }, {
            id: "192",
            src: "../../res/img/chuantong.jpg",
            text: arr_name[16]
        }, {
            id: "197",
            src: "../../res/img/zhizuo.jpg",
            text: arr_name[17]
        }, {
            id: "202",
            src: "../../res/img/shijian.jpg",
            text: arr_name[18]
        }, {
            id: "205",
            src: "../../res/img/kouwei.jpg",
            text: arr_name[19]
        }, {
            id: "212",
            src: "../../res/img/gongyi.jpg",
            text: arr_name[20]
        }],
        url:file,
    },
})
