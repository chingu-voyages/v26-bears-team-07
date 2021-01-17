<!-- Layout is for any layout components like Header/Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import { init } from "../stores/auth";
  import Header from "../components/Header/Header.svelte";

  // Initialize auth store for the app
  init();
</script>

<Header  />
<slot />

<style>
</style>
