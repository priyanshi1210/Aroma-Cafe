// Navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("nav ul");
  const darkBtn = document.querySelector(".dark-toggle");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Dark Mode
  darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
  });
});

// Simple Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}
// Testimonials Auto Slide
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  setInterval(() => {
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
  }, 3000); // change every 3 sec
});
// Testimonials Slider with dots
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showTestimonial(n) {
    testimonials.forEach((t, i) => {
      t.classList.remove("active");
      dots[i].classList.remove("active");
    });
    testimonials[n].classList.add("active");
    dots[n].classList.add("active");
  }

  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 3000);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showTestimonial(i);
    });
  });
});

// Newsletter validation
function newsletterSignup() {
  const email = document.getElementById("newsletterEmail").value.trim();
  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email!");
    return false;
  }
  alert("Thank you for subscribing!");
  return true;
}
// --- Searchable Menu ---
function searchMenu() {
  let input = document.getElementById("menuSearch").value.toLowerCase();
  let items = document.getElementById("menuItems").getElementsByClassName("menu-item");
  for (let i = 0; i < items.length; i++) {
    let name = items[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    items[i].style.display = name.includes(input) ? "" : "none";
  }
}

// --- Cart Simulation ---
let cart = [];
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
  openCart();
}

function updateCart() {
  let cartList = document.getElementById("cartItems");
  let total = 0;
  cartList.innerHTML = "";
  cart.forEach((c, index) => {
    let li = document.createElement("li");
    li.innerHTML = `${c.item} - $${c.price.toFixed(2)} <button onclick="removeFromCart(${index})">❌</button>`;
    cartList.appendChild(li);
    total += c.price;
  });
  document.getElementById("cartTotal").innerText = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById("cartSidebar").style.right = "0";
}

function closeCart() {
  document.getElementById("cartSidebar").style.right = "-300px";
}

// --- Reservation Form ---
function submitReservation() {
  let date = document.getElementById("resDate").value;
  let time = document.getElementById("resTime").value;
  let guests = document.getElementById("resGuests").value;
  alert(`Reservation confirmed!\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
  return false; // prevent real form submit
}
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty! 🛒");
    return;
  }
  let summary = cart.map(c => `${c.item} - $${c.price.toFixed(2)}`).join("\n");
  let total = document.getElementById("cartTotal").innerText;
  alert(`Thank you for your order! 🎉\n\nItems:\n${summary}\n\nTotal: $${total}`);
  cart = [];
  updateCart();
  closeCart();
}
function openCart() {
  document.getElementById("cartSidebar").style.right = "0"; // slide in
}

function closeCart() {
  document.getElementById("cartSidebar").style.right = "-350px"; // slide back
}
