<script>
  import { invite } from "../../utils/image-constants";
  import { fade } from "svelte/transition";

  export let inviteCode = "";
  export let className = "";
</script>

<div class="box flex-c">
  {#if inviteCode}
    <h1 in:fade class="open-sans">{className}</h1>
    <div in:fade class="flex-r row-2">
      <span class="roboto">Class Code</span>
      <span class="roboto">{inviteCode}</span>
      <img src={invite} alt="invite" />
    </div>
  {/if}
</div>

<style>
  .box {
    color: white;
    flex-basis: 100%;
    height: 150px;
    border: unset;
    border-radius: 7px;
    padding: 1em;
    margin: 0 0 1em 0;
    background: #396afc;
    background: -webkit-linear-gradient(to right, #2948ff, #396afc);
    background: linear-gradient(to right, #2948ff, #396afc);
    margin-bottom: 2rem;
  }

  h1 {
    font-weight: bold;
  }
  .row-2 {
    align-items: center;
  }
  .row-2 span:first-child {
    font-size: 15px;
    font-weight: 600;
    margin: 7px;
  }
  .row-2 span:nth-child(2) {
    font-size: 10px;
    margin-right: 5px;
  }

  img {
    margin-bottom: 2px;
  }
</style>
