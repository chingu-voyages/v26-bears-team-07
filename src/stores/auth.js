import { onMount } from "svelte";
import { writable } from "svelte/store";

export const authStore = writable();

export function init() {
  onMount(() => {
    authStore.set(localStorage.getItem("key")); // TODO: load tokens via localStorage
  });
}
