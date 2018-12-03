/* eslint-disable no-unused-vars */

import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/css/framework7.css';

import Home from '@/pages/home';

// Init F7 Vue Plugin
Framework7.use(Framework7Vue);

let vm;

describe('Home.vue', () => {
  beforeEach(() => {
    vm = new Vue({
      // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(Home)
    });
  });

  describe('Data', () => {
    it('should have a name of "Home"', () => {
      expect(Home.name).to.equal('Home');
    });
    it('should have a data method', () => {
      expect(Home.data).to.be.a('function');
    });
    it('should have a data method that returns a title of "Hello World"', () => {
      expect(Home.data().title).to.equal('Hello World');
    });
    it('should have a content-block-title that displays `data().title`', () => {
      expect(vm.$el.querySelector('.block-title').textContent).to.equal(
        Home.data().title
      );
    });
  });
});
