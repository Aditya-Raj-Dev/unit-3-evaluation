// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

var wallet=document.getElementById("wallet")
let local=JSON.parse(localStorage.getItem("amount")) ||[]
     wallet.innerText=local

     //`https://www.omdbapi.com/?apikey=9c3efe9&s=${movie}`
        let id;
           
             async function showmovies(){
                try{
                    let movie=document.getElementById("search").value
                    let url=`https://www.omdbapi.com/?apikey=9c3efe9&s=${movie}`
                    let res= await fetch(url)
                    let data= await res.json()
                    console.log(data.Search)
                    appendmovie(data.Search)
                }
                catch(err){
                    console.log(err)
                }
            }
                function showdata(func,delay){
                    if(id){
                        clearInterval(id)
                    }
                   id= setTimeout(function(){
                        func()
                    },delay)
                }
                  var arr=[]
                function appendmovie(data){
                    let movies=document.getElementById("movies")
                    movies.innerHTML=null
                    data.map(function({Poster,Title},index){
                        let div=document.createElement("div")
                       
                        let img=document.createElement("img")
                        
                        img.src=Poster;

                        let title=document.createElement("h3")
                        title.innerText=Title;

                        let but=document.createElement("button")
                        but.innerText="Book Now"
                        but.setAttribute("class","book_now")
                        but.addEventListener("click",function(){
                            showcheckout()
                        })

                        div.append(img,title,but)
                        
                        movies.append(div)

                        function showcheckout(div){
                            arr.push(Poster)
                            arr.push(Title)
                            localStorage.setItem("movie",JSON.stringify(arr))
                            window.location.href="checkout.html"
                        }

                    })

                }

                