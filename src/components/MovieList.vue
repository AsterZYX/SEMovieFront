<template>
  <div class="main-container">
    <div class="tags-container">
      <div class="tags-item state-tags">
        <div class="tags-item-title">状态</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in stateEnums" :key="index" :class="index === stateIndex ? 'activeTag' : ''" @click="chooseMovieState(index)">{{item}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item type-tags">
        <div class="tags-item-title">类型</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in typeEnums" :key="index" :class="index === typeIndex ? 'activeTag' : ''" @click="chooseMovieType(index)">{{item}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item">
        <div class="tags-item-title">区域</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in regionEnums" :key="index" :class="index === regionIndex ? 'activeTag' : ''" @click="chooseMovieRegion(index)">{{item}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item">
        <div class="tags-item-title">年代</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in timeEnums" :key="index" :class="index === timeIndex ? 'activeTag' : ''" @click="chooseMovieTime(index)">{{item}}</md-button>
        </div>
      </div>
    </div>
    <div class="sort-container">
      <md-radio class="sort-item" v-model="sortType" value="heat">按热门排序</md-radio>
      <md-radio class="sort-item" v-model="sortType" value="time">按时间排序</md-radio>
      <md-radio class="sort-item" v-model="sortType" value="remark">按评价排序</md-radio>
    </div>
    <div class="movie-list-container">
      <div class="movie-item" v-for="(item, index) in movieList" :key="index">
        <md-card class="movie-item-card" md-with-hover @click.native="chooseMovie(index)">
          <md-card-media-cover md-solid>
            <md-card-media>
              <img src="https://p1.meituan.net/movie/d28b729ffe72353a72d1e7ef8a9b90591544978.jpg@160w_220h_1e_1c" alt="Skyscraper">
            </md-card-media>

            <md-card-area>
              <md-card-header class="movie-item-cover">
                <div class="movie-item-cover-container">
                  <div class="movie-item-text movie-item-title">{{item.name}}</div>
                  <div class="movie-item-text movie-item-remark">{{item.remark}}</div>
                </div>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </div>
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :total="totalItems"
      :current-page.sync="currentPage"
      :page-size="pageSize">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "movie-list",
        data() {
          return {
            stateIndex: 0,
            typeIndex: 0,
            regionIndex: 0,
            timeIndex: 0,
            stateEnums: ["正在上映","即将上映","全部影片"],
            typeEnums:["全部" , "爱情" , "喜剧" , "动画" , "剧情" , "恐怖" , "惊悚" , "科幻" , "动作" , "悬疑" , "犯罪" , "冒险" , "战争" , "奇幻" , "运动" , "家庭" , "古装" , "武侠" , "西部" , "历史" , "传记" , "歌舞" , "黑色电影" , "短片" , "纪录片" , "其他"],
            regionEnums:["全部" , "大陆" , "美国" , "韩国" , "日本" , "中国香港" , "中国台湾" , "泰国" , "印度" , "法国" , "英国" , "俄罗斯" , "意大利" , "西班牙" , "德国" , "波兰" ,  "澳大利亚" , "伊朗" , "其他"],
            timeEnums:["全部" , "2019以后" , "2019" , "2018" , "2017" , "2016" , "2015" , "2014" , "2013" , "2012" , "2011" ,  "2000-2010" , "90年代" , "80年代" , "70年代" , "更早"],
            sortType: 'heat',
            movieList:[
              {
                name: "调音师",
                remark: 9.0
              },
              {
                name: "何以为家",
                remark: 4.5
              },
              {
                name: "何以为家",
                remark: 4.5
              },
              {
                name: "何以为家",
                remark: 4.5
              },
              {
                name: "何以为家",
                remark: 4.5
              },
              {
                name: "何以为家",
                remark: 4.5
              },
              {
                name: "何以为家",
                remark: 4.5
              },
              {
                name: "大侦探皮卡丘",
                remark: 7.7
              },
              {
                name: "大侦探皮卡丘",
                remark: 7.7
              },
              {
                name: "大侦探皮卡丘",
                remark: 7.7
              },
              {
                name: "大侦探皮卡丘",
                remark: 7.7
              },
              {
                name: "大侦探皮卡丘",
                remark: 7.7
              },
              {
                name: "大侦探皮卡丘",
                remark: 7.7
              }
            ],
            totalItems: 0,
            currentPage: 1,
            pageSize: 30
          }
        },
        mounted(){
          if(this.$route.query.tagState){
            this.stateIndex = this.$route.query.tagState;

            let element = document.getElementsByClassName('md-scrollbar')[0];
            element.scrollTop = 0;
          }
        },
        methods: {
          chooseMovieState(index) {
            this.stateIndex = index
          },
          chooseMovieType(index) {
            this.typeIndex = index
          },
          chooseMovieRegion(index) {
            this.regionIndex = index
          },
          chooseMovieTime(index) {
            this.timeIndex = index
          },
          chooseMovie(index) {
            let routeUrl = this.$router.resolve({
              path: "/ticket",
              query: {
                id:index
              }
            });
            window.open(routeUrl .href, '_blank');
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .main-container
    width 100%
    height 100%
    padding 20px 7%
  .tags-container
    width 100%
    padding 20px 20px
  .tags-item
    width 100%
    padding 10px 0
    display flex
  .tags-item-title
    width 10%
    height 24px
    line-height 24px
    color #999
    font-size 14px
  .tags
    width 90%
    text-align left
  .tag-button
    width 88px
    height 24px
    line-height 24px
    margin 0 12px 0 0
  .activeTag
    background-color #92B4F4
    color white
  .sort-container
    width 100%
    height 50px
    margin 40px 40px 20px 40px
    padding 0 20px
    text-align left
  .sort-item
    margin-right 60px
  .movie-list-container
    width 100%
    padding 0 20px
    margin 0 20px
    display flex
    flex-flow row wrap
    align-content flex-start
  .movie-item
    flex 0 0 16%
    margin-bottom 30px
  .movie-item-card
    box-shadow none
  .movie-item-cover
    padding 10px 5px
    margin 0
  .movie-item-cover-container
    width 100%
    height 30px
    display flex
  .movie-item-text
    font-size 16px
    line-height 30px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    padding 0 5px
  .movie-item-title
    width 75%
    height 100%
    text-align left
  .movie-item-remark
    width 30%
    height 100%
    text-align right
    color #ffb400
    font-size 20px
    font-style italic
</style>
