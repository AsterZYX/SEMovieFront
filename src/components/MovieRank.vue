<template>
  <div class="main-container">
    <div class="main-content-container">
      <div class="movie-rank-container">
        <h1 class="movie-rank-title">豆瓣评分TOP100</h1>
        <div class="movie-rank-list">
          <div class="movie-rank-item" v-for="(item, index) in movieListOfDouban" :key="index">
            <div class="movie-index">{{index + 1}}</div>
            <div>
              <img class="movie-cover" :src="item.poster"/>
            </div>
            <div class="movie-info-container">
              <div class="movie-info-left">
                <h2 class="movie-info-title">{{item.title}}</h2>
                <p class="movie-info-text">
                  主演：
                  <span v-for="(actor, actorIndex) in item.actorList" :key="actorIndex">
                    <span v-if="actorIndex !== 0">,</span>
                    {{actor.name}}
                  </span>
                </p>
                <p class="movie-info-text text-grey">{{item.release_date}}上映</p>
              </div>
              <div class="movie-info-right">
                <div class="movie-info-remark">{{item.doubanrating}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-divider class="rank-divider" direction="vertical"></el-divider>
      <div class="movie-rank-container">
        <h1 class="movie-rank-title">猫眼评分TOP100</h1>
        <div class="movie-rank-list">
          <div class="movie-rank-item" v-for="(item, index) in movieListOfMaoyan" :key="index">
            <div class="movie-index">{{index + 1}}</div>
            <div>
              <img class="movie-cover" :src="item.poster"/>
            </div>
            <div class="movie-info-container">
              <div class="movie-info-left">
                <h2 class="movie-info-title">{{item.title}}</h2>
                <p class="movie-info-text">
                  主演：
                  <span v-for="(actor, actorIndex) in item.actorList" :key="actorIndex">
                    <span v-if="actorIndex !== 0">,</span>
                    {{actor.name}}
                  </span>
                </p>
                <p class="movie-info-text text-grey">{{item.release_date}}上映</p>
              </div>
              <div class="movie-info-right">
                <div class="movie-info-remark">{{item.maoyanrating}}</div>
              </div>
            </div>
          </div>
        </div>
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
        name: "movie-rank",
        data() {
          return {
            movieListOfDouban:[
              {
                name: "调音师",
                remark: 9.5,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              }
            ],
            movieListOfMaoyan:[
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              },
              {
                name: "调音师",
                remark: 9.0,
                time: "2020-02-02",
                actors: ["皮卡丘" , "唐老鸭" , "钢铁侠"]
              }
            ],
            totalItems: 100,
            currentPage: 1,
            pageSize: 10
          }
        },
        created() {
          this.initRankList();
        },
        methods: {
          initRankList() {
            let thisVue = this;
            this.$ajax.get('/movie/list/score/maoyan',{
              params: {
                size: 10,
                page: thisVue.currentPage
              }
            }).then((response) => {
              let data = response.data;
              let page = data.data;
              if (data.code === 0) {
                thisVue.movieListOfMaoyan = page
              }
            });
            this.$ajax.get('/movie/list/score/douban',{
              params: {
                size: 10,
                page: thisVue.currentPage
              }
            }).then((response) => {
              let data = response.data;
              let page = data.data;
              if (data.code === 0) {
                thisVue.movieListOfDouban = page
              }
            });
          },
          handleCurrentChange: function (val) {
            this.currentPage = val;
            this.initRankList();
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .main-container
    width 100%
    height 100%
    padding-bottom 80px
  .main-content-container
    width 100%
    height 100%
    display flex
    padding 50px 60px 20px 60px
  .movie-rank-container
    width 50%
    height 100%
  .el-divider--vertical
    height 100%
    margin-right 45px
  .movie-rank-title
    color #5E7CE2
    margin-bottom 35px
  .movie-rank-item
    width 100%
    height 120px
    margin 15px 0
    display flex
  .movie-index
    width 25px
    height 25px
    background-color #92B4F4
    margin-top 47px
    line-height 25px
    font-size 16px
    color white
  .movie-cover
    height 120px
    width auto
    margin 0 15px
  .movie-info-container
    width calc(100% - 145px)
    height 100%
  .movie-info-left
    float left
    margin-left 10px
  .movie-info-title
    margin 20px 0 15px 0
    text-align left
  .movie-info-text
    text-align left
  .text-grey
    color #999
  .movie-info-right
    float right
  .movie-info-remark
    line-height 120px
    font-size 26px
    color #92B4F4
    width 40px
    text-align center
    margin-right 15px
</style>
