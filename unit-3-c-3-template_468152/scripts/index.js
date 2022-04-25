// Store the wallet amount to your local storage with key "amount"
var wallet=document.getElementById("wallet")

let local=JSON.parse(localStorage.getItem("amount")) ||[]
     wallet.innerText=local

function showmoney(){
    let local=JSON.parse(localStorage.getItem("amount")) ||[]
     wallet.innerText=local
}

function addmoney(){
 var amount=document.getElementById("amount").value
 amount=+amount
 
 let x= +(wallet.innerText)
 amount=x+amount
 localStorage.setItem("amount",JSON.stringify(amount))
 showmoney()
}

function moviepage(){
    window.location.href="movies.html"
}
