import { onMount, tick } from "svelte";
import { get, writable } from "svelte/store";

function checkPaths(arr) {
  if (!arr.filter((v) => v == location.pathname).length)
    location.pathname = "/signin";
}

export const authStore = writable(
  JSON.parse(localStorage.getItem("auth")) || checkPaths(["/signin", "/signup"])
);

/** Initializes secret into store if logged in.
 * - Used in our global `_layout.svelte`
 */
export function init() {
  onMount(() => {
    let authData = JSON.parse(localStorage.getItem("auth"));
    if (authData) {
      authStore.set(authData);
    }
  });
}

/** TODO: Use this later to redirect from pages that require a user to be logged in
 * Currently unused. Doesn't do any checks or conditional logic, but may implement that later.
 */
export function redirect() {
  onMount(async () => {
    await tick();
    // TODO: Figure out if you can use GOTO from routify instead of native browser redirect API
    if (!get(authStore)) location.pathname = "/signin";
  });
}
