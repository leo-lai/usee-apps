// import FastClick from 'fastclick'
import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

import { storage, utils } from 'assets/js/utils'

import Routes from './routes'
import App from './app'

// 解决移动端点击延迟
// FastClick.attach(document.body)

Vue.use(Framework7Vue)


new Vue({
	el: '#app',
	template: '<app/>',
	framework7: {
		pushState: true,
		routes: Routes,
    root: '#app'
  },
  components: {
  	app: App
  }
})
