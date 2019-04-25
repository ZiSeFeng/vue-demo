<template>
	<div>
		<Header :topNav="topNav"></Header>
		<keep-alive>
			<SideBar :data="navsData[lang]" :lang="lang"></SideBar>
		</keep-alive>
		<div class="content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
    import bus from '../utils/bus.js'
	import Header from '../components/common/header.vue'
	import SideBar from '../components/common/sidebar.vue'

	import navsData from '../routes/nav.config.json'

	export default{
		data(){
			return {
				lang: this.$route.meta.lang === 'index' ? 'manage' : this.$route.meta.lang,
                navsData,
                topNav: []
			}
		},
		created(){
			const self = this;
			this.$router.options.routes.forEach(item => {
				if (item.path != '/') {
					this.topNav.push(item)
				}
			})
		    bus.$on('handleNav', (lang) => {
		         self.lang = lang;
		    })
		},
		beforeRouteUpdate (to, from, next) {
		  // just use `this`
		  console.log(to, from, next, '33333')
		  this.name = to.params.name
		  next()
		},
		components: {
			Header,
			SideBar
		}
	}
</script>