<!-- TODO: We should decide whether the main page should display information on the app
Sort of like a landing home page. TBD -->
<script>
  // TODO: If you care about dynamic metatags, add them here. Otherwise, delete example later.
  // import { metatags } from '@roxi/routify'
  // metatags.title = 'My Routify app'
  // metatags.description = 'Description coming soon...'
  import { authStore } from "../stores/auth";
  import { classroom } from "../utils/image-constants";
</script>

<svelte:head>
  <title>Bear Class</title>
</svelte:head>

<main class="flex-r">
  <section class="white">
    <div class="white-wrapper flex-c">
      <img src={classroom} alt="classroom" />
    </div>
  </section>
  <section class="blue flex-c">
    <div>
      <a href="/signin" target="_self">Sign in</a>
      <a href="/signup" target="_self">Sign up</a>
    </div>
  </section>

  {#if $authStore?.secret}
    <hr />
    <h2>Gated content</h2>
    <a href="/home">Home</a>
  {/if}
</main>

<style>
  main {
    width: 100%;
    height: 100vh;
  }

  .white {
    flex-basis: 50%;
    flex-shrink: 1;
  }
  .blue {
    background-color: #335cfd;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .blue a {
    border: white solid 1px;
    padding: 20px;
    font-weight: normal;
    transition: font-weight ease-in-out;
  }

  .blue a:hover {
    font-weight: bolder;
  }

  .blue a:nth-child(1) {
    background-color: white;
    color: #335cfd;
  }

  .blue a:nth-child(2) {
    color: white;
  }
  .white-wrapper {
    position: relative;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border: unset;
  }

  .white-wrapper img {
    z-index: 3;
    width: 100%;
    flex-shrink: 1;
    opacity: 0.7;
  }

  @media (max-width: 320px) {
    main {
      position: relative;
    }

    .white {
      position: absolute;
    }

    .blue {
      z-index: 3;
      background-color: #335bfdab;
    }
  }
</style>
