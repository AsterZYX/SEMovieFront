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
          <md-button class="tag-button" v-for="(item, index) in typeEnums" :key="index" :class="index === typeIndex ? 'activeTag' : ''" @click="chooseMovieType(index)">{{item.name}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item">
        <div class="tags-item-title">区域</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in regionEnums" :key="index" :class="index === regionIndex ? 'activeTag' : ''" @click="chooseMovieRegion(index)">{{item.name}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item">
        <div class="tags-item-title">年代</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in timeEnums" :key="index" :class="index === timeIndex ? 'activeTag' : ''" @click="chooseMovieTime(index)">{{item.name}}</md-button>
        </div>
      </div>
    </div>
    <div class="sort-container">
      <md-radio class="sort-item" v-model="sortType" value="1">按热门排序</md-radio>
      <md-radio class="sort-item" v-model="sortType" value="2">按时间排序</md-radio>
      <md-radio class="sort-item" v-model="sortType" value="3">按评价排序</md-radio>
    </div>
    <div class="movie-list-container">
      <div class="movie-item" v-for="(item, index) in movieList" :key="index">
        <md-card class="movie-item-card" md-with-hover @click.native="chooseMovie(index)">
          <md-card-media-cover md-solid>
            <md-card-media>
              <img :src="item.poster" alt="poster" onerror="this.src = '../../static/img/no-picture.png'">
            </md-card-media>

            <md-card-area>
              <md-card-header class="movie-item-cover">
                <div class="movie-item-cover-container">
                  <div class="movie-item-text movie-item-title">{{item.title}}</div>
                  <div class="movie-item-text movie-item-remark">{{(item.doubanrating + item.maoyanrating) / 2.0}}</div>
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
      :page-size="pageSize"
      @current-change="handleCurrentChange">
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
            typeEnums: [
              {
                name: "全部",
                id: ""
              },
              {
                name: "爱情",
                id: 3
              },
              {
                name: "喜剧",
                id: 2
              },
              {
                name: "动画",
                id: 4
              },
              {
                name: "剧情",
                id: 1
              },
              {
                name: "恐怖",
                id: 6
              },
              {
                name: "惊悚",
                id: 7
              },
              {
                name: "科幻",
                id: 10
              },
              {
                name: "动作",
                id: 5
              },
              {
                name: "悬疑",
                id: 8
              },
              {
                name: "犯罪",
                id: 11
              },
              {
                name: "冒险",
                id: 9
              },
              {
                name: "战争",
                id: 12
              },
              {
                name: "奇幻",
                id: 14
              },
              {
                name: "运动",
                id: 15
              },
              {
                name: "家庭",
                id: 16
              },
              {
                name: "古装",
                id: 17
              },
              {
                name: "武侠",
                id: 18
              },
              {
                name: "西部",
                id: 19
              },
              {
                name: "历史",
                id: 20
              },
              {
                name: "传记",
                id: 21
              },
              {
                name: "歌舞",
                id: 23
              },
              {
                name: "黑色电影",
                id: 24
              },
              {
                name: "短片",
                id: 25
              },
              {
                name: "纪录片",
                id: 13
              },
              {
                name: "其他",
                id: 100
              }
            ],
            regionEnums: [
              {
                name: "全部",
                id: ""
              },
              {
                name: "大陆",
                id: 2
              },
              {
                name: "美国",
                id: 3
              },
              {
                name: "韩国",
                id: 7
              },
              {
                name: "日本",
                id: 6
              },
              {
                name: "中国香港",
                id: 10
              },
              {
                name: "中国台湾",
                id: 13
              },
              {
                name: "泰国",
                id: 9
              },
              {
                name: "印度",
                id: 8
              },
              {
                name: "法国",
                id: 4
              },
              {
                name: "英国",
                id: 5
              },
              {
                name: "俄罗斯",
                id: 14
              },
              {
                name: "意大利",
                id: 16
              },
              {
                name: "西班牙",
                id: 17
              },
              {
                name: "德国",
                id: 11
              },
              {
                name: "波兰",
                id: 19
              },
              {
                name: "澳大利亚",
                id: 20
              },
              {
                name: "伊朗",
                id: 21
              },
              {
                name: "其他",
                id: 100
              }
            ],
            timeEnums: [
              {
                name: "全部",
                id: ""
              },
              {
                name: "2019以后",
                id: 100
              },
              {
                name: "2019",
                id: 14
              },
              {
                name: "2018",
                id: 13
              },
              {
                name: "2017",
                id: 12
              },
              {
                name: "2016",
                id: 11
              },
              {
                name: "2015",
                id: 10
              },
              {
                name: "2014",
                id: 9
              },
              {
                name: "2013",
                id: 8
              },
              {
                name: "2012",
                id: 7
              },
              {
                name: "2011",
                id: 6
              },
              {
                name: "2000-2010",
                id: 5
              },
              {
                name: "90年代",
                id: 4
              },
              {
                name: "80年代",
                id: 3
              },
              {
                name: "70年代",
                id: 2
              },
              {
                name: "更早",
                id: 11
              }
            ],
            sortType: '1',
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
        created() {
          this.initMovieList();
        },
        mounted(){
          if(this.$route.query.tagState){
            this.stateIndex = this.$route.query.tagState;
            this.initMovieList();

            let element = document.getElementsByClassName('md-scrollbar')[0];
            element.scrollTop = 0;
          }
        },
        methods: {
          initMovieList() {
            let thisVue = this;
            this.$ajax.get('/movie/list/search',{
              params: {
                size: 30,
                page: thisVue.currentPage,
                keyword: '',
                type: thisVue.typeEnums[thisVue.typeIndex].id,
                region: thisVue.regionEnums[thisVue.regionIndex].id,
                time: thisVue.timeEnums[thisVue.timeIndex].id,
                state: thisVue.stateIndex + 1,
                sort: thisVue.sortType,
              }
            }).then((response) => {
              let data = response.data;
              let page = data.data;
              if (data.code === 0) {
                thisVue.movieList = page;
                thisVue.totalItems = parseInt(data.message) * 30;

                console.log(data.message)
                console.log(typeof data.message)
              }
            });
          },
          chooseMovieState(index) {
            this.stateIndex = index;
            this.initMovieList();
          },
          chooseMovieType(index) {
            this.typeIndex = index;
            this.initMovieList();
          },
          chooseMovieRegion(index) {
            this.regionIndex = index;
            this.initMovieList();
          },
          chooseMovieTime(index) {
            this.timeIndex = index;
            this.initMovieList();
          },
          chooseMovie(index) {
            let thisVue = this;
            let routeUrl = this.$router.resolve({
              path: "/detail",
              query: {
                id: thisVue.movieList[index].movieid,
                title: thisVue.movieList[index].title,
                state: thisVue.stateIndex
              }
            });
            window.open(routeUrl .href, '_blank');
          },
          handleCurrentChange: function (val) {
            this.currentPage = val;
            this.initMovieList();
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
