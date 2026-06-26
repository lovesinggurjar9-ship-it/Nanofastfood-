/* ==========================================
   NENO FAST FOOD
   SCRIPT.JS - PART 1
========================================== */

"use strict";

/* ==========================================
   GLOBAL VARIABLES
========================================== */

let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const summaryItems = document.getElementById("summaryItems");
const grandTotal = document.getElementById("grandTotal");

const checkoutBtn = document.getElementById("checkoutBtn");

const addCartButtons = document.querySelectorAll(".add-cart");

/* ==========================================
   CART OPEN / CLOSE
========================================== */

if (cartBtn) {

    cartBtn.addEventListener("click", () => {

        cartSidebar.style.right = "0";

    });

}

if (closeCart) {

    closeCart.addEventListener("click", () => {

        cartSidebar.style.right = "-420px";

    });

}

/* ==========================================
   SAVE CART
========================================== */

function saveCart() {

    localStorage.setItem("nenoCart", JSON.stringify(cart));

}

/* ==========================================
   LOAD CART
========================================== */

function loadCart() {

    const savedCart = localStorage.getItem("neno
                                           /* ==========================================
   ADD TO CART SYSTEM
========================================== */

addCartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const id = Number(button.dataset.id);

        const name = button.dataset.name;

        const price = Number(button.dataset.price);

        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {

            existingItem.quantity++;

        } else {

            cart.push({

                id: id,

                name: name,

                price: price,

                quantity: 1

            });

        }

        saveCart();

        updateCart();

        showToast(name + " added to cart");

    });

});

/* ==========================================
   UPDATE CART
========================================== */

function updateCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    let totalItems = 0;

    cart.forEach((item) => {

        total += item.price * item.quantity;

        totalItems += item.quantity;

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>${formatPrice(item.price)}</p>

            </div>

            <div class="cart-item-controls">

                <button onclick="decreaseQuantity(${item.id})">-</button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">+</button>

                <button onclick="removeItem(${item.id})">

                    <i
                    /* ==========================================
   CART FUNCTIONS
========================================== */

function increaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (item) {

        item.quantity++;

        saveCart();

        updateCart();

    }

}

function decreaseQuantity(id) {

    const item = cart.find(product => product.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(product => product.id !== id);

    }

    saveCart();

    updateCart();

}

function removeItem(id) {

    cart = cart.filter(product => product.id !== id);

    saveCart();

    updateCart();

    showToast("Item removed from cart");

}

function clearCart() {

    cart = [];

    saveCart();

    updateCart();

    showToast("Cart cleared");

}

/* ==========================================
   CHECKOUT BUTTON
========================================== */

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) {

            showToast("Your cart is empty");

            return;

        }

        const checkoutSection = document.getElementById("checkout");

        if (checkoutSection) {

            checkoutSection.scrollIntoView({

                behavior: "smooth"

            });

        }

        cartSidebar.style.right = "-420px";

    });

}

/* ==========================================
   INITIAL LOAD
========================================== */

loadCart();

updateCart();
/* ==========================================
   TOAST NOTIFICATION
========================================== */

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

/* ==========================================
   LOGIN MODAL
========================================== */

const loginBtn = document.getElementById("loginBtn");

const loginModal = document.getElementById("loginModal");

const closeLogin = document.querySelector(".close-login");

if (loginBtn && loginModal) {

    loginBtn.addEventListener("click", () => {

        loginModal.style.display = "flex";

    });

}

if (closeLogin) {

    closeLogin.addEventListener("click", () => {

        loginModal.style.display = "none";

    });

}

window.addEventListener("click", (e) => {

    if (e.target === loginModal) {

        loginModal.style.display = "none";

    }

});

/* ==========================================
   LOGIN FORM
========================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("customerName").value.trim();

        const email = document.getElementById("customerEmail").value.trim();

        if (name === "" || email === "") {

            showToast("Please fill all required fields");

            return;

        }

        local
        /* ==========================================
   LIVE FOOD SEARCH
========================================== */

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".food-card");

        cards.forEach((card) => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ==========================================
   CONTACT FORM
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        showToast("✅ Message Sent Successfully");

        contactForm.reset();

    });

}

/* ==========================================
   NEWSLETTER
========================================== */

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", (e) => {

        e.preventDefault();

        showToast("🎉 Thank you for subscribing!");

        newsletterForm.reset();

    });

}

/* ==========================================
   CHECKOUT FORM
========================================== */

const checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {

    checkoutForm.addEventListener("submit", (e) => {

        e.preventDefault();

        if (cart.length === 0) {

            showToast("🛒 Your cart is empty");

            return;

        }

        const orderNumber = "NENO-" + Date.now();

        showToast("🎉 Order Placed Successfully");

        alert(
`Order Successful!

Order ID: ${orderNumber}

Thank you for choosing Neno Fast Food ❤️`
        );

        clearCart();

        checkoutForm.reset();

    });

}

/* ==========================================
   SMOOTH SCROLL LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#ffb703;
color:#111;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
box-shadow:0 10px 25px rgba(0,0,0,.3);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".achievement-box h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const target=counter.innerText;

const number=parseInt(target.replace(/\D/g,""));

let current=parseInt(counter.dataset.count||0);

const increment=Math.max(1,Math.ceil(number/100));

if(current<number){

current+=increment;

if(current>number) current=number;

counter.dataset.count=current;

counter.innerText=target.replace(number,current);

setTimeout(updateCounter,20);

}

};

updateCounter();

});

/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

showToast("🍔 Welcome to Neno Fast Food");

});

/* ==========================================
   KEYBOARD SHORTCUTS
========================================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(loginModal){

loginModal.style.display="none";

}

if(cartSidebar){

cartSidebar.style.right="-420px";

}

}

});

/* ==========================================
   FINAL INITIALIZATION
========================================== */

loadCart();

updateCart();

console.log("================================");

console.log("NENO FAST FOOD");

console.log("Ultimate Version Loaded");

console.log("================================");
