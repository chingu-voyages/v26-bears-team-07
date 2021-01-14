<!-- Layout is for any layout components like Header/Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import { init } from "../stores/auth";
  import Nav from "../components/Nav.svelte"

  // Initialize auth store for the app
  init();
</script>


<Nav />
<slot />

<style>
</style>
