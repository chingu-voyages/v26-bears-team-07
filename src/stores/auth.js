import { onMount, tick } from "svelte";
import { get, writable } from "svelte/store";
import { goto } from "@sapper/app";

export const authStore = writable();

export function init() {
  /** Initializes secret into store if logged in.
   * - Used in our global `_layout.svelte`
   */
  onMount(() => {
    let authData = JSON.parse(localStorage.getItem("auth"));
    if (authData) {
      authStore.set(authData);
    }
  });
}

export function redirect() {
  /** TODO: Use this later to redirect from pages that require a user to be logged in
   * Currently unused. Doesn't do any checks or conditional logic, but may implement that later.
   */
  onMount(async () => {
    await tick();
    if (!get(authStore)) goto("/login");
  });
}
