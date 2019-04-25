<template>
	<div class="header">
		<div class="top">
			<el-row :gutter="10">
			    <el-col :xs="4" :sm="6" :md="6" :lg="4" :xl="2">
			    	<div class="grid-content bg-purple"></div>
			    </el-col>
			    <el-col :xs="20" :sm="18" :md="18" :lg="20" :xl="22">
            <div class="header-nav">
              <a v-for="item in topNav" :to="item.children[0].path" @click="changeNav(item.meta.lang)">{{item.meta.title}}</a>
            </div>
			    </el-col>
			</el-row>
		</div>
	</div>
</template>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .header-nav{
    width: 100%;
    height: 70px; 
    line-height: 70px;
  }
  .header-nav a{
    width: 70px;
    display: inline-block;
    background-color: #f1f1f1;
    text-align: center;
  }
</style>

<script>
  import bus from '../../utils/bus.js';

  export default {
    props: {
      topNav: Array
    },
    data() {
      return {
        activeIndex: '1'
      };
    },
    created(){
      console.log(this, '444444')
    },
    methods:{
      changeNav(lang, index){
        bus.$emit('handleNav', lang)
      }
    }
  }
</script>