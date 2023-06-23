const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const plusIcon1 = document.querySelector("#fa-plus1");
const plusIcon2 = document.querySelector("#fa-plus2");
const plusIcon3 = document.querySelector("#fa-plus3");

const minusIcon1 = document.querySelector("#fa-minus1");
const minusIcon2 = document.querySelector("#fa-minus2");
const minusIcon3 = document.querySelector("#fa-minus3");

const teamMedia1 = document.querySelector("#team-media1");
const teamMedia2 = document.querySelector("#team-media2");
const teamMedia3 = document.querySelector("#team-media3");



const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");
const para4 = document.querySelector(".para4");


const down1  = document.querySelector("#down1");
const up1 = document.querySelector("#up1");

const down2  = document.querySelector("#down2");
const up2 = document.querySelector("#up2");

const down3  = document.querySelector("#down3");
const up3 = document.querySelector("#up3");

const down4  = document.querySelector("#down4");
const up4 = document.querySelector("#up4");



const openIcon = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".side-bar");
const closeIcon = document.querySelector(".fa-times");

openIcon.addEventListener("click",sideBarFunc);


function sideBarFunc(){
    sideBar.style.transform = "translateX(0)";
    sideBar.style.transition = ".5s";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
}


closeIcon.addEventListener("click",sideBarFunc1);


function sideBarFunc1(){
    sideBar.style.transform = "translateX(-100%)";
    sideBar.style.transition = ".5s";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
}




down1.addEventListener("click",openThem1);

function openThem1(){
    para1.style.height = "100px";
    para1.style.transition = ".5s";
    down1.style.display = "none";
    up1.style.display = "block";
}

up1.addEventListener("click",closeThem1);

function closeThem1(){
    para1.style.height = "0";
    para1.style.transition = ".5s";
    down1.style.display = "block";
    up1.style.display = "none";
}



down2.addEventListener("click",openThem2);

function openThem2(){
    para2.style.height = "100px";
    para2.style.transition = ".5s";
    down2.style.display = "none";
    up2.style.display = "block";
}

up2.addEventListener("click",closeThem2);

function closeThem2(){
    para2.style.height = "0";
    para2.style.transition = ".5s";
    down2.style.display = "block";
    up2.style.display = "none";
}







down3.addEventListener("click",openThem3);

function openThem3(){
    para3.style.height = "100px";
    para3.style.transition = ".5s";
    down3.style.display = "none";
    up3.style.display = "block";
}

up3.addEventListener("click",closeThem3);

function closeThem3(){
    para3.style.height = "0";
    para3.style.transition = ".5s";
    down3.style.display = "block";
    up3.style.display = "none";
}





down4.addEventListener("click",openThem4);

function openThem4(){
    para4.style.height = "100px";
    para4.style.transition = ".5s";
    down4.style.display = "none";
    up4.style.display = "block";
}

up4.addEventListener("click",closeThem4);

function closeThem4(){
    para4.style.height = "0";
    para4.style.transition = ".5s";
    down4.style.display = "block";
    up4.style.display = "none";
}


















btn1.addEventListener("click",showProject1);


function showProject1(e){
    e.preventDefault();

btn1.style.backgroundColor = "var(--main-color)"; 
btn1.style.color = "#fff";
box1.style.display = "flex";

box2.style.display = "none";
box3.style.display = "none";
box4.style.display = "none";

btn2.style.backgroundColor = "transparent";
btn3.style.backgroundColor = "transparent";
btn4.style.backgroundColor = "transparent";

btn2.style.color = "#000";
btn3.style.color = "#000";
btn4.style.color = "#000";
}



btn2.addEventListener("click",showProject2);

function showProject2(e){
    e.preventDefault();

btn2.style.backgroundColor = "var(--main-color)"; 
btn2.style.color = "#fff";
box2.style.display = "flex";

box1.style.display = "none";
box3.style.display = "none";
box4.style.display = "none";

btn1.style.backgroundColor = "transparent";
btn3.style.backgroundColor = "transparent";
btn4.style.backgroundColor = "transparent";

btn1.style.color = "#000";
btn3.style.color = "#000";
btn4.style.color = "#000";
}








btn3.addEventListener("click",showProject3);

function showProject3(e){
    e.preventDefault();

btn3.style.backgroundColor = "var(--main-color)"; 
btn3.style.color = "#fff";
box3.style.display = "flex";

box1.style.display = "none";
box2.style.display = "none";
box4.style.display = "none";

btn1.style.backgroundColor = "transparent";
btn2.style.backgroundColor = "transparent";
btn4.style.backgroundColor = "transparent";

btn1.style.color = "#000";
btn2.style.color = "#000";
btn4.style.color = "#000";
}



btn4.addEventListener("click",showProject4);

function showProject4(e){
    e.preventDefault();

btn4.style.backgroundColor = "var(--main-color)"; 
btn4.style.color = "#fff";
box4.style.display = "flex";

box1.style.display = "none";
box2.style.display = "none";
box3.style.display = "none";

btn1.style.backgroundColor = "transparent";
btn2.style.backgroundColor = "transparent";
btn3.style.backgroundColor = "transparent";

btn1.style.color = "#000";
btn2.style.color = "#000";
btn3.style.color = "#000";
}


plusIcon1.addEventListener("click",showSocialMedias);


function showSocialMedias(){
    teamMedia1.style.transform = "translateY(0)";
    teamMedia1.style.transition = ".5s";
    plusIcon1.style.display = "none";
    minusIcon1.style.display = "block";
}

minusIcon1.addEventListener("click",hiddenSocialMedias);


function hiddenSocialMedias(){
    teamMedia1.style.transform = "translateY(-170px)";
    teamMedia1.style.transition = ".5s";
    plusIcon1.style.display = "block";
    minusIcon1.style.display = "none";
}




plusIcon2.addEventListener("click",showSocialMedias2);


function showSocialMedias2(){
    teamMedia2.style.transform = "translateY(0)";
    teamMedia2.style.transition = ".5s";
    plusIcon2.style.display = "none";
    minusIcon2.style.display = "block";
}

minusIcon2.addEventListener("click",hiddenSocialMedias2);


function hiddenSocialMedias2(){
    teamMedia2.style.transform = "translateY(-170px)";
    teamMedia2.style.transition = ".5s";
    plusIcon2.style.display = "block";
    minusIcon2.style.display = "none";
}







plusIcon3.addEventListener("click",showSocialMedias3);


function showSocialMedias3(){
    teamMedia3.style.transform = "translateY(0)";
    teamMedia3.style.transition = ".5s";
    plusIcon3.style.display = "none";
    minusIcon3.style.display = "block";
}

minusIcon3.addEventListener("click",hiddenSocialMedias3);


function hiddenSocialMedias3(){
    teamMedia3.style.transform = "translateY(-170px)";
    teamMedia3.style.transition = ".5s";
    plusIcon3.style.display = "block";
    minusIcon3.style.display = "none";
}







