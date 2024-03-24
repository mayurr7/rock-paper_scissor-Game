let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user=document.querySelector(".user");
let machine=document.querySelector(".machine");
let winmodel =document.querySelector(".winmodel");
let winner=document.querySelector(".winner");
let play=document.querySelector(".play");
let score = JSON.parse(localStorage.getItem("score"));
let scoreEle=document.getElementById("score");
if(score){
    scoreEle.innerText=score;
}
 let count = 0;



console.log(computer);
let random=Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");



con.forEach((element, index )=> {
    element.addEventListener("click", ()=>{
        user.style.opacity="1";
        triangle.style.display="none";
        con.forEach(item => {
            item.style.display="none";
        })
        element.style.display="block";


        element.classList.add("show");

        setTimeout(() => {
            machine.style.opacity="1";
            setTimeout(() => {
                computer[random].style.display="block";
                computer[random].classList.add("right");
            }, 1000);
            setTimeout(() => {
                if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
                    
                    winmodel.style.display="grid";
                    winner.innerText="You Win !";
                    count =  score;
                    count++;
                    scoreEle.innerText = count;
                    localStorage.setItem("score", JSON.stringify(count));
                }else if(index==0 && random==0 || index==1 && random==1 || index==2 && random==2){
                    winmodel.style.display="grid";
                    winner.innerText="Match Draw !";
                }
                else{
                    winmodel.style.display="grid";
                    winner.innerText="You loose !";
                    count = score;
                    count--;
                    scoreEle.innerText = count;
                    localStorage.setItem("score", JSON.stringify(count));
                }
            }, 1500);

        }, 500);

    })
});
play.addEventListener("click", ()=>{
    window.location.reload();
})
