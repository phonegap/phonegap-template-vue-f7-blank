import Vue from 'vue'; // eslint-disable-line no-unused-vars
// Import F7
import Framework7 from 'framework7'; // eslint-disable-line no-unused-vars

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue';

import Home from 'src/components/pages/Home';

// Init F7 Vue Plugin
Vue.use(Framework7Vue);

let vm;

describe('Home.vue', () => {
  beforeEach(() => {
    vm = new Vue({ // eslint-disable-line no-new
      el: document.createElement('div'),
      render: h => h(Home),
      // Init Framework7 by passing parameters here
      // The absolute minimum is an empty routes array
      framework7: {
        routes: [],
      },
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
      expect(vm.$el.querySelector('.content-block-title').textContent)
        .to.equal(Home.data().title);
    });
  });
});
