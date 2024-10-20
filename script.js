document.querySelector("#login-btn").onclick = () => {
  window.location.href = "./signup.html";
};
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const bookList = document.querySelectorAll(".book");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = ""; 
  if(query===""){
    searchResults.style.display="none";
  }else{
    searchResults.style.display="flex";
  }

  bookList.forEach((book) => {
    const title = book.getAttribute("data-title").toLowerCase();
    if (title.includes(query)) {
      const price = book.getAttribute("data-price");
      const image = book.getAttribute("data-image");

      // Create a new element for the matching book
      const bookItem = document.createElement("div");
      bookItem.innerHTML = `
        <h3>${book.getAttribute("data-title")}</h3>
        <img src="${image}" alt="${book.getAttribute("data-title")}">
        <div class="price">$${price} <span>$20.99</span></div>
      `;
      searchResults.appendChild(bookItem);
    }
  });
});
//addtocart
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const title = this.getAttribute("data-title");
      const price = this.getAttribute("data-price");
      const image = this.getAttribute("data-image");

      // Create a cart item object
      const cartItem = { title, price, image };
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      cart.push(cartItem);
      sessionStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "./cart.html";
    });
  });
});

var swiper = new Swiper(".books-slider", {
  loop: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
