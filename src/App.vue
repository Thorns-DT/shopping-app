<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router-view" />
    </transition>
    <nav-bar v-if="isShowNav"></nav-bar>
    <i></i>
  </div>
</template>

<script>
import navBar from '@/components/NavBar';
export default {
  data() {
    return {
    transitionName: 'slide-left',
        isShowNav: true,
    ShowMenuList: ['/', '/home', '/category', '/cart', '/user'], // 该变量为需要导航栏的数组
    }
  },
  components: {
    navBar,
  },
  watch: {
    $route(to, from) {
      // 通过 ES6 提供的 includes 属性判断 to.path 是否包含在数组内
      if (this.ShowMenuList.includes(to.path)) {
        this.isShowNav = true
      } else {
        this.isShowNav = false
      }
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left' // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = ''   //同级无过渡效果
      }
    }
  }
};
</script>
<style lang="less">
@import './common/style/mixin';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
