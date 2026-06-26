// Neno Fast Food Script

let cart = [];

function add(name, price) {
  const item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      name: name,
      price: price,
      qty: 1
    });
  }

  updateCart();
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

function updateCart() {

  const items = document.getElementById("items");
  const total = document.getElementById("total");
  const count = document.getElementById("count");

  if (!items) return;

  items.innerHTML = "";

  let grandTotal = 0;
  let totalItems = 0;

  cart.forEach(item => {

    grandTotal += item.price * item.qty;
    totalItems += item.qty;

    items.innerHTML += `
      <div style="display:flex;justify-content:space-between;align-items:center;margin:10px 0;border-bottom:1px solid #333;padding-bottom:8px;">
        <div>
          <strong>${item.name}</strong><br>
          Qty : ${item.qty}
        </div>

        <div>
          $${(item.price * item.qty).toFixed(2)}
          <br>
          <button onclick="removeItem('${item.name}')">❌</button>
        </div>
      </div>
    `;

  });

  total.innerHTML = grandTotal.toFixed(2);
  count.innerHTML = totalItems;

}

function toggleCart(){

const cartBox=document.getElementById("cartBox");

if(cartBox.style.display==="block"){
cartBox.style.display="none";
}else{
cartBox.style.display="block";
}

    }
