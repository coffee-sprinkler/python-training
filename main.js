import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="wrapper">
    <form class="python-form">
      <h2>Python Login Form</h2>
      <div class="input-group">
        <input type="email" name="email" id="email">
        <label for="email">
          <span class="material-symbols-outlined md-36">mail</span>
        </label>
      </div>
      <div class="input-group">
        <input type="password" name="password" id="password">
        <label for="password">
          <span class="material-symbols-outlined md-36">key</span>
        </label>
      </div>
      <div class="input-submit">
        <input type="submit" name="submit" id="submit" value="submit">
      </div>
    </form>
  </div>
`;
