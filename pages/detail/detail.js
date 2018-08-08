Page({
    data:{
        videoContent:"",
        videoTitle:"",
        videoName:"",
        videoData:[
            {
                id:"01",
                content:"http://toupai.liebao.cn/external/j8a6QEH0UJm6WNsXaoIY5Q_part_0.mp4",
                title: "IU - I Believe",
                name:"齐齐拐拐",
            },
            {
                id: "02",
                content: "http://toupai.liebao.cn/external/5z2xPfIcWXy4MwhbZDFf6A_part_0.mp4",
                title:"几十年前，刘德华与苏永康唱黄梅戏的画面，太经典了",
                name: "挑战好奇心",
            },
            {
                id: "03",
                content: "http://toupai.liebao.cn/compact/e6M2bgklXI2bNyBEBL_R1A_part_0.mp4",
                title: "激烈的赛车赛道 速度很性能都很强悍",
                name: "汽车一手资讯"
            }
        ],
        relateContent:[
            {
                videoImg:"http://img.v.cmcm.com/toupaicms/04a99131-1265-cafc-6c13-aab8ab47569c_crop_750x424.png",
                videoTitle:"IU - I Believe",
                eye_num: "21344",
                videoId: "01"
            },
            {
                videoImg: "http://img.v.cmcm.com/0e0b0ca3-3cae-578b-b08f-b31cefa39fda_crop_750x424.jpg",
                videoTitle: "几十年前，刘德华与苏永康唱黄梅戏的画面，太经典了",
                eye_num: "15688",
                videoId: "02"
            },
            {
                videoImg: "http://img.v.cmcm.com/cadbf4f3-6f32-5254-9cad-1de3614818cd_crop_750x424.jpg",
                videoTitle: "激烈的赛车赛道 速度很性能都很强悍",
                eye_num: "42390",
                videoId:"03"
            },
        ],
        
    },
    onLoad: function (option) {
        console.log(option.videoid);
        var that=this;
        console.log(that.data.videoData.length);
        for (var i = 0; i <= that.data.videoData.length-1;i++){
            if (that.data.videoData[i].id == option.videoid){
                console.log(that.data.videoData[i].content)
                that.setData({
                    videoContent: that.data.videoData[i].content,
                    videoTitle: that.data.videoData[i].title,
                    videoName: that.data.videoData[i].name
                });
            }
        }
    },
    gotoDetail:function(event){
        var videoid = event.currentTarget.dataset.videoid
        wx.navigateTo({
            url: '../detail/detail?videoid=' + videoid
        })
    }
})