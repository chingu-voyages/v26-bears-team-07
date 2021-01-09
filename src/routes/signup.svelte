<style>
  main {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 48px 40px 36px;
  }
  h1 {
    text-align: center;
  }
  input {
    width: 100%;
  }
  input[type="password"] {
    margin-top: 1rem;
  }
  button {
    display: block;
  }
  section {
    width: 100%;
  }
  .btn-group {
    display: flex;
    flex-flow: row nowrap;
    place-content: space-between;
    place-items: center;
    margin-top: 2rem;
  }
  /* TODO: Mobile dimensions at min-width 601px */
</style>

<main>
  <section>
    <h1>Create your Account</h1>
    <input type="text" placeholder="Email or username" />
    <input type="password" placeholder="Enter your password" />
    <input type="password" placeholder="Confirm your password" />
    <div class="btn-group">
      <a href="/signin">Sign in instead</a>
      <button>Sign Up</button>
    </div>
  </section>
</main>
