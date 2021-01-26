<script>
  import { params, url } from "@roxi/routify";
  import { blur } from "svelte/transition";
  import { findClass } from "../../stores/query";

  const classStore = findClass({ classID: $params.classID });
</script>

<!--@component
Class logo turned into a component because fetching store could potentially cause memory leaks.
Though, performance shouldn't really matter in this case.
-->

{#if $classStore.data}
  <a
    class="logo"
    href={$url(`/stream/${$params.classID}`)}
    in:blur={{ amount: 20 }}>{$classStore?.data?.result?.name}</a
  >
{/if}

<style>
  .logo:hover {
    text-decoration: underline;
  }
</style>
