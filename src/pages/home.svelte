<script>
  import { url } from "@roxi/routify";
  import { classesByUserID } from "../stores/query";
  import { authStore } from "../stores/auth";
  import { fade } from "svelte/transition";
  import { clickOutside } from "../utils/utils";

  const classes = classesByUserID({ id: $authStore.id });
  $: allClasses = $classes.data
    ? (({ teaches, attends }) => [...teaches.data, ...attends.data])(
        $classes.data.result
      )
    : [];
</script>

{#if $classes.data}
  <ol>
    {#if allClasses.length}
      {#each allClasses as { name, _id, invite, isOpen, transitioning }}
        <li in:fade={{ duration: 200 }}>
          <a class="top-box" href={$url("./stream/:classID", { classID: _id })}>
            <div class="top">
              <a href={$url("./stream/:classID", { classID: _id })}>
                {name}
              </a>
              <button
                class="btn-opts"
                on:click|preventDefault={() =>
                  !transitioning && (isOpen = !isOpen)}>
                <!-- prettier-ignore -->
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                {#if isOpen}
                  <div
                    use:clickOutside
                    on:click_outside={() => (isOpen = false)}
                    on:outrostart={() => (transitioning = true)}
                    on:outroend={() => (transitioning = false)}
                    transition:fade={{ duration: 150 }}
                    class="btn-opts-menu"
                  >
                    <div>
                      <button>Move</button>
                      <button
                        on:click={() => {
                          navigator.clipboard.writeText(
                            `${location.origin}/invite/${_id}?cjc=${invite}`
                          );
                          alert("Link copied!");
                        }}>Copy invite link</button
                      >
                      <button>Edit</button>
                      <button>Copy</button>
                      <button>Archive</button>
                    </div>
                  </div>
                {/if}
              </button>
            </div>
          </a>
        </li>
      {/each}
    {:else}
      <h2>No classes yet!</h2>
    {/if}
  </ol>
{/if}

<style>
  ol {
    padding-top: 2rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li {
    border: 0.0625rem solid #dadce0;
    overflow: hidden;
    border-radius: 0.5rem;
    min-width: 18rem;
    width: 100%;
    max-width: 21rem;
    height: 18.375rem;
    margin-bottom: 1.5rem;
    margin-right: 1.5rem;
  }
  li:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 2px 6px 2px rgba(60, 64, 67, 0.149);
  }
  .top-box {
    cursor: pointer;
    padding: 1rem 1rem 0.75rem;
    width: 100%;
    height: 6rem;
    background: linear-gradient(90deg, #004da5 0%, #3e99ef 100%);
    display: block;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  a {
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
  .btn-opts {
    padding: 0;
    border: none;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    display: grid;
    place-items: center;
  }
  .btn-opts:hover {
    background-color: rgba(232, 234, 237, 0.039);
  }
  .btn-opts:focus {
    outline: none;
  }
  .btn-opts-menu {
    position: absolute;
  }
  .btn-opts-menu div {
    position: absolute;
    border-radius: 0.3rem;
    top: 2.2rem;
    right: -1.5rem;
    height: fit-content;
    width: fit-content;
    background-color: white;
    padding: 0.5rem 0;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.141), 0 1px 3px 0 rgba(0, 0, 0, 0.122);
  }
  .btn-opts-menu button {
    font-size: 0.9rem;
    border: none;
    white-space: nowrap;
    text-align: left;
    width: 100%;
    padding: 0.3rem 1rem;
  }
  .btn-opts-menu button:focus {
    outline: none;
  }
  .btn-opts-menu button:hover {
    background-color: #eee;
  }

  svg,
  path {
    color: white;
    fill: white;
  }
</style>
