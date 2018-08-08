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
            }
        ],
        relateContent:[
            {
                videoImg:"http://img.v.cmcm.com/af60cb07-f560-533e-be9f-79775a0a6862_crop_200x140.jpg",
                videoTitle:"贝爷在格鲁吉亚大高加索山二，绝对不要直接吃雪",
                eye_num:"21344"
            },
            {
                videoImg: "http://img.v.cmcm.com/c14b6d01-e767-5374-9f30-f2a44ff44b58_crop_200x140.jpg",
                videoTitle: "贝爷在格鲁吉亚大高加索山三，不敢吃秃鹫蛋",
                eye_num: "15688"
            },
            {
                videoImg: "http://img.v.cmcm.com/034fa0fc-bdd8-5cef-8692-4af5dcb5b0ff_crop_200x140.jpg",
                videoTitle: "贝爷在格鲁吉亚大高加索山四，差点摔死",
                eye_num: "42390"
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
    }
})