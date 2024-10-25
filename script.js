document.querySelector("#login-btn").onclick = () => {
  window.location.href = "./signup.html";
};
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const bookList = document.querySelectorAll(".book");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
  if (query === "") {
    searchResults.style.display = "none";
  } else {
    searchResults.style.display = "flex";
  }

  bookList.forEach((book) => {
    const title = book.getAttribute("data-title").toLowerCase();
    if (title.includes(query)) {
      const price = book.getAttribute("data-price");
      const image = book.getAttribute("data-image");
      const author = book.getAttribute("data-author");
      const description = book.getAttribute("data-description");

      // Create a new element for the matching book
      const bookItem = document.createElement("div");
      bookItem.innerHTML = `
        <h3>${book.getAttribute("data-title")}</h3>
        <img src="${image}" alt="${book.getAttribute("data-title")}">
        <div class="price">$${price} <span>$20.99</span></div>
      `;
      bookItem.addEventListener("click", function () {
        document.getElementById("modal-title").innerText =
          book.getAttribute("data-title");
        document.getElementById(
          "modal-author"
        ).innerHTML = `<b>Author:</b> ${author}`;
        document.getElementById("modal-description").innerText =
          description;
        document.getElementById("book-modal").style.display = "block";
      });
      searchResults.appendChild(bookItem);
    }
  });
   // Close modal functionality
   document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("book-modal").style.display = "none";
  });
});
//addtocart
document.addEventListener("DOMContentLoaded", function () {
  // Handle add to cart functionality
  document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", function (e) {
          e.preventDefault();
          const title = this.getAttribute("data-title");
          const price = this.getAttribute("data-price");
          const image = this.getAttribute("data-image");
          const cartItem = { title, price, image };
          const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
          cart.push(cartItem);
          sessionStorage.setItem("cart", JSON.stringify(cart));
          alert(`${title} has been added to your cart!`);
          window.location.href = "./cart.html";
      });
  });
document.querySelectorAll(".book-image").forEach((img) => {
    img.addEventListener("click", function () {
        const title = this.getAttribute("data-title");
        const author = this.getAttribute("data-author");
        const description = this.getAttribute("data-description");

        document.getElementById("modal-title1").innerText = title;
        document.getElementById("modal-author1").innerHTML = `<b>Author:</b> ${author}`;
        document.getElementById("modal-description1").innerText = description;
        document.getElementById("book-modal1").style.display = "block";
    });
});

// Close modal functionality
document.querySelector(".close1").addEventListener("click", function () {
    document.getElementById("book-modal1").style.display = "none";
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
