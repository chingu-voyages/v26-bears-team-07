<!-- TODO: We should decide whether the main page should display information on the app
Sort of like a landing home page. TBD -->
<script>
  // TODO: If you care about dynamic metatags, add them here. Otherwise, delete example later.
  // import { metatags } from '@roxi/routify'
  // metatags.title = 'My Routify app'
  // metatags.description = 'Description coming soon...'
  import { authStore } from "../stores/auth";
  import { classroom_blue } from "../utils/image-constants";

  // onMount(()=> {if($authStore?.secret) location.pathname="/home"})
</script>

<svelte:head>
  <title>Bear Class</title>
</svelte:head>

{#if $authStore?.secret}
  <div style="display:none;">
    {(location.pathname = "/home")}
  </div>
{:else}
  <main class="flex-r">
    <section class="white">
      <div class="white-wrapper flex-c">
        <img src={classroom_blue} alt="classroom" />
      </div>
    </section>
    <section class="blue flex-c">
      <div class="blue-top flex-r">
        <a href="/signin" target="_self" class="link">Sign in</a>
        <a href="/signup" target="_self" class="link">Sign up</a>
      </div>
      <div id="footer">
        <p>
          ©2021 <a href="https://chingu.io" target="_blank">chingu</a>
          <a
            href="https://github.com/chingu-voyages/v26-bears-team-07"
            target="_blank">Bears-Team-07</a
          > Voyage 26
        </p>
      </div>
    </section>
  </main>
{/if}

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

  .blue .link:nth-child(1),
  .blue .link:nth-child(2) {
    border: white solid 1px;
    padding: 20px;
    font-weight: normal;
    transition: font-weight ease-in-out;
  }

  .blue .link:hover {
    font-weight: bolder;
  }

  .blue .link:nth-child(1) {
    background-color: white;
    color: #335cfd;
    margin-right: 5px;
  }

  .blue .link:nth-child(2) {
    color: white;
  }
  .white-wrapper {
    position: relative;
    justify-content: space-between;
    height: 100vh;
    border: unset;
  }

  .white-wrapper img {
    z-index: 3;
    width: 100%;
    flex-shrink: 1;
    opacity: 0.7;
  }

  .blue-top {
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }
  #footer {
    color: white;
    font-size: 12px;
  }

  #footer a {
    text-decoration: underline;
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
