<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
  import FooterGuide from "./components/footer/Footerguide";
  export default {
    components: {
      FooterGuide
    }

  }
</script>

<style lang="stylus">

</style>
