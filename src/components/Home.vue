<template>
  <div class="main-container">
    <div class="left-container">
      <div class="recommend-container">
      <div class="recommend-container-title-container">
        <div class="recommend-container-title">正在热映</div>
        <div class="recommend-container-button">
          <md-button class="md-dense md-primary recommend-button" @click="showAllMovies(0)">
            <span>全部</span>
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
        </div>
      </div>
      <md-divider style="margin-bottom: 20px"></md-divider>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in onShowMovies" :key="item">
          <h3 class="medium">
            <img :src=item />
          </h3>
        </el-carousel-item>
      </el-carousel>
      <div class="movie-list-container">
        <div class="movie-item" v-for="(item, index) in movieOnShowList" :key="index">
          <md-card class="movie-item-card" md-with-hover @click.native="showMovieDetail(movieOnShowList[index].movieid, movieOnShowList[index].title)">
            <md-card-media-cover md-solid>
              <md-card-media>
                <img :src="item.poster" alt="poster">
              </md-card-media>

              <md-card-area>
                <md-card-header class="movie-item-cover">
                  <div class="movie-item-cover-container">
                    <div class="movie-item-text movie-item-title">
                      <span>{{item.title}}
                          <md-tooltip md-direction="bottom" style="transform: translateY(10px)">{{item.title}}</md-tooltip>
                      </span>
                    </div>
                    <div class="movie-item-text movie-item-remark">{{(item.doubanrating + item.maoyanrating) / 2.0}}</div>
                  </div>
                </md-card-header>
              </md-card-area>
            </md-card-media-cover>
          </md-card>
        </div>
      </div>
    </div>
      <div class="recommend-container" style="margin-top: 100px">
        <div class="recommend-container-title-container">
          <div class="recommend-container-title">即将上映</div>
          <div class="recommend-container-button">
            <md-button class="md-dense md-primary recommend-button" @click="showAllMovies(1)">
              <span>全部</span>
              <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
          </div>
        </div>
        <md-divider style="margin-bottom: 20px"></md-divider>
        <div class="movie-list-container">
          <div class="movie-item" v-for="(item, index) in movieNextList" :key="index">
            <md-card class="movie-item-card" md-with-hover @click.native="showMovieDetail(movieNextList[index].movieid, movieNextList[index].title)">
              <md-card-media-cover md-solid>
                <md-card-media>
                  <img class="no-cover-img" src="../../static/img/no-picture.png" alt="poster">
                </md-card-media>

                <md-card-area>
                  <md-card-header class="movie-item-cover">
                    <div class="movie-item-cover-container">
                      <div class="movie-item-text movie-item-title">
                        <span>{{item.title}}
                          <md-tooltip md-direction="bottom" style="transform: translateY(10px)">{{item.title}}</md-tooltip>
                        </span>
                      </div>
                      <md-button style="height: 30px">
                        <md-icon style="color: #ffb400">shopping_cart</md-icon>
                        <span style="color: #ffb400">预售</span>
                      </md-button>
                    </div>
                  </md-card-header>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </div>
        </div>
      </div>
      <div class="recommend-container" style="margin-top: 100px">
        <div class="recommend-container-title-container">
          <div class="recommend-container-title">热播电影</div>
          <div class="recommend-container-button">
            <md-button class="md-dense md-primary recommend-button" @click="showAllMovies(2)">
              <span>全部</span>
              <md-icon>keyboard_arrow_right</md-icon>
            </md-button>
          </div>
        </div>
        <md-divider style="margin-bottom: 20px"></md-divider>
        <div class="movie-list-container">
          <div class="movie-item" v-for="(item, index) in movieHotList" :key="index">
            <md-card class="movie-item-card" md-with-hover @click.native="showMovieDetail(movieHotList[index].movieid, movieHotList[index].title)">
              <md-card-media-cover md-solid>
                <md-card-media>
                  <img :src="item.poster" alt="poster">
                </md-card-media>

                <md-card-area>
                  <md-card-header class="movie-item-cover">
                    <div class="movie-item-cover-container">
                      <div class="movie-item-text movie-item-title">
                        <span>{{item.title}}
                          <md-tooltip md-direction="bottom" style="transform: translateY(10px)">{{item.title}}</md-tooltip>
                        </span>
                      </div>
                      <div class="movie-item-text movie-item-remark">{{(item.doubanrating + item.maoyanrating) / 2.0}}</div>
                    </div>
                  </md-card-header>
                </md-card-area>
              </md-card-media-cover>
            </md-card>
          </div>
        </div>
      </div>
    </div>
    <div class="right-container">
      <div class="sale-rank-container">
        <md-list>
          <md-subheader class="rank-title">今日票房</md-subheader>
          <md-card class="rank-card" md-with-hover @click.native="showMovieDetail(movieOnShowList[0].movieid, movieOnShowList[0].title)">
            <md-card-media-actions class="rank-top-card">
              <span class="rank-top-index">1</span>
              <md-card-media class="rank-top-image">
                <img class="rank-top-img" src="../../static/img/no-picture-horizal.png" alt="Cover">
              </md-card-media>
              <md-card-header class="rank-card-text">
                <div class="md-title rank-card-text-title">{{saleRankData[0].title}}</div>
                <div class="md-subhead rank-card-text-profit">{{saleRankData[0].sale}}</div>
              </md-card-header>
            </md-card-media-actions>
          </md-card>
          <md-list-item v-for="(item, index) in saleRankData" :key="index" v-if="index !== 0" @click="showMovieDetail(saleRankData[index].movieid, saleRankData[index].title)">
            <span class="rank-item-index" :class="index < 3 ? 'rank-item-index-top' : ''">{{index + 1}}</span>
            <span class="rank-item-name">{{item.title}}</span>
            <span class="rank-item-profit">{{item.sale}}</span>
          </md-list-item>
        </md-list>
      </div>
      <div class="sale-rank-container" style="margin-top: 98px">
        <md-list>
          <md-subheader class="rank-title">TOP 100</md-subheader>
          <md-button class="md-dense md-primary rank-button" @click="$router.push('/rank')">
            <span>查看完整榜单</span>
            <md-icon>keyboard_arrow_right</md-icon>
          </md-button>
          <md-card class="rank-card" md-with-hover @click.native="showMovieDetail(remarkRankData[0].movieid, remarkRankData[index].title)">
            <md-card-media-actions class="rank-top-card">
              <span class="rank-top-index">1</span>
              <md-card-media class="rank-top-image">
                <img class="rank-top-img" :src="remarkRankData[0].poster" alt="Cover">
              </md-card-media>
              <md-card-header class="rank-card-text">
                <div class="md-title rank-card-text-title">{{remarkRankData[0].title}}</div>
                <div class="md-subhead rank-card-text-profit">{{(remarkRankData[0].doubanrating + remarkRankData[0].maoyanrating) / 2.0}}分</div>
              </md-card-header>
            </md-card-media-actions>
          </md-card>
          <md-list-item v-for="(item, index) in remarkRankData" :key="index" v-if="index !== 0" @click="showMovieDetail(remarkRankData[index].movieid, remarkRankData[index].title)">
            <span class="rank-item-index" :class="index < 3 ? 'rank-item-index-top' : ''">{{index + 1}}</span>
            <span class="rank-item-name">{{item.title}}</span>
            <span class="rank-item-profit">{{item.maoyanrating}}分</span>
          </md-list-item>
        </md-list>
      </div>
    </div>
  </div>
