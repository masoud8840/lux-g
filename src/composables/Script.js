const navbarBtn = document.querySelector(".navbar-menu-toggler");
const navbarMenu = document.querySelector(".navbar-menu");
const header = document.querySelector("header");
let isNavbarOpen = false;
navbarBtn.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  if (isNavbarOpen) {
    navbarMenu.classList.remove("block");
    isNavbarOpen = false;
  } else {
    navbarMenu.classList.add("block");
    isNavbarOpen = true;
  }
}

function toggleNavbarOnResize() {
  // Make navbar visible on resize if it is on closed state
  if (window.innerWidth > 640) {
    isNavbarOpen = true;
    toggleNavbar();
  }
}
toggleNavbarOnResize();

function fadeInNavbar() {
  if (window.scrollY < 50) {
    header.classList.remove("fade-in");
  } else {
    header.classList.add("fade-in");
  }
}

window.addEventListener("resize", toggleNavbarOnResize);
window.addEventListener("scroll", fadeInNavbar);

// Shop.html
const actualProducts = [
  {
    id: 1,
    title: "Assasin Creed",
    genre: "Action",
    offPrice: 28,
    newPrice: 18,
  },
  {
    id: 2,
    title: "Assasin Creed",
    genre: "Action",
    offPrice: 28,
    newPrice: 18,
  },
  {
    id: 3,
    title: "Assasin Creed",
    genre: "Action",
    offPrice: 28,
    newPrice: 18,
  },
  {
    id: 4,
    title: "Assasin Creed",
    genre: "Action",
    offPrice: 28,
    newPrice: 18,
  },
  {
    id: 5,
    title: "Assasin Creed",
    genre: "Action",
    offPrice: 28,
    newPrice: 18,
  },
];

let products = [];

const productsList = document.querySelector(".products-list");

function renderProducts() {
  // Empty productlist
  productsList.innerHTML = "";

  products.map((prod) => {
    const productItem = document.createElement("article");
    productItem.classList.add("product-item", "group");
    // productItem.href = `/src/views/product.html?id=${prod.id}`;

    productItem.innerHTML = `
  <img class="product-item-img"
              src="/public/images/Products/Product02.jpg"
              alt="product-img"
            />
            <div class="product-item-description">
              <div>
                <span class="product-item-genre">${prod.genre}</span>
                <a href="/src/views/product.html?id=${prod.id}" class="product-item-title">${prod.title}</a>
              </div>
              <button class="product-item-buy">
                <i class="fas fa-sharp fa-light fa-bag-shopping"></i>
              </button>
            </div>
            <div class="product-item-price">
              <span class="off-price">$${prod.offPrice}</span>
              <span class="new-price">$${prod.newPrice}</span>
            </div>
            `;
    productsList.append(productItem);

    const button = productItem.querySelector(".product-item-buy");
    button.addEventListener("click", () => {
      addToCart(prod.id);
    });
  });
}

let currentPage = 1;
function renderPagination() {
  const paginationContainer = document.querySelector(".pagination-pages");
  let numbersOfProductsInAPage = 4;
  products = actualProducts.slice(
    currentPage * numbersOfProductsInAPage - numbersOfProductsInAPage,
    currentPage * numbersOfProductsInAPage
  );
  let productsLength = actualProducts.length;
  let numberOfPages = Math.ceil(productsLength / numbersOfProductsInAPage);

  // empty current pagination
  paginationContainer.innerHTML = "";

  for (let page = 1; page <= numberOfPages; page++) {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = page;
    a.className = "page-item";

    if (page === currentPage) {
      a.classList.add("active");
    }

    a.addEventListener("click", setCurrentPage);

    paginationContainer.append(a);
  }

  renderProducts();
}

function setCurrentPage(e) {
  e.preventDefault();
  currentPage = +e.target.textContent;
  renderPagination();
  window.location = "#focus-here";
}

const cart = [];
function addToCart(id) {
  const cartQtyLabel = document.querySelector(".cart-items");
  const product = products.find((prod) => prod.id === id);
  cart.push(product);
  cartQtyLabel.classList.remove("invisible");
  cartQtyLabel.textContent = cart.length;
}

function changePage(plusOrMinus) {
  const totalPages = document.querySelectorAll(".pagination-pages a").length;
  if (plusOrMinus === "+" && !(currentPage === totalPages)) {
    currentPage++;
  }
  if (plusOrMinus === "-" && !(currentPage === 1)) {
    currentPage--;
  }
  renderPagination();
  window.location = "#focus-here";
}
