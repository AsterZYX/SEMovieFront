<template>
  <div class="main-container">
    <div class="movie-detail-container"></div>
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
        <md-table-row v-for="(item, index) in cinemaList" :key="index">
          <md-table-cell class="cinema-item">
            <p class="cinema-item-title">{{ item.name }}</p>
            <p class="text-grey">地址：{{ item.address }}</p>
          </md-table-cell>
          <md-table-cell class="cinema-item-right text-grey">
            ￥
            <span class="text-blue">{{ item.price }}</span>
            起</md-table-cell>
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
                price: 34
              },
              {
                name: '卢米埃影城',
                address: '高淳区富克斯5楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
              },
              {
                name: '幸福蓝海国际影城',
                address: '浦口区柳洲东路189号京新广场4楼',
                price: 34
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
          console.log(this.timeEnums);
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
    height 400px
    background-color #eeeeee
    margin-bottom 20px
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
