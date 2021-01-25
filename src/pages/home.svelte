<script>
  import { goto, url } from "@roxi/routify";
  import { classesByUserID } from "../stores/query";
  import { authStore } from "../stores/auth";
  import { fade } from "svelte/transition";

  const classes = classesByUserID({ id: $authStore.id });
</script>

{#if $classes.data}
  <ol>
    {#each (({ teaches, attends }) => [...teaches.data, ...attends.data])($classes.data.result) as { name, _id, invite }}
      <li in:fade={{ duration: 200 }}>
        <div
          class="top"
          on:click|self={() => $goto("./stream/:classID", { classID: _id })}
        >
          <a href={$url("./stream/:classID", { classID: _id })}>
            {name}
          </a>
        </div>
      </li>
    {/each}
  </ol>
{/if}

<style>
  ol {
    padding-top: 2rem;
    width: 21rem;
    list-style: none;
  }
  li {
    border: 0.0625rem solid #dadce0;
    overflow: hidden;
    border-radius: 0.5rem;
    width: 100%;
    height: 18.375rem;
  }
  li:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 2px 6px 2px rgba(60, 64, 67, 0.149);
  }
  .top {
    cursor: pointer;
    padding: 1rem 1rem 0.75rem;
    width: 100%;
    height: 6rem;
    background: linear-gradient(90deg, #004da5 0%, #3e99ef 100%);
  }
  a {
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
