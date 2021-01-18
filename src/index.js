import PopBottom from './packages/pop-bottom';

const components = {
  boiPopBottom: PopBottom
};

const install = function(Vue, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  })
};

export default install;