let loginBtn=document.getElementById("loginBtn");
console.log(loginBtn)
loginBtn.addEventListener("click",()=>{
    window.location.href="login.html";
})

let men=document.getElementById("men");
let women=document.getElementById("women")
let menItem=document.getElementById("men-item");
let womenItem=document.getElementById("women-item");
let bestSeller=document.getElementById("bestSeller");
let best=document.getElementById("best");

men.addEventListener("mouseover",()=>{
    menItem.style.display="block";
})
men.addEventListener("mouseout", ()=>{
    menItem.style.display="none";
  });
  menItem.addEventListener("mouseover", () => {
    menItem.style.display = "block";
  });
  menItem.addEventListener("mouseout", () => {
    menItem.style.display = "none";
  });

  men.addEventListener("click",()=>{
    menItem.style.display="none";
  })
  women.addEventListener("mouseover",()=>{
    womenItem.style.display="block";
})
women.addEventListener("mouseout", ()=>{
    womenItem.style.display="none";
  });
  womenItem.addEventListener("mouseover", () => {
    womenItem.style.display = "block";
  });
  womenItem.addEventListener("mouseout", () => {
    womenItem.style.display = "none";
  });
  women.addEventListener("click",()=>{
    womenItem.style.display="none";
  })

  best.addEventListener("mouseover",()=>{
    bestSeller.style.display="block";
})
best.addEventListener("mouseout", ()=>{
  bestSeller.style.display="none";
  });
  bestSeller.addEventListener("mouseover", () => {
    bestSeller.style.display = "block";
  });
  bestSeller.addEventListener("mouseout", () => {
    bestSeller.style.display = "none";
  });

  best.addEventListener("click",()=>{
    bestSeller.style.display="none";
  })