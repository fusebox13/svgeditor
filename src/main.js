import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import paper from 'paper'
import VueColorPickerBoard from 'vue-color-picker-board'
import VueUploadMultipleImage from 'vue-upload-multiple-image'
import { Slider } from 'vue-color'


Vue.config.productionTip = false
Vue.use(VueColorPickerBoard)
Vue.component('color-picker', VueColorPickerBoard)
Vue.component('svg-uploader', VueUploadMultipleImage)
Vue.component('slider-picker', Slider)

Vue.component('svg-image', {
  props: ['svg', 'color'],
  mounted() {
    this.addPathListeners();
    this.addGroupListeners();
  },
  updated() {
    this.addPathListeners();
    this.addGroupListeners();
  },
  watch: {
    svg() {
      console.log("Watched")
      this.$forceUpdate()
    }
  },
  methods: {
    addPathListeners() {
      let paths = this.$el.querySelectorAll('path')
      paths.forEach(path => {
        path.removeEventListener("click", this.fill)
        path.addEventListener("click", this.fill)
      })
    },
    addGroupListeners() {
      let groups = this.$el.querySelectorAll('g')
      groups.forEach(group => {
        group.removeEventListener("click", this.fill)
        group.addEventListener("click", this.fill)
      })
    },
    fill(event) {
      console.log("Filling")
      event.target.style.fill = this.color;
    }
  },
  render: function(createElement) {
    var self = this
    return createElement(
      'div', {
        domProps: {
          innerHTML: self.svg        }
      })
  },
})

new Vue({
  router,
  store,
  provide: { paper },
  render: h => h(App)
}).$mount('#app')
