import { onMount, tick } from "svelte";
import { get, writable } from "svelte/store";
import { goto } from "@sapper/app";

export const authStore = writable();

export function init() {
  // Initializes secret into store if logged in.
  // Used in app's layout
  onMount(() => {
    let secret = localStorage.getItem("secret");
    if (secret) {
      authStore.set(secret);
    }
  });
}

export function redirect() {
  // TODO: Use this later to redirect from pages that require a user to be logged in
  onMount(async () => {
    await tick();
    if (!get(authStore)) goto("/login");
  });
}
