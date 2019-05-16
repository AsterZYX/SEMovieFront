<template>
  <div class="main-container">
    <div class="movie-detail-container shadow">
      <div class="movie-image-container">
        <div class="movie-avatar-shadow">
          <img class="avatar" src="https://p0.meituan.net/movie/f29c0f9ff0340d00085f4bc1a395ecf02603950.jpg@464w_644h_1e_1c"/>
        </div>
      </div>
      <div class="movie-info-container">
        <h3 class="movie-info-title">{{movie.name}}</h3>
        <p class="movie-info-subtitle">{{movie.english}}</p>
        <p class="movie-info-text">
          <md-chip v-for="(item, index) in movie.tags" :key="index">{{item}}</md-chip>
        </p>
        <p class="movie-info-text">{{movie.region}} / {{movie.duration}}分钟</p>
        <p class="movie-info-text">{{movie.time}}上映</p>
        <div class="movie-info-bottom">
          <div class="movie-info-button">
            <p class="movie-small-button">
              <md-button class="md-dense md-primary">
                <md-icon>favorite_border</md-icon>
                想看
              </md-button>
              <md-button class="md-dense md-primary">
                <md-icon>star_border</md-icon>
                评分
              </md-button>
            </p>
            <p>
              <md-button class="md-dense md-raised md-primary movie-large-button" @click.native="movieDetail">查看更多电影详情</md-button>
            </p>
          </div>
          <div class="movie-info-remark">
            <div>
              <p class="movie-remark-type">豆瓣评分</p>
              <div class="movie-rank-info-container">
                <div class="movie-remark-num">{{movie.remark[0]}}</div>
                <div class="movie-remark-image">
                  <el-rate
                    v-model="movie.remark[0]"
                    disabled>
                  </el-rate>
                </div>
              </div>
            </div>
            <div>
              <p class="movie-remark-type">猫眼评分</p>
              <div class="movie-rank-info-container">
                <div class="movie-remark-num">{{movie.remark[1]}}</div>
                <div class="movie-remark-image">
                  <el-rate
                    v-model="movie.remark[1]"
                    disabled>
                  </el-rate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tags-container">
      <div class="tags-item state-tags">
        <div class="tags-item-title">日期</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in timeEnums" :key="index" :class="index === timeIndex ? 'activeTag' : ''" @click="chooseCinemaTime(index)">{{item}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item type-tags">
        <div class="tags-item-title">品牌</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in brandEnums" :key="index" :class="index === brandIndex ? 'activeTag' : ''" @click="chooseCinemaBrand(index)">{{item}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item">
        <div class="tags-item-title">行政区</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in areaEnums" :key="index" :class="index === areaIndex ? 'activeTag' : ''" @click="chooseCinemaArea(index)">{{item}}</md-button>
        </div>
      </div>
      <md-divider></md-divider>
      <div class="tags-item">
        <div class="tags-item-title">特殊厅</div>
        <div class="tags">
          <md-button class="tag-button" v-for="(item, index) in cinemaEnums" :key="index" :class="index === cinemaIndex ? 'activeTag' : ''" @click="chooseCinemaType(index)">{{item}}</md-button>
        </div>
      </div>
    </div>
    <div class="cinema-list-container">
      <md-table class="cinema-list" v-model="cinemaList" md-sort="name" md-sort-order="asc" md-card>
        <md-table-toolbar>
          <h1 class="md-title cinema-list-title">
            <md-icon>shop_two</md-icon>
            影院列表</h1>
        </md-table-toolbar>
        <md-table-row>
          <md-table-head>影院</md-table-head>
          <md-table-head class="cinema-item-right">猫眼票价</md-table-head>
          <md-table-head class="cinema-item-right">豆瓣票价</md-table-head>
          <md-table-head class="cinema-item-right">淘票票价格</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>
        <md-table-row v-for="(item, index) in cinemaList" :key="index">
          <md-table-cell class="cinema-item">
            <p class="cinema-item-title">{{ item.name }}</p>
            <p class="text-grey">地址：{{ item.address }}</p>
          </md-table-cell>
          <md-table-cell class="cinema-item-right text-grey">
            ￥
            <span class="text-blue">{{ item.maoyanPrice }}</span>
            起
          </md-table-cell>
          <md-table-cell class="cinema-item-right text-grey">
            ￥
            <span class="text-blue">{{ item.doubanPrice }}</span>
            起
          </md-table-cell>
          <md-table-cell class="cinema-item-right text-grey">
            ￥
            <span class="text-blue">{{ item.taobaoPrice }}</span>
            起
          </md-table-cell>
          <md-table-cell class="cinema-item-right">
            <md-button class="md-raised md-primary md-mini">购票选座</md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
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
        name: "movie-ticket",
        data() {
          return {
            movie: {
              id: 1,
              name: "大侦探皮卡丘",
              english: "POKÉMON Detective Pikachu",
              tags: ["冒险" , "奇幻" , "喜剧"],
              region: "美国",
              duration: 104,
              time: "2019-05-10",
              remark:[9.6, 9.3],
              sales: 3.26
            },
            timeIndex: 0,
            brandIndex: 0,
            areaIndex: 0,
            cinemaIndex: 0,
            timeEnums: [],
            brandEnums:["全部" , "幸福蓝海国际影城" , "万达影城" , "金逸影城" , "卢米埃影城" , "中影国际影城" , "横店电影城" , "大地影院" , "UME国际影城" , "海上国际影城" , "星美国际影城" , "耀莱成龙国际影城" , "星河国际影城" , "艾米1895影院" , "沃美影城" , "SFC上影影城" , "保利国际影城" , "CGV影城" , "其他"],
            areaEnums:["全部" , "地铁附近" , "鼓楼区" , "江宁区" , "浦口区" , "六合区" , "栖霞区" , "秦淮区" , "雨花台区" , "玄武区" , "溧水区" , "建邺区" , "高淳区"],
            cinemaEnums:["全部" , "IMAX厅" , "CGS中国巨幕厅" , "杜比全景声厅" , "Dolby Cinema厅" , "RealD厅" , "RealD 6FL厅" , "4DX厅" , "DTS:X 临境音厅" , "儿童厅" , "4K厅" , "4D厅" , "巨幕厅"],
            sortType: 'heat',
            cinemaList:[
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '卢米埃影城',
                address: '高淳区富克斯5楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                maoyanPrice: 34,
                doubanPrice: 29,
                taobaoPrice: 36
              }
            ],
            totalItems: 0,
            currentPage: 1,
            pageSize: 12
          }
        },
        methods: {
          chooseCinemaTime(index) {
            this.timeIndex = index
          },
          chooseCinemaBrand(index) {
            this.brandIndex = index
          },
          chooseCinemaArea(index) {
            this.areaIndex = index
          },
          chooseCinemaType(index) {
            this.cinemaIndex = index
          },
          getWeek(i) {
            let result;
            if( i > new Date().getDay()){
              result = "周" + "日一二三四五六".charAt(new Date().getDay()- i + 7);
            } else {
              result = "周" + "日一二三四五六".charAt(new Date().getDay()-i);
            }
            return result
          },
          getDay(day) {
            let today = new Date();
            let targetday_milliseconds = today.getTime() + 1000*60*60*24*day;
            today.setTime(targetday_milliseconds);
            let tYear = today.getFullYear();
            let tMonth = today.getMonth();
            let tDate = today.getDate();
            tMonth = this.doHandleMonth(tMonth + 1);
            tDate = this.doHandleMonth(tDate);
            return tMonth+"-"+tDate;
          },
          doHandleMonth(month) {
            let m = month;
            if(month.toString().length === 1){
              m = "0" + month;
            }
            return m;
          },
          movieDetail() {
            let thisVue = this
            let routeUrl = this.$router.resolve({
              path: "/detail",
              query: {
                id:thisVue.movie.id
              }
            });
            window.open(routeUrl .href, '_blank');
          }
        },
        mounted() {
          console.log(this.$route.query.id);
          for (let i = 0; i < 7; i++) {
            if (i === 0) {
              this.timeEnums.push("今天" + this.getDay(0));
            } else if (i === 1) {
              this.timeEnums.push("明天" + this.getDay(1));
            } else if (i === 2) {
              this.timeEnums.push("后天" + this.getDay(2));
            } else {
              this.timeEnums.push(this.getWeek(i) + this.getDay(i))
            }
          }
          this.movie.remark[0] = parseFloat((this.movie.remark[0]/2).toFixed(1));
          this.movie.remark[1] = parseFloat((this.movie.remark[1]/2).toFixed(1));
        }
    }
