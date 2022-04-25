// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time\

var wallet=document.getElementById("wallet")

let local=JSON.parse(localStorage.getItem("amount")) ||[]
     wallet.innerText=local

     let localmovie=JSON.parse(localStorage.getItem("movie")) || []
     console.log(localmovie)


     append(localmovie)
    
function append(localmovie){
    let movie=document.getElementById("movie")

    let img=document.createElement("img")
    img.src=localmovie[0]

    let tit=document.createElement("h1")
    tit.innerText=localmovie[1]

    movie.append(tit,img)
}

function checkout(){
    let booking=true;
    let number=document.getElementById("number_of_seats").value;
     number= +number
     x=number*100
     console.log("x",x)
     console.log("local",local)
     if(x>local){
         alert("Insufficient Balance!")
     }
     else{
         booking=false;
     }
     if(booking==false){
        alert("Confirm Booking")
        let local=JSON.parse(localStorage.getItem("amount")) ||[]
        let amount = local-x
        console.log(amount)
        localStorage.setItem("amount",JSON.stringify(amount))
        var wallet=document.getElementById("wallet")

        let final=JSON.parse(localStorage.getItem("amount")) ||[]
        wallet.innerText=final
     }
}