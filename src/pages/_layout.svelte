<!-- Layout is for any layout components like Header/Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import Header from "../components/Header/Header.svelte";
</script>

<!-- routify:options preload="proximity" -->
<Header />
<slot />

<style>
</style>
