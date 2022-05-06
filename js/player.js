/**
 * Created by 沐晨 on 2020/4/12.
 */
(function(window){
    function Player($audio){
        return new Player.prototype.init($audio);
    }
    Player.prototype = {
        constructor:Player,
        musicList:[],
        init:function($audio){
            this.$audio = $audio;
            this.audio = $audio.get(0);
        },
        currentindex : -1,


        preIndex:function(){
            var index = this.currentindex -1;
            if(index<0){
                index = this.musicList.length -1;
            }
            return index;
        },
        nextIndex:function(){
            var index = this.currentindex +1;
            if(index> this.nextIndex.length-1){
                index = 0;
            }
            return index;
        },

        PlayMusic:function(index,music){
        //判断是否同一音乐
            if(this.currentindex == index){
                //同一首音乐
                if(this.audio.paused){
                    this.audio.play();
                }else{
                    this.audio.pause();
                }
            }else{
                //不是同一首
                this.$audio.attr("src",music.linkurl);
                this.audio.play();
                this.currentindex = index;
            }

           // console.log( $(".list_music").eq(index));
            //更改歌曲状态
            if($(".list_music").eq(index).find(".list_menu>.mplay").hasClass("mpause")) {//判断当前歌曲是否播放
                $(".music_play").removeClass("music_play2");
                //取消此歌曲高亮
                $(".list_music").eq(index).find(".list_name").css("opacity",0.5);
                $(".list_music").eq(index).find(".list_singer").css("opacity",0.5);
                //更改歌曲播放状态
                $(".list_music").eq(index).find(".mplay").removeClass("mpause");
                $(".list_music").eq(index).find(".mplay").attr("title","播放");
                $(".list_music").eq(index).find(".list_number>p").show();
                $(".list_music").eq(index).find(".list_number>span").hide();
            }else{
                $(".music_play").addClass("music_play2");
                //高亮此歌曲
                $(".list_music").eq(index).find(".list_name").css("opacity",1);
                $(".list_music").eq(index).find(".list_menu a").css("opacity",0.5);
                $(".list_music").eq(index).find(".list_singer").css("opacity",1);
                //其他歌曲取消高亮
                $(".list_music").eq(index).siblings(".list_music").find(".list_name").css("opacity",0.5);
                $(".list_music").eq(index).siblings(".list_music").find(".list_singer").css("opacity",0.5);
                //更改此歌曲播放状态
                $(".list_music").eq(index).find(".mplay").toggleClass("mpause");
                $(".list_music").eq(index).find(".mplay").attr("title","暂停");
                $(".list_music").eq(index).find(".list_number>p").hide();
                $(".list_music").eq(index).find(".list_number>span").css("display","inline-block");
                //更改其他歌曲播放状态
                $(".list_music").eq(index).siblings(".list_music").find(".mplay").removeClass("mpause");
                $(".list_music").eq(index).siblings(".list_music").find(".mplay").attr("title","播放");
                $(".list_music").eq(index).siblings(".list_music").find(".list_number>p").show();
                $(".list_music").eq(index).siblings(".list_music").find(".list_number>span").hide();

            }


        }



    }
    Player.prototype.init.prototype = Player.prototype;
    window.Player = Player;
})(window);