<script>
  import { authStore } from "../stores/auth";
  import { bear } from "../utils/image-constants";

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
    <section class="white flex-c">
      <div class="white-wrapper flex-c">
        <img src={bear} alt="home-bear" />
      </div>
    </section>
    <section class="blue flex-c">
      <!-- <div class="blue-top flex-c"> -->
      <!-- <div class="bg-bear"><img src={bear} alt="home-bear" /></div> -->
      <div class="blue-top flex-r">
        <a href="/signin" target="_self" class="link">Sign in</a>
        <a href="/signup" target="_self" class="link">Sign up</a>
      </div>
      <!-- </div> -->

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
  /* 
  .blue-top{
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  } */
  /* .bg-bear {
    margin-bottom: 40px;
  }


  .bg-bear img {
    width: 100%;
  } */

  .blue .link:nth-child(1),
  .blue .link:nth-child(2) {
    border: white solid 1px;
    padding: 20px;
    font-weight: normal;
    transition: font-weight ease-in-out;
    z-index: 3;
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
    justify-content: center;
    align-items: center;
  }

  .white-wrapper img {
    z-index: 3;
    width: 50%;
    flex-shrink: 1;
    top: -15px;
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

  @media (max-width: 425px) {
    main {
      position: relative;
    }

    .white {
      position: absolute;
    }

    .white-wrapper img {
      position: relative;
      top: -107px;
      z-index: 4;
      left: 105px;
      margin-bottom: 40px;
    }

    .blue {
      z-index: 3;
      /* background-color: #335bfdab; */
    }

    .blue .link:nth-child(1),
    .blue .link:nth-child(2) {
      padding: 14px;
    }
  }

  @media (max-width: 375px) {
    .white-wrapper img {
      left: 80px;
    }
  }

  @media (max-width: 325px) {
    .white-wrapper img {
      left: 60px;
    }
  }
</style>
