<template>
  <div class="main-container">
    <div class="left-container"></div>
    <div class="right-container">
      <div class="sale-rank-container">
        <md-list>
          <md-subheader class="rank-title">今日票房</md-subheader>
          <md-card class="rank-card">
            <md-card-media-actions class="rank-top-card">
              <md-card-media class="rank-top-image">
                <span class="rank-top-index">1</span>
                <img class="rank-top-img" src="https://p0.meituan.net/mmdb/33005c10b741bcd6271ab9fd2d5194ac2407254.jpg@120w_80h_1e_1c" alt="Cover">
              </md-card-media>
              <md-card-header class="rank-card-text">
                <div class="md-title rank-card-text-title">{{saleRankData[0].name}}</div>
                <div class="md-subhead rank-card-text-profit">{{saleRankData[0].profit}}万</div>
              </md-card-header>
            </md-card-media-actions>
          </md-card>
          <md-list-item v-for="(item, index) in saleRankData" :key="index" to="/123" v-if="index !== 0">
            <span class="rank-item-index" :class="index < 3 ? 'rank-item-index-top' : ''">{{index + 1}}</span>
            <span class="rank-item-name">{{item.name}}</span>
            <span class="rank-item-profit">{{item.profit}}万</span>
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
            ]
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
  .right-container
    width 30%
    height 100%
  .md-list
    width 320px
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
    margin-left -40%
  .rank-item-profit
    width 60px
    color #92B4F4
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
    padding 0
  .rank-card-text
    padding 0
    margin 0
  .rank-card-text-title
    font-size 18px
    width 160px
    text-align left
    padding-left 10px
    padding-top 10px
  .rank-card-text-profit
    color #92B4F4
    text-align left
    padding-left 10px
    opacity 1
</style>
