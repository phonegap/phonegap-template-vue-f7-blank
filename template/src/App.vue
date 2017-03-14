<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar />

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" url="/" :init="true" :dynamic-navbar="true" navbar-through main>
        <!-- Navbar -->
        <f7-navbar v-if="isiOS" title="Home"></f7-navbar>
        <!-- Pages -->
        <f7-pages />
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      isiOS () {
        return window.isiOS;
      }
    }
  };
</script>
