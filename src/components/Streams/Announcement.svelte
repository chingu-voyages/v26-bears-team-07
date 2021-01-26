<script>
  import { teacher, chevron } from "../../utils/image-constants";

  export let username;
  export let dateCreated;  // date is in format Jan 15
</script>

<main class="flex-c">
  <section class="flex-c">
    <div class="top flex-r">
      <img src={teacher} alt="user" id="user" />
      <div class="flex-c date-tag">
        <span class="open-sans">{username || "Testuser"}</span>
        <span class="roboto">{dateCreated ||  "Jan 25"}</span>
      </div>
    </div>
    <slot name="classwork" />
  </section>
  <form class="bottom flex-r" action="/stream" method="POST">
    <div>
      <img src={teacher} alt="user-comment" id="user-comment" />
    </div>
    <div class="input-wrapper">
      <button class="flex-c" type="submit">
        <img src={chevron} alt="enter-comment" id="chevron" />
      </button>
      <input id="comment-box" name="comment" type="text" placeholder="Add class comment" />
    </div>
  </form>
  <slot name="comments" />
</main>

<style>
  main {
    margin-top: 20px;
    border: solid 1px rgba(0, 0, 0, 0.089);
    border-radius: 5px;
  }

  .top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.089);
    padding: 10px;
  }

  #user {
    width: 45px;
    margin-right: 10px;
  }

  .date-tag {
    justify-content: flex-start;
    margin-top: 5px;
  }

  .date-tag span:nth-child(1) {
    font-weight: 500;
    margin-bottom: 7px;
    font-size: 15px;
  }

  .date-tag span:nth-child(2) {
    font-size: 10px;
    filter: opacity(70%);
  }

  ::slotted {
    text-align: left;
    padding: 10px;
    font-size: 13px;
  }

  .bottom {
    padding: 15px 25px 15px 10px;
  }

  .bottom div:nth-child(1) {
    margin-right: 10px;
  }

  #user-comment {
    width: 40px;
  }

  .input-wrapper {
    position: relative;
    flex-grow: 1;
  }

  .input-wrapper button{
    right: 4px;
    top: 1px;
    position: absolute;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: unset;
  }

  #chevron {
    color: rgba(128, 128, 128, 0.39);
    margin: 2px;
    width: 30px;
    filter: opacity(50%);
  }

  .input-wrapper input {
    width: 100%;
    padding-right: 35px;
    z-index: 5;
  }

  .input-wrapper input:focus {
    outline: none;
  }
</style>
