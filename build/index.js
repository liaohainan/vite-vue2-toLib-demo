import Vue from 'vue';

import Index from '../src/Index.vue';

const component = {
    install:function(Vue){
        Vue.component('Index',Index)
    }
    
}
export default component