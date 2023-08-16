window.addEventListener("load", () => {
  let currentPage = window.location.pathname;
  console.log(currentPage);
  if (currentPage == "/src/views/sing-In.html") {
    const form = document.querySelector(".sing-in");
    const usernameI = document.querySelector(".username-input");

    const passwordI = document.querySelector(".password-input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!!usernameI.value && !!passwordI.value) {
        window.location.href = "/src/views/index.html";
      } else {
        alert("plz enter your information");
      }
      console.log(!!usernameI.value && !!passwordI.value);
    });
  } else if (currentPage == "/src/views/shop.html") {
    const categoryOptions = document.querySelector(".category-options");
    categoryOptions.addEventListener("click", (e) => {
      document.querySelector('button.active').classList.remove('active');
      console.log(e.target);
      e.target.classList.add('active')
    });
    
  }
});
