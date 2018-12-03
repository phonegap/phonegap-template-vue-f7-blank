/* eslint-disable no-unused-vars */

import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

import App from '@/app';

let vm;

// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

describe('App.vue', () => {
  beforeEach(() => {
    vm = new Vue({
      // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(App)
    });
  });

  describe('Computed', () => {
    it('should return a computed property for the global `isiOS`', () => {
      expect(App.isiOS).to.equal(window.isiOS);
    });
  });
});
