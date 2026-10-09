function showCategory(category) {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(function(card) {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "inline-block";
        } else {
            card.style.display = "none";
        }
    });
}

let cart = [];

function addtocart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item) {
        cartItems.innerHTML += `
            <div>
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;

        total += item.price;
    
    });
    let deliveryCharge = total >= 999 ? 0 : 30;
    let finalTotal = total + deliveryCharge;
    cartTotal.innerHTML = 
        deliveryCharge === 0
        ? "Total:₹" + finalTotal + "(Delivery FREE)"
        :"Total:₹" + finalTotal + "(DElivery₹30)";

}
function placeOrder() {
    

    document.getElementById("checkout-section").style.display = "block";

    
}
function confirmOrder() {
    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const address = document.getElementById("customer-address").value;

    if (name === "" || phone === "" || address === "") {
        alert("Please fill all delivery details.");
        return;
    }

    alert("Order confirmed! Payment: Cash on Delivery.");
}
function openCart() {
    const cartSection = document.getElementById("cart-section");

    if (cartSection) {
        cartSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        alert("Cart section nahi mila! HTML mein id='cart-section' check karo.");
    }
}