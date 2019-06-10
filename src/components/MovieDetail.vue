<template>
    <div class="main-container">
      <div class="movie-detail-container shadow">
        <div class="movie-image-container">
          <div class="movie-avatar-shadow">
            <img class="avatar" :src="movie.poster" onerror="this.src = '../../static/img/no-picture.png'"/>
          </div>
        </div>
        <div class="movie-info-container">
          <h3 class="movie-info-title">{{movie.title}}</h3>
          <p class="movie-info-subtitle">{{movie.also_known_as}}</p>
          <p class="movie-info-text">
            <md-chip v-for="(item, index) in movie.genres" :key="index">{{item}}</md-chip>
          </p>
          <p class="movie-info-text">{{movie.country}} / {{movie.runtime}}</p>
          <p class="movie-info-text">{{movie.release_date}}上映</p>
          <div class="movie-info-bottom">
            <div class="movie-info-button">
              <p>
                <md-button class="md-dense md-raised md-primary movie-large-button" v-show="show === '0'" @click.native="movieTicket">特惠购票</md-button>
              </p>
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
            </div>
            <div class="movie-info-remark">
              <div>
                <p class="movie-remark-type">豆瓣评分</p>
                <div class="movie-rank-info-container">
                  <div class="movie-remark-num">{{movie.doubanrating / 2.0}}</div>
                  <div class="movie-remark-image">
                    <el-rate
                      v-model="movie.doubanrating / 2.0"
                      disabled>
                    </el-rate>
                  </div>
                </div>
              </div>
              <div>
                <p class="movie-remark-type">猫眼评分</p>
                <div class="movie-rank-info-container">
                  <div class="movie-remark-num">{{movie.maoyanrating / 2.0}}</div>
                  <div class="movie-remark-image">
                    <el-rate
                      v-model="movie.maoyanrating / 2.0"
                      disabled>
                    </el-rate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-main-container">
        <div class="left-container">
          <md-tabs>
            <md-tab class="sub-tab" id="0" md-label="介绍">
                <div class="sub-item">
                  <div class="sub-item-title-container">
                    <h3 class="sub-title">剧情简介</h3>
                  </div>
                  <span>{{movie.plot_simple}}</span>
                </div>
                <div class="sub-item" style="margin-top: 100px">
                  <div class="sub-item-title-container">
                    <h3 class="sub-title">演职人员</h3>
                  </div>
                  <div class="sub-item-content">
                    <div>
                      <div class="staff-job">导演</div>
                      <div class="staff-pic">
                        <img :src="movie.directorList[0].img" onerror="this.src = '../../static/img/no-picture.png'"/>
                      </div>
                      <div class="staff-name">
                        {{movie.directorList[0].name}}
                      </div>
                    </div>
                    <div style="margin-left: 30px">
                      <div class="staff-job">演员</div>
                      <div style="display: flex">
                        <div class="staff-container" v-for="(item, index) in movie.actorList" v-if="index < 5" :key="index">
                          <div class="staff-pic">
                            <img :src="item.img" onerror="this.src = '../../static/img/no-picture.png'"/>
                          </div>
                          <div class="staff-name">
                            {{item.name}}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </md-tab>
            <md-tab class="sub-tab" id="1" md-label="演职人员">
                <div class="second-tab-container">
                  <div class="director-container">
                    <div>
                      <div class="staff-job">导演 ( {{movie.directorList.length}} )</div>
                      <div class="staff-pic">
                        <img :src="movie.directorList[0].img" onerror="this.src = '../../static/img/no-picture.png'"/>
                      </div>
                      <div class="staff-name">
                        {{ movie.directorList[0].name }}
                      </div>
                    </div>
                  </div>
                  <div class="staff-detail-container">
                    <div>
                      <div class="staff-job">演员 ( {{movie.actorList.length}} )</div>
                      <div class="staff-detail-list-container">
                        <div class="staff-detail" v-for="(item, index) in movie.actorList" :key="index">
                          <div class="staff-pic">
                            <img :src="item.img" onerror="this.src = '../../static/img/no-picture.png'"/>
                          </div>
                          <div class="staff-name">
                            {{ item.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </md-tab>
            <md-tab class="sub-tab" id="2" md-label="影评分析">
              <div class="sub-item">
                <div class="sub-item-title-container">
                  <h3 class="sub-title">电影总评</h3>
                </div>
                <span>{{analysis.summary}}</span>
              </div>
              <div class="sub-item" style="margin-top: 80px">
                <div class="sub-item-title-container">
                  <h3 class="sub-title">电影关键字</h3>
                </div>
                <md-chip class="md-primary chip" v-for="chip in analysis.keywords" :key="chip">{{ chip }}</md-chip>
              </div>
              <div class="sub-item" style="margin-top: 80px">
                <div class="sub-item-title-container">
                  <h3 class="sub-title">正面评价（{{analysis.positive.num}}）</h3>
                </div>
                <div class="remark-card" v-for="(item, index) in analysis.positive.list" :key="index">
                  <div>
                    <span class="remark-rank">
                      <span style="font-size: 24px">No.</span>
                      {{index + 1}}
                    </span>
                  </div>
                  <p>{{item}}</p>
                </div>
              </div>
              <div class="sub-item" style="margin-top: 80px">
                <div class="sub-item-title-container">
                  <h3 class="sub-title">负面评价（{{analysis.negative.num}}）</h3>
                </div>
                <div class="remark-card" v-for="(item, index) in analysis.negative.list" :key="index">
                  <div>
                    <span class="remark-rank">
                      <span style="font-size: 24px">No.</span>
                      {{index + 1}}
                    </span>
                  </div>
                  <p>{{item}}</p>
                </div>
              </div>
            </md-tab>
          </md-tabs>
        </div>
        <div class="right-container">
          <div class="sub-item">
            <div class="sub-item-title-container">
              <h3 class="sub-title">累积票房</h3>
            </div>
            <span class="ticket-num">{{movie.sale}}</span>
            <span>亿</span>
          </div>
          <div class="sub-item" style="margin-top: 100px">
            <div class="sub-item-title-container">
              <h3 class="sub-title">图集</h3>
            </div>
            <div class="pic-list-container">
              <div class="pic-container" v-for="(item, index) in movie.picList" :key="index">
                <img :src="item" onerror="this.src = '../../static/img/no-picture.png'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "movie-detail",
        data() {
          return {
            show: 0,
            movie: {
              id: 1,
              title: "大侦探皮卡丘",
              poster: "https://p0.meituan.net/movie/b6e77d67efdc6ac89a52b956ead366ae5785152.jpg@160w_220h_1e_1c",
              also_known_as: "POKÉMON Detective Pikachu",
              genres: ["冒险" , "奇幻" , "喜剧"],
              country: "美国",
              runtime: 104,
              release_date: "2019-05-10",
              doubanrating: 9.2,
              maoyanrating: 9.3,
              plot_simple: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
              directorList: [{
                name: "123",
                img: ""
              }],
              actorList: [
                {
                  name: "321",
                  img: ""
                },
                {
                  name: "321",
                  img: ""
                },
                {
                  name: "321",
                  img: ""
                },
                {
                  name: "321",
                  img: ""
                },
                {
                  name: "321",
                  img: ""
                }
              ],
              sale: 3.26,
              state: 0,
              picList: ["","","","",""]
            },
            analysis: {
              positive: {
                num: 130,
                list: ["这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！","这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！","这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！","绝对是今年tiff我看过的最有意思的一部电影，全场笑声掌声就没停过。节奏欢快，情节有趣又不失深度。V叔扮演的来自Bronx街头的意大利裔司机和Ali扮演的受高等教育的黑人音乐家碰撞出令人惊喜的火花，二人从纽约一路向南巡演，然而越向南种族歧视也越来越严重。导演用一种巧妙的角度向观众展示了当时的不公以及音乐家内心的纠葛。","今年看过最好的剧情片之一。剧本扎实，细节充实，表演到位。颇有《为黛西小姐开车》和《触不可及》的意味，但又因为主角角色的互换，在特定的时代和地域里散发出更强的乐趣。 chuy"]
              },
              negative: {
                num: 70,
                list: ["这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！","这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！","这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！","绝对是今年tiff我看过的最有意思的一部电影，全场笑声掌声就没停过。节奏欢快，情节有趣又不失深度。V叔扮演的来自Bronx街头的意大利裔司机和Ali扮演的受高等教育的黑人音乐家碰撞出令人惊喜的火花，二人从纽约一路向南巡演，然而越向南种族歧视也越来越严重。导演用一种巧妙的角度向观众展示了当时的不公以及音乐家内心的纠葛。","今年看过最好的剧情片之一。剧本扎实，细节充实，表演到位。颇有《为黛西小姐开车》和《触不可及》的意味，但又因为主角角色的互换，在特定的时代和地域里散发出更强的乐趣。 chuy"]
              },
              summary: "这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！这真是一个好电影！啊！",
              keywords: ["这真是一个好电影！啊！", "催泪", "剧情紧凑", "演技爆棚", "这真是一个好电影！啊！", "好", "催泪", "剧情紧凑", "演技爆棚", "asd"]
            }
          }
        },
        created() {
          this.show = this.$route.query.state;
        },
        mounted() {
          let id = this.$route.query.id;
          let title = this.$route.query.title;
          let thisVue = this;
          const loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          this.$ajax.get('/movie/detail',{
            params: {
              id: id,
              title: title
            }
          }).then((response) => {
            let data = response.data;
            let page = data.data;
            if (data.code === 0) {
              thisVue.movie = page;
              loading.close();
            }
          });
          this.$ajax.get('/movie/remark',{
            params: {
              id: id,
              name: title
            }
          }).then((response) => {
            let data = response.data;
            let page = data.data;
            if (data.code === 0) {
              thisVue.analysis = page;
            }
          });
        },
        methods: {
          movieTicket() {
            let thisVue = this
            let routeUrl = this.$router.resolve({
              path: "/ticket",
              query: {
                movie: JSON.stringify(thisVue.movie)
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
    display flex
    flex-direction column-reverse
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
  .sub-main-container
    width 100%
    height 100%
    display flex
  .left-container
    width 70%
    height 100%
    padding-right 90px
    text-align left
  .right-container
    width 30%
    height 100%
  .sub-item
    width 100%
    margin-top 20px
  .sub-title
    display inline-block
    margin 0
    padding 0
    font-weight 400
    font-size 18px
    color #333
    line-height 18px
  .sub-title:before
    float left
    content ""
    display inline-block
    width 4px
    height 18px
    margin-right 6px
    background-color #5E7CE2
  .sub-item-title-container
    width 100%
    margin-bottom 30px
  .sub-item-content
    width 100%
    display flex
  .staff-job
    font-size 16px
    color #333
    margin-bottom 16px
  .staff-name
    width 128px
    margin-top 15px
    line-height 1.2
    color #333
    text-align center
    text-overflow ellipsis
    overflow hidden
    white-space nowrap
    font-size 16px
  .staff-container
    margin-left 20px
  .staff-container:nth-child(1)
    margin-left 0
  .right-container
    text-align left
  .ticket-num
    font-size 40px
    margin-right 10px
  .pic-list-container
    width 100%
    display flex
    flex-flow row wrap
    align-content flex-start
  .pic-container
    flex 0 0 33%
    margin-bottom 30px
  .second-tab-container
    padding-top 20px
  .director-container
    display flex
  .staff-detail-container
    margin-top 40px
  .staff-detail-list-container
    width 100%
    display flex
    flex-flow row wrap
    align-content flex-start
  .staff-detail
    flex 0 0 16%
    margin-bottom 30px
  .sub-tab
    min-height 600px
  .chip
    margin 5px
  .remark-card
    width 100%
    padding 15px
    border-bottom 1px solid #e4e4e4
  .remark-rank
    font-size 16px
    font-weight 400
    line-height 40px
    color #5E7CE2
</style>
