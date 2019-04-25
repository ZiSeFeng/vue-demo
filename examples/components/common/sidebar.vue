<template>
  <div class="sidebar-area">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :unique-opened="true">
      <div v-for="(group, index) in data.groups">
        <el-submenu index="index+1" >
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{group.groupName}}</span>
          </template>
          <el-menu-item-group>
            <div v-for="(list, i) in group.list" >
<!--               <router-link :to="data.path+group.path+list.path">
                <el-menu-item index="1">
                  {{list.title}}
                </el-menu-item>
              </router-link> -->
              <router-link v-for="(column, j) in list.column" :to="data.path+group.path+list.path+column.path">
                <el-menu-item index="1">
                  {{list.title}}
                </el-menu-item>
              </router-link>
            </div>
            <div >
              
            </div>
          </el-menu-item-group>
        </el-submenu>
      </div>



<!--       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">通行证</span>
        </template>
        <el-menu-item-group>
          <router-link to="/manage/passport/setting/index">
            <el-menu-item index="1">
              设置
            </el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>



      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">h5游戏</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/h5game/h5copyright">
            <router-link to="/manage/h5game/h5copyright/index">h5友情链接</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">site</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/banner/site/list">banner list</el-menu-item>
          <el-menu-item index="/manage/banner/site/slide">banner slide</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-sort"></i>
          <span slot="title">notice</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/notice/list">list</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->



    </el-menu>
  </div>
  
</template>


<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-radio-group{
    position: absolute;
    left: 200px;
  }
  .sidebar-area{
    position: relative;
    left: 0;
    width: 300px;
  }
</style>

<script>
  import bus from '../../utils/bus.js';

  export default {
    props: {
      data: Object,
      lang: String
    },
    data() {
      return {
        isCollapse: false,
      };
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        console.log('vm 111', vm)
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>