</script>

<style lang="stylus" scoped>
  .main-container
    width 100%
    height 100%
    padding 20px 7%
  .movie-detail-container
    width 100%
    height 325px
    margin-bottom  90px
    position relative
  .shadow
    box-shadow 0 12px 8px -12px #ddd
    border-radius 10px
  .movie-image-container
    width 300px
    height 370px
    float left
    position relative
    top 30px
    overflow hidden
    z-index 9
  .movie-avatar-shadow
    position relative
    margin 0 50px
    width 240px
    height 370px
    padding-bottom 40px
    background url(../../static/img/avatar-shadow.png) no-repeat bottom
  .avatar
    border 4px solid #fff
    height 330px
    width 240px
  .movie-info-container
    position relative
    float left
    top 30px
    height 220px
    padding 10px 20px
    text-align left
  .movie-info-title
    font-size 26px
    line-height 32px
    font-weight 700
  .movie-info-subtitle
    font-size 18px
    margin-bottom 14px
    line-height 1.3
  .movie-info-text
    font-size 14px
    margin-top 8px
  .movie-info-bottom
    width 100%
    display flex
  .movie-info-button
    width 260px
  .movie-small-button
    margin-top 20px
  .movie-large-button
    width 190px
  .movie-remark-type
    font-size 12px
    margin-bottom 5px
  .movie-rank-info-container
    display flex
  .movie-remark-num
    width 60px
    font-size 30px
    color #ffc600
    height 30px
    line-height 30px
  .movie-remark-image
    width 200px
    height 30px
    font-size 16px
    line-height 30px
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
    width 120px
    height 24px
    line-height 24px
    margin 0 12px 0 0
  .activeTag
    background-color #92B4F4
    color white
  .cinema-list-container
    width 100%
    margin-top 10px
  .cinema-list
    box-shadow none
  .cinema-list-title
    text-align left
  .cinema-item
    text-align left
    padding  10px 0
  .cinema-item-right
    text-align right
  .cinema-item-title
    font-size 16px
    margin-bottom 13px
  .text-grey
    color #999
  .text-blue
    color: #5E7CE2
    font-size 20px
</style>
