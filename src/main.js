import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import paper from 'paper'
import VueColorPickerBoard from 'vue-color-picker-board'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import SvgImage from '@/components/SvgImage'
import { Slider } from 'vue-color'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash)


Vue.config.productionTip = false
Vue.use(VueColorPickerBoard)
Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('color-picker', VueColorPickerBoard)
Vue.component('svg-uploader', VueUploadMultipleImage)
Vue.component('slider-picker', Slider)
Vue.component('svg-image', SvgImage)

new Vue({
  router,
  store,
  provide: { paper },
  render: h => h(App)
}).$mount('#app')
