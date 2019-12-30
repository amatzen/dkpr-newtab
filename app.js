import Vue from 'vue'
import App from './v/Index.vue'

new Vue({
    render: createElement => createElement(App)
}).$mount('#app')