<script>
  let hamburgers = "images/align-justify.svg",
    plus = "images/plus.svg";
  export let className = "AppName";
  export let role = "teacher";
</script>

<nav class="global-nav flex-r">
  <div class="left-content">
    <div class="class-burger" tabindex="0">
      <img alt="class-menu" src={hamburgers} />
    </div>
    <div class="nav-title">
      <span>{className}</span>
    </div>
  </div>
  <div class="center-content">
    <ul class="nav-tabs">
      <li class="tab-item">
        <a href="#">Stream</a>
      </li>
      <li class="tab-item">
        <a href="#">Classwork</a>
      </li>
      <li class="tab-item">
        <a href="#">People</a>
      </li>
      {#if role === "teacher"}
        <li class="tab-item">
          <a href="#">Grades</a>
        </li>
      {/if}
    </ul>
  </div>
  <ul class="flex-r">
    <li class="plus"><img alt="add-class" src={plus} /></li>
    <li class="user"><span class="avatar" /></li>
  </ul>
</nav>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  .global-nav {
    justify-content: space-between;
    align-items: center;
    border-bottom: rgba(128, 128, 128, 0.432) 1px solid;
    padding: unset;
    flex-wrap: wrap;
  }

  .global-nav ul {
    align-items: center;
    margin-right: 4px;
    margin: unset;
  }

  .global-nav li {
    list-style: none;
    margin-left: 15px;
  }

  .left-content {
    display: flex;
    align-items: center;
  }

  .class-burger {
    /* width: 100%; */
    height: 100%;
    padding: 0;
    text-decoration: none;
    margin: unset;
  }

  .class-burger img {
    margin: 0 10px;
    /* width: 2vw; */
  }

  .nav-tabs {
    display: flex;
    padding: none;
  }

  .tab-item {
    padding: none;
  }

  .plus img {
    margin-right: 30px;
  }

  .avatar {
    background-color: silver;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    display: inline-block;
    margin: 10px 15px;
  }

  @media (max-width: 800px) {
    .center-content {
      display: flex;
      order: 3;
      width: 100%;
      text-align: center;
      padding-bottom: 20px;
      justify-content: center;
    }
  }
</style>
