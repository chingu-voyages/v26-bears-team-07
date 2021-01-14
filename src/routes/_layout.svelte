<!-- Layout is for any layout components like Header/Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import { init } from "../stores/auth";

  // Initialize auth store for the app
  init();
</script>

<slot />

<style>
</style>
