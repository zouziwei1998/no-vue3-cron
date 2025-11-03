import cronCompatible from './index.vue';

const components = [cronCompatible];

const install = function(Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* Support use as a script tag */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export const CronCompatible = cronCompatible;

export default {
  install,
};