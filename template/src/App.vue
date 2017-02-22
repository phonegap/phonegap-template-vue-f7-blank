<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar />

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Navbar -->
        <f7-navbar v-if="isiOS" title="Home"></f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <!-- pages from the routes will go here...replacing `home-page` -->
          <home-page />
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
  import Home from './components/pages/Home';

  export default {
    name: 'App',
    components: {
      'home-page': Home,
    },
    computed: {
      isiOS() {
        return window.isiOS;
      },
    },
  };
</script>