</template>

<script>

    export default {
      name: "home",
        data(){
          return{
            saleRankData:[
              {
                name: '大侦探皮卡丘',
                profit: 350.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              }
            ],
            remarkRankData:[
              {
                name: '大侦探皮卡丘',
                profit: 350.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              },
              {
                name: '何以为家',
                profit: 123.9
              }
            ],
            onShowMovies: [
              'http://img5.mtime.cn/mg/2019/05/14/090625.81162127.jpg',
              'http://img5.mtime.cn/mg/2019/05/13/121854.88403121.jpg',
              'http://img5.mtime.cn/mg/2019/05/12/090614.37430543.jpg',
              'http://img5.mtime.cn/mg/2019/05/11/092849.10516206.jpg',
              'http://img5.mtime.cn/mg/2019/05/10/091103.45801615.jpg'
            ],
            movieOnShowList:[
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
              }
            ],
            movieNextList:[
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
              }
            ],
            movieHotList:[
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
              }
            ]
          }
        },
      created() {
        let thisVue = this;
        this.$ajax.get('/movie/now',{
          params: {
            size: 4,
            page: 1
          }
        }).then((response) => {
          let data = response.data;
          let page = data.data;
          if (data.code === 0) {
            thisVue.movieOnShowList = page
          }
        });
        this.$ajax.get('/movie/next',{
          params: {
            size: 4,
            page: 1
          }
        }).then((response) => {
          let data = response.data;
          let page = data.data;
          if (data.code === 0) {
            thisVue.movieNextList = page
          }
        });
        this.$ajax.get('/movie/hot',{
          params: {
            size: 4,
            page: 1
          }
        }).then((response) => {
          let data = response.data;
          let page = data.data;
          if (data.code === 0) {
            thisVue.movieHotList = page
          }
        });
        this.$ajax.get('/movie/list/sales',{
          params: {
            size: 10,
            page: 1
          }
        }).then((response) => {
          let data = response.data;
          let page = data.data;
          if (data.code === 0) {
            thisVue.saleRankData = page
          }
        });
        this.$ajax.get('/movie/list/score/maoyan',{
          params: {
            size: 10,
            page: 1
          }
        }).then((response) => {
          let data = response.data;
          let page = data.data;
          if (data.code === 0) {
            thisVue.remarkRankData = page
          }
        });
      },
      methods: {
        showAllMovies: function (index) {
          this.$router.push({
            path: '/list',
            query: {
              tagState: index
            }
          })
        },
        showMovieDetail: function (id, title) {
          let routeUrl = this.$router.resolve({
            path: '/detail',
            query: {
              id:id,
              title: title
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
    display flex
    padding 20px 60px
  .left-container
    width 70%
    height 100%
    padding-left 6%
  .right-container
    width 30%
    height 100%
  .md-list
    width 80%
    max-width 100%
    display inline-block
    vertical-align top
  .rank-title
    font-size 20px
    font-weight 600
    color #5E7CE2
  .rank-item-index
    width 30px
    margin-top 3px
    color #999999
  .rank-item-name
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    width 50%
  .rank-item-profit
    /*width 60px*/
    color #92B4F4
    position absolute
    right 0
  .rank-item-index-top
    color #92B4F4
  .md-card
    box-shadow none
  .rank-top-image
    height 75px
    width 100%
    display flex
    justify-content center
    align-content center
    overflow hidden
  .rank-top-img
    width 120px
  .rank-top-index
    width 30px
    line-height 75px
    font-size 16px
    color #92B4F4
  .rank-card
    margin 10px 0
  .rank-top-card
    padding 10px 6px
  .rank-card-text
    padding 0
    margin 0
  .rank-card-text-title
    font-size 18px
    width 160px
    text-align left
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    padding-left 10px
    padding-top 10px
  .rank-card-text-profit
    color #92B4F4
    text-align left
    padding-left 10px
    opacity 1
  .rank-button
    position absolute
    right 0
    top 0
  .recommend-container
    width 100%
    padding-top 8px
    text-align left
  .recommend-container-title
    color #5E7CE2
    font-size 20px
    font-weight 600
    margin-bottom 10px
  .el-carousel__item h3
    color #475669
    font-size 14px
    opacity 0.9
    line-height 200px
    margin 0
  .el-carousel__item:nth-child(2n)
    /*background-color #99a9bf*/
    background-color white
  .el-carousel__item:nth-child(2n+1)
    /*background-color #d3dce6*/
    background-color white
  .movie-list-container
    width 100%
    display flex
    flex-flow row wrap
    align-content flex-start
    margin-top 20px
  .movie-item
    flex 0 0 25%
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
  .recommend-container-title-container
    position relative
  .recommend-button
    margin-top 0
    margin-bottom 0
    position absolute
    right 0
    top -1px
  /*.no-cover-img*/
    /*width 100%*/
    /*height 220px*/
    /*display flex*/
    /*justify-content center*/
    /*align-items center*/
    /*overflow hidden*/
</style>
<style lang="stylus">
  .md-list-item-content
    justify-content left !important
</style>
