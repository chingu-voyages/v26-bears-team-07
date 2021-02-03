<!-- Layout is for any layout components like Header/Nav, Footer, or a container. 
  Similar to layout in Gatsby, present on all pages -->
<script>
  import Header from "../components/Header/Header.svelte";
  import { authStore } from "../stores/auth";
  import FadeDectorator from "./_FadeDecorator.svelte";
</script>

<!-- routify:options preload="proximity" -->
<!-- render header only if logged in -->
{#if $authStore?.secret}
  <Header userID={$authStore.id} />
{/if}
<slot decorator={FadeDectorator} />



