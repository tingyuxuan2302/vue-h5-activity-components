import PopBottom from './packages/pop-bottom';
import Button from './packages/button';

const components = {
  lButton: Button,
  boiPopBottom: PopBottom
};

const install = function(Vue, options = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  })
};

export default install;