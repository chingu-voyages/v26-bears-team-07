<script>
  import Icon from "../Icon.svelte";
  import UserNameTag from "../UserNameTag.svelte";
  import { review } from "../../utils/image-constants";

  export let toClose;
  export let userClasses = [];
  let deadLink = "https/dead";
  let innerTabOptions = [{ icon: review, name: "To review", link: deadLink }];

  $: innerMenuOption = innerTabOptions.concat(
    userClasses !== [] ? userClasses : []
  );
  $: classSize = innerMenuOption.length - 1;
</script>

{#each innerMenuOption as { icon, name, link }, i}
  <div
    class={i === classSize
      ? "menu-container link1 flex-r"
      : "menu-container flex-r"}
  >
    <div class="side-menu">
      <a href={link} on:click={toClose} class="flex-r">
        {#if i !== 0}
          <UserNameTag className={name} />
        {:else}
          <Icon name={icon} />
        {/if}
        <span class="open-sans side-menu-icon">
          {name}
        </span>
      </a>
    </div>
  </div>
{/each}

<style>
  .link1 {
    border-bottom: #e0e0e0 1px solid;
  }

  .menu-container {
    padding-right: 10px;
  }
  .side-menu a {
    padding: 10px 10px 10px 5px;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    transition: 0.3s;
    align-items: center;
    height: 50px;
  }

  .side-menu {
    width: 100%;
    padding: 5px;
  }
  .side-menu-icon {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #3c4043;
    white-space: nowrap;
  }

  .side-menu:hover {
    background-color: #eeeeee81;
    border-top-right-radius: 50% 150px;
    border-bottom-right-radius: 50% 150px;
  }
</style>
