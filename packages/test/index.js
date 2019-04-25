// import test from './src/test';

// // export default Vue => {
// //     Vue.component(test.name, test);
// // };

// test.install = function (Vue) {
// 	Vue.component(test.name, test)
// }

// export default test
// 

// 导入组件，组件必须声明 name
import test from './src/test.vue'

// 为组件提供 install 安装方法，供按需引入
test.install = function (Vue) {
  Vue.component(test.name, test)
}

// 默认导出组件
export default test