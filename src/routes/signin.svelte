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
    margin: 2rem 0 0 auto;
  }
  section {
    width: 100%;
  }
  /* TODO: Mobile dimensions at min-width 601px */
</style>

<main>
  <section>
    <h1>Sign In</h1>
    <input type="text" placeholder="Email or username" />
    <input type="password" placeholder="Enter your password" />
    <button>Sign In</button>
  </section>
</main>
