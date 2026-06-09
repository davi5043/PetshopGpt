let cart = JSON.parse(localStorage.getItem("cart")) || [];


function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;

  let total = 0;

  document.getElementById("cartItems").innerHTML =
    cart.map(item => {
      total += item.price;
      return `<p>${item.name} - R$ ${item.price}</p>`;
    }).join("");

  document.getElementById("total").innerText =
    "Total: R$ " + total.toFixed(2);
}


function toggleCart(){
  document.getElementById("cartPanel").classList.toggle("active");
}


function clearCart(){
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}


const date = document.getElementById("date");
if(date){
  const today = new Date().toISOString().split("T")[0];
  date.min = today;
}


const phone = document.getElementById("phone");

phone?.addEventListener("input", e=>{
  let v = e.target.value.replace(/\D/g,"");

  if(v.length<=2) v=v.replace(/(\d{0,2})/,"($1");
  else if(v.length<=7) v=v.replace(/(\d{2})(\d{0,5})/,"($1) $2");
  else v=v.replace(/(\d{2})(\d{5})(\d{0,4})/,"($1) $2-$3");

  e.target.value=v;
});


function agendar(){
  alert("Agendamento realizado com sucesso! 🐾");
}

updateCart();