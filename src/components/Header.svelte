<script>
  export let className = "My Class";
</script>

<header>
  <div class="left-content">
    <div class="hamburger-button">
      <div />
      <div />
      <div />
    </div>
    <div class="class-name"><span>{className}</span></div>
  </div>
  <div class="center-content">
    <!-- will change depending on user role -->
    <!-- maybe make a separate component for these -->
    <a href="#">Stream</a>
    <a href="#">Classwork</a>
    <a href="#">People</a>
    <a href="#">Grades</a>
  </div>
  <div class="right-content">
    <span>Gear</span>
    <span>Other apps</span>
    <span>My acct</span>
  </div>
</header>

<style>
  header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 4rem;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #aaa;
  }

  .hamburger-button {
    margin-right: 1rem;
  }

  .hamburger-button div {
    width: 17px;
    height: 2px;
    background-color: #777;
    margin: 3px 0;
  }

  .left-content {
    display: flex;
    position: fixed;
    top: 1rem;
    left: 1rem;
  }

  .center-content {
    justify-self: center;
    margin-top: 1rem;
  }

  .right-content {
    display: flex;
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
</style>
