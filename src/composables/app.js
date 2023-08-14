
//search box
const searchInput = document.querySelector('.searchtext');
const trendingDOM = document.querySelector('.Trending');


let productsData = [];
const filters = {
    searchItems : "",
};


document.addEventListener("DOMContentLoaded", () => {

    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        productsData = res.data;
        renderProducts(res.data, filters);
      })
      .catch((err) => console.log(err));
  
  
  });

  function renderProducts(products, _filters) {
    const filteredProducts = products.filter((p) => {
      return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
      
    });
    trendingDOM.innerHTML = "";
}

  //render to DOM
  filteredProducts.forEach(item => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("trending-cards");
    productDiv.innerHTML =`
    <div class="w-[20rem] h-80 bg-gray-100 grid justify-center">
          <img class="rounded-2xl w-[20rem] h-56" src="${item.imageUrl}" alt="">
          <div class="flex justify-between items-center p-4">
            <div class="m-4 ">
              <p class="text-gray-500">${item.title}</p>
              <p class="text-black font-bold text-lg">Assasin Creed</p>
            </div>
            <button><a href="/src/views/product.html" class="w-10 h-10 bg-secondary hover:bg-primary cursor-pointer rounded-full flex justify-center items-center text-white">
              <i class="fa fa-shopping-bag"></i>
            </a></button>
          </div>
        

        </div>
    `;
    trendingDOM.appendChild(productDiv);
    
  });

searchInput.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    filters.searchItems = e.target.value;
    renderProducts(productsData,filters);
  });