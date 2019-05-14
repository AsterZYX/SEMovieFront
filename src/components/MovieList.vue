<template>
  <div class="main-container">
    <div class="tags-container">
      <div class="tags-item state-tags">
        <div class="tags-item-title">状态</div>
        <ul class="tags">
          <li v-for="(item, index) in stateEnums" :key="index" :class="index === 0 ? 'activeTag' : ''">{{item}}</li>
        </ul>
      </div>
      <div class="tags-item tags-item-line type-tags">
        <div class="tags-item-title">类型</div>
        <ul class="tags">
          <li v-for="(item, index) in typeEnums" :key="index" :class="index === 0 ? 'activeTag' : ''">{{item}}</li>
        </ul>
      </div>
      <div class="tags-item tags-item-line">
        <div class="tags-item-title">区域</div>
        <ul class="tags">
          <li v-for="(item, index) in regionEnums" :key="index" :class="index === 0 ? 'activeTag' : ''">{{item}}</li>
        </ul>
      </div>
      <div class="tags-item tags-item-line">
        <div class="tags-item-title">年代</div>
        <ul class="tags">
          <li v-for="(item, index) in timeEnums" :key="index" :class="index === 0 ? 'activeTag' : ''">{{item}}</li>
        </ul>
      </div>
    </div>
    <div class="sort-container">
      <md-radio class="sort-item" v-model="sortType" value="heat">按热门排序</md-radio>
      <md-radio class="sort-item" v-model="sortType" value="time">按时间排序</md-radio>
      <md-radio class="sort-item" v-model="sortType" value="remark">按评价排序</md-radio>
    </div>
  </div>
</template>

<script>
    export default {
        name: "movie-list",
        data() {
          return {
            stateEnums: ["正在上映","即将上映","全部影片"],
            typeEnums:["全部" , "爱情" , "喜剧" , "动画" , "剧情" , "恐怖" , "惊悚" , "科幻" , "动作" , "悬疑" , "犯罪" , "冒险" , "战争" , "奇幻" , "运动" , "家庭" , "古装" , "武侠" , "西部" , "历史" , "传记" , "歌舞" , "黑色电影" , "短片" , "纪录片" , "其他"],
            regionEnums:["全部" , "大陆" , "美国" , "韩国" , "日本" , "中国香港" , "中国台湾" , "泰国" , "印度" , "法国" , "英国" , "俄罗斯" , "意大利" , "西班牙" , "德国" , "波兰" ,  "澳大利亚" , "伊朗" , "其他"],
            timeEnums:["全部" , "2019以后" , "2019" , "2018" , "2017" , "2016" , "2015" , "2014" , "2013" , "2012" , "2011" ,  "2000-2010" , "90年代" , "80年代" , "70年代" , "更早"],
            sortType: 'heat'
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .main-container
    width 100%
    height 100%
    padding 20px 5%
  .tags-container
    width 100%
    margin 20px 40px
    padding 0 20px
  .tags-item
    width 100%
    height 75px
    padding 10px 0
  .state-tags
    height 45px
  .type-tags
    height 101px
  .tags-item-line
    border-top 1px dotted #e5e5e5
  .tags-item-title
    height 24px
    line-height 24px
    float left
    color #999
    font-size 14px
  .tags-item ul
    margin 0
    padding 0
    list-style-type none
  .tags
    margin-left 40px!important
  .tags li
    width 88px
    padding 3px 9px
    display inline-block
    margin-left 12px
    float left
    cursor pointer
    text-align left
  .tags li:hover
    background-color #eee
    color black
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
</style>
