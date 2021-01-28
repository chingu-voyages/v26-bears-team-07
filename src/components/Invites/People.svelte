<script>
  import { createEventDispatcher } from "svelte";
  import fadeScale from "../../utils/fadeScale";
  export let inviteMode;
  export let inviteLink = undefined;

  let dispatch = createEventDispatcher();
  let message = `Teachers you add can do everything you can, except delete the class.`;

  $: header = inviteMode + "s";
</script>

<form transition:fadeScale>
  <section class="top">
    <h2>Invite {header}</h2>
    {#if inviteMode === "Student"}
      <h3>Invite Link</h3>
      <p>{inviteLink || "...xYYhuiPOOOOllll"}</p>
      <hr />
    {/if}
    <input class="open-sans" placeholder="Type a name or email" />
    <hr />
  </section>
  <section class="body" />
  <section class="bottom">
    {#if inviteMode === "Teacher"}
      <span id="message" class="roboto">{message}</span>
    {/if}
    <div class="flex-r">
      <button type="reset" on:click={() => dispatch("closeModal")}
        >Cancel</button
      >
      <button disabled type="submit"> Invite</button>
    </div>
  </section>
</form>

<style>
  form {
    background-color: white;
    margin: 6rem auto;
    width: 30%;
    min-width: 400px;
    border-radius: 7px;
    padding: 15px;
  }

  h2 {
    font-size: 14px;
    font-weight: 600;
  }

  h3 {
    margin-top: 16px;
    font-size: 10px;
    font-weight: 600;
  }

  p {
    margin-top: unset;
    font-size: 12px;
    filter: opacity(50%);
  }

  input {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 24px;
    padding: unset;
    border: unset;
    margin-top: 20px;
  }

  input:focus {
    outline: none;
  }

  hr {
    filter: opacity(50%);
  }

  .body {
    height: 250px;
  }

  .bottom {
    border-top: 1px solid rgba(0, 0, 0, 0.233);
    padding-top: 10px;
  }

  .bottom div {
    justify-content: flex-end;
    margin: 15px 0;
  }

  button {
    border: unset;
    padding: 10px;
  }

  .bottom button:nth-child(1) {
    margin-right: 4px;
  }

  .bottom button:nth-child(1):hover {
    background-color: rgba(169, 169, 169, 0.164);
  }

  #message {
    font-size: 13px;
    filter: opacity(50%);
  }
</style>
