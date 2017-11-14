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
    methods: {
      handleBackButton () {
        // NOTE: The back button will behave differently depending on circumstance
        // If the side panel is open, close it
        if (document.querySelector('.panel-left.active')) {
          // This will do nothing when the split-view is open
          return this.$f7.closePanel();
        }
        // Close modals
        // @TODO How to handle modals we shouldn't close like a login-screen?
        if (document.querySelector('.modal-in')) {
          return this.$f7.closeModal();
        }
        // If we have a back button, we want it to go back
        if (this.$f7.mainView.history.length > 1) {
          return this.$f7.mainView.router.back();
        }
        // Default to closing the app
        return window.navigator.app.exitApp();
      }
    },
    computed: {
      isiOS () {
        return window.isiOS;
      }
    },
    created () {
      document.addEventListener('backbutton', this.handleBackButton);
    }
  };
</script>
