// page/index/index.js
Page({
/* 页面的初始数据 */
    data: {
        changeSelect:0,//判断某个频道
        line: {
            width: 40,
            left: 0,
            oldActive: 0,
            swipeIndex: 0,
            scrLeft: 0,
            timeOut: ''
        },
        "nav":[{navName:"热门",select:0},
            {navName: "逗比",select: 1},
            {navName: "猎奇",select: 2},
            {navName: "娱乐",select: 3},
            {navName: "网红",select: 4},
            {navName: "社会",select: 5},
            {navName: "影视",select: 6}],
        channel_data: [
            {
                "video_id": "01",
                "image_poster": "http://img.v.cmcm.com/toupaicms/04a99131-1265-cafc-6c13-aab8ab47569c_crop_750x424.png",
                "title": "IU - I Believe",
                "view_eye_num": "13",
                "view_comment_num": "12"
            },
            {
                "video_id": "02",
                "image_poster": "http://img.v.cmcm.com/0e0b0ca3-3cae-578b-b08f-b31cefa39fda_crop_750x424.jpg",
                "title": "几十年前，刘德华与苏永康唱黄梅戏的画面，太经典了",
                "view_eye_num": "23",
                "view_comment_num": "22"
            },
        ],
    },
    //切换频道
    changeNav:function(data){
        var data_json= [
            [
                {
                    "video_id": "01",
                    "image_poster": "http://img.v.cmcm.com/toupaicms/04a99131-1265-cafc-6c13-aab8ab47569c_crop_750x424.png",
                    "title": "IU - I Believe",
                    "view_eye_num": "13",
                    "view_comment_num": "12"
                },
                {
                    "video_id": "02",
                    "image_poster": "http://img.v.cmcm.com/0e0b0ca3-3cae-578b-b08f-b31cefa39fda_crop_750x424.jpg",
                    "title": "几十年前，刘德华与苏永康唱黄梅戏的画面，太经典了",
                    "view_eye_num": "23",
                    "view_comment_num": "22"
                },
            ],
             [
                {
                    "video_id": "02",
                    "image_poster": "../images/4.jpg",
                    "title": "1万梓良的心狠手辣VS徐锦江的威猛霸气，谁气场更爆表？",
                    "view_eye_num": "43",
                    "view_comment_num": "42"
                },
            ],
             [
                {
                     "video_id": "02",
                    "image_poster": "../images/3.jpg",
                    "title": "2《封神传奇》黄晓明演绎杨戬 英姿勃发开天眼",
                    "view_eye_num": "53",
                    "view_comment_num": "52"
                },
            ],
            [
                {
                    "video_id": "02",
                    "image_poster": "../images/1.jpg",
                    "title": "3离死神最近的傻缺集锦",
                    "view_eye_num": "13",
                    "view_comment_num": "12"
                },
            ],
             [
                {
                    "video_id": "02",
                    "image_poster": "../images/2.jpg",
                    "title": "4这才是真正的高手来自民间！！！",
                    "view_eye_num": "23",
                    "view_comment_num": "22"
                },
            ],
             [
                {
                    "video_id": "02",
                    "image_poster": "../images/4.jpg",
                    "title": "5万梓良的心狠手辣VS徐锦江的威猛霸气，谁气场更爆表？",
                    "view_eye_num": "43",
                    "view_comment_num": "42"
                },
            ],
             [
                {
                    "video_id": "02",
                    "image_poster": "../images/3.jpg",
                    "title": "6《封神传奇》黄晓明演绎杨戬 英姿勃发开天眼",
                    "view_eye_num": "53",
                    "view_comment_num": "52"
                },
            ],
        ];
        var that=this
        that.setData({//把选中值放入判断值
            changeSelect: data.currentTarget.dataset.select
        });
        that.setData({
            channel_data: data_json[data.currentTarget.dataset.select]
        });
        var index = parseInt(data.currentTarget.dataset.select);
        wx.getSystemInfo({
            success: function (info) {
                wx.createSelectorQuery().selectAll('.channel').boundingClientRect(function (rect) {
                    wx.createSelectorQuery().select('.nav').scrollOffset(function (res) {
                        var WinWidth = info.windowWidth;
                        var width = rect[index].width;
                        var left = rect[index].left;
                        var scrLeft = res.scrollLeft;
                        that.setData({ 'line.width': width, 'line.left': left + scrLeft })
                        if (that.data.line.oldActive == index) {
                        } else if (that.data.line.oldActive < index) {
                            if (left + width + (WinWidth / 750 * 72) > WinWidth) {
                                that.setData({ 'line.scrLeft': rect[index - 3].left + scrLeft })
                            }
                        } else {
                            console.log(left)
                            console.log(scrLeft)
                            if (scrLeft > left + scrLeft - (WinWidth / 750 * 72)) {
                                var i = index - 1 > 0 ? rect[index - 1].left + scrLeft : 0;
                                that.setData({ 'line.scrLeft': i })
                            }
                        }
                        that.setData({ 'line.oldActive': index })
                    }).exec()
                }).exec()
            }
        })
    },
    // 点击进入视频详情页
    gotoDetail:function(event){
        var videoid = event.currentTarget.dataset.videoid
        wx.navigateTo({
            url: '../detail/detail?videoid=' + videoid
        })
    },
    //  用户点击右上角分享
    onShareAppMessage: function () {
        return {
            title: '头牌超多疯传热门短视频，拯救不开心！',
            path: '/home/home'
        }
    },
})