<template>
  <div class="home">
    <header class="home-header wrap">
      <router-link tag="i" to="./category">
        <i class="nbicon nbmenu2"></i>
      </router-link>
      <div class="header-search">
        <span class="app-name">莞工书屋</span>
        <i class="iconfont nbiconSearch"></i>
        <router-link tag="span" class="search-title" to="./product-list"
          >醉后不知天在水，满船清梦压星河</router-link
        >
      </div>
      <router-link class="login" tag="span" to="./login" v-if="!isLogin"
        >登录</router-link
      >
      <router-link class="login" tag="span" to="./user" v-else>
        <van-icon name="manager-o" />
      </router-link>
    </header>

    <swiper :list="swiperList"></swiper>

    <div class="category-list">
      <div v-for="item in categoryList" v-bind:key="item.categoryId">
        <img :src="item.imgUrl" />
        <span>{{ item.name }}</span>ss
      </div>
    </div>


    
  </div>



</template>

<script>
import { getLocal } from '@/common/js/utils';
import { swiper } from '@/components/Swiper';
import { getHome } from '../service/home';
import { Toast } from 'vant';
export default {
  name: 'Home',
  data() {
    return {
      isLogin: false,
      swiperList: [],
      categoryList: [
        {
          name: '楼楼交友',
          imgUrl: '//s.yezgea02.com/1598679532890/jiaoyou.png',
          categoryId: 100001,
        },
        {
          name: '楼楼家政',
          imgUrl: '//s.yezgea02.com/1598679532890/jiazheng.png',
          categoryId: 100003,
        },
        {
          name: '楼楼水产',
          imgUrl: '//s.yezgea02.com/1598679734813/shuichan1.png',
          categoryId: 100002,
        },
        {
          name: '楼楼租车',
          imgUrl: '//s.yezgea02.com/1598679532890/zuche.png',
          categoryId: 100004,
        },
        {
          name: '楼楼招聘',
          imgUrl: '//s.yezgea02.com/1598679792590/pin.png',
          categoryId: 100005,
        },
        {
          name: '楼楼二手',
          imgUrl: '//s.yezgea02.com/1598679853415/ershou.png',
          categoryId: 100006,
        },
        {
          name: '楼楼宠物',
          imgUrl: '//s.yezgea02.com/1598679532890/chongwu.png',
          categoryId: 100007,
        },
        {
          name: '楼楼外卖',
          imgUrl: '//s.yezgea02.com/1598679905787/wm.png',
          categoryId: 100008,
        },
        {
          name: '楼楼电器',
          imgUrl: '//s.yezgea02.com/1598680199443/dianqi.png',
          categoryId: 100009,
        },
        {
          name: '楼楼充值',
          imgUrl: '//s.yezgea02.com/1598680264015/czcz.png',
          categoryId: 1000010,
        },
      ],



    };
  },
  components: {
    swiper,
  },
  async mounted() {
    const token = getLocal('token');
    if (token) {
      this.isLogin = true;
    }
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
    const { data } = await getHome();
    this.swiperList = data.carousels;
  },
};
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.home {
  .home-header {
    position: fixed;
    left: 0;
    top: 0;
    .wh(100%, 50px);
    .fj();
    line-height: 50px;
    padding: 0 15px;
    .boxSizing();
    font-size: 15px;
    color: #fff;
    z-index: 10000;
    .nbmenu2 {
      color: @primary;
    }
    &.active {
      background: @primary;
      .nbmenu2 {
        color: #fff;
      }
      .login {
        color: #fff;
      }
    }

    .header-search {
      display: flex;
      .wh(74%, 20px);
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .app-name {
        padding: 0 10px;
        color: @primary;
        font-size: 20px;
        font-weight: bold;
        border-right: 1px solid #666;
      }
      .icon-search {
        padding: 0 10px;
        font-size: 17px;
      }
      .search-title {
        font-size: 12px;
        color: #666;
        line-height: 21px;
      }
    }
    .login {
      color: @primary;
      line-height: 52px;
      .van-icon-manager-o {
        font-size: 20px;
        vertical-align: -3px;
      }
    }
  }


}
</style>