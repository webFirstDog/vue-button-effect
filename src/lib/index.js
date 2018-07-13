
import '../assets/css/vicons-font.css';
import '../assets/css/base.css';
import '../assets/css/buttons.css';

import vueGbutton from './g-button-wave.vue';
import vueGbutton1 from './g-button-ujarak.vue'; 
import vueGbutton2 from './g-button-winona.vue';
import vueGbutton3 from './g-button-wayra.vue';
import vueGbutton4 from './g-button-tamaya.vue';
import vueGbutton5 from './g-button-rayen.vue';
import vueGbutton6 from './g-button-pipaluk.vue';
import vueGbutton7 from './g-button-nuka.vue';
import vueGbutton8 from './g-button-moema.vue';
import vueGbutton9 from './g-button-isi.vue';
import vueGbutton10 from './g-button-aylen.vue';
import vueGbutton11 from './g-button-nina.vue';
import vueGbutton12 from './g-button-nanuk.vue';
import vueGbutton13 from './g-button-sacnite.vue';


const GButton = {
    install(Vue, options) {
        Vue.component(vueGbutton.name, vueGbutton); // vueGbutton.name 组件的name属性
        Vue.component(vueGbutton1.name, vueGbutton1);
		Vue.component(vueGbutton2.name, vueGbutton2);
		Vue.component(vueGbutton3.name, vueGbutton3);
		Vue.component(vueGbutton4.name, vueGbutton4);
		Vue.component(vueGbutton5.name, vueGbutton5);
		Vue.component(vueGbutton6.name, vueGbutton6);
		Vue.component(vueGbutton6.name, vueGbutton6);
		Vue.component(vueGbutton7.name, vueGbutton7);
		Vue.component(vueGbutton8.name, vueGbutton8);
		Vue.component(vueGbutton9.name, vueGbutton9);
		Vue.component(vueGbutton10.name, vueGbutton10);
		Vue.component(vueGbutton11.name, vueGbutton11);
		Vue.component(vueGbutton12.name, vueGbutton12);
		Vue.component(vueGbutton13.name, vueGbutton13);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(GButton);
}
export default GButton
