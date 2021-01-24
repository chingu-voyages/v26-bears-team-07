<script>
  import { url } from "@roxi/routify";
  import { classesByUserID } from "../stores/query";
  import { authStore } from "../stores/auth";
  import { fade } from "svelte/transition";

  const classes = classesByUserID({ id: $authStore.id });
</script>

<h1>Classroom</h1>

{#if $classes.data}
  {#each (({ teaches, attends }) => [...teaches.data, ...attends.data])($classes.data.result) as { name, _id, invite }}
    <a href={$url("./stream/:classID", { classID: _id })}>
      <h2 in:fade={{ duration: 200 }}>{name}</h2>
    </a>
  {/each}
{/if}
