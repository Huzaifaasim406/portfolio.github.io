function pa1() {
    document.getElementById("para2").style.display = "none";
    document.getElementById("para3").style.display = "none";
    document.getElementById("para1").style.display = "block";
    document.getElementById("skill").style.color = "#40916c"
    document.getElementById("skill").style.fontWeight = "600"

    document.getElementById("edu").style.color = "#081c15"
    document.getElementById("edu").style.fontWeight = "500"
    document.getElementById("edu").style.textDecoration = "none";

    document.getElementById("work").style.color = "#081c15"
    document.getElementById("work").style.fontWeight = "500"
    document.getElementById("work").style.textDecoration = "none";
}
function pa2() {
    document.getElementById("para1").style.display = "none";
    document.getElementById("para2").style.display = "block";
    document.getElementById("para3").style.display = "none";
    document.getElementById("edu").style.color = "#40916c"
    document.getElementById("edu").style.fontWeight = "600"
    

    document.getElementById("skill").style.color = "#081c15"
    document.getElementById("skill").style.fontWeight = "500"
    document.getElementById("skill").style.textDecoration = "none";

    document.getElementById("work").style.color = "#081c15"
    document.getElementById("work").style.fontWeight = "500"
    document.getElementById("work").style.textDecoration = "none";
}
function pa3() {
    document.getElementById("para3").style.display = "block";
    document.getElementById("para1").style.display = "none";
    document.getElementById("para2").style.display = "none";
    document.getElementById("work").style.color = "#40916c"
    document.getElementById("work").style.fontWeight = "600"
    

    document.getElementById("edu").style.color = "#081c15"
    document.getElementById("edu").style.fontWeight = "500"
    document.getElementById("edu").style.textDecoration = "none";

    document.getElementById("skill").style.color = "#081c15"
    document.getElementById("skill").style.fontWeight = "500"
    document.getElementById("skill").style.textDecoration = "none";
}
document.getElementById("work").style.borderRight = "none";

function see1(){
    document.getElementById("cardhover1").style.marginTop = "0";
}
function hide1(){
    document.getElementById("cardhover1").style.marginTop = "-130%";
}
function see2(){
    document.getElementById("cardhover2").style.marginTop = "0";
}
function hide2(){
    document.getElementById("cardhover2").style.marginTop = "-130%";
}
function see3(){
    document.getElementById("cardhover3").style.marginTop = "0";
}
function hide3(){
    document.getElementById("cardhover3").style.marginTop = "-130%";
}
function see4(){
    document.getElementById("cardhover4").style.marginTop = "0";
}
function hide4(){
    document.getElementById("cardhover4").style.marginTop = "-130%";
}

function changeBg1(){
    let scrollval = window.scrollY;
    let navbar1 = document.getElementById("icline1a");
    if(scrollval < 780){
        navbar1.classList.remove("icline2a");
    } else{
        navbar1.classList.add("icline2a");
    }
}
window.addEventListener('scroll',changeBg1);
function changeBg2(){
    let scrollval = window.scrollY;
    let navbar2 = document.getElementById("icline2a");
    if(scrollval < 780){
        navbar2.classList.remove("icline2b");
    } else{
        navbar2.classList.add("icline2b");
    }
}
window.addEventListener('scroll',changeBg2);
function changeBg3(){
    let scrollval = window.scrollY;
    let navbar3 = document.getElementById("icline3a");
    if(scrollval < 780){
        navbar3.classList.remove("icline2c");
    } else{
        navbar3.classList.add("icline2c");
    }
}
window.addEventListener('scroll',changeBg3);

function skillsort1(){
    document.getElementById("frontend").style.display = "block";
    document.getElementById("backend").style.display = "none";
    document.getElementById("programming").style.display = "none";
    document.getElementById("sbtn1").style.background = "#081c15";
    document.getElementById("sbtn1").style.color = "#fff";
    document.getElementById("sbtn2").style.background = "#fff";
    document.getElementById("sbtn2").style.color = "#081c15";
    document.getElementById("sbtn3").style.background = "#fff";
    document.getElementById("sbtn3").style.color = "#081c15";
}
function skillsort2(){
    document.getElementById("frontend").style.display = "none";
    document.getElementById("backend").style.display = "block";
    document.getElementById("programming").style.display = "none";
    document.getElementById("sbtn1").style.background = "#fff";
    document.getElementById("sbtn1").style.color = "#081c15";
    document.getElementById("sbtn2").style.background = "#081c15";
    document.getElementById("sbtn2").style.color = "#fff";
    document.getElementById("sbtn3").style.background = "#fff";
    document.getElementById("sbtn3").style.color = "#081c15";
}
function skillsort3(){
    document.getElementById("frontend").style.display = "none";
    document.getElementById("backend").style.display = "none";
    document.getElementById("programming").style.display = "block";

    document.getElementById("sbtn1").style.background = "#fff";
    document.getElementById("sbtn1").style.color = "#081c15";
    document.getElementById("sbtn2").style.background = "#fff";
    document.getElementById("sbtn2").style.color = "#081c15";
    document.getElementById("sbtn3").style.background = "#081c15";
    document.getElementById("sbtn3").style.color = "#fff";
}

function media_visible1(){
    document.getElementById("ic1").style.visibility = "visible";
}
function media_visible2(){
    document.getElementById("ic2").style.visibility = "visible";
}
function media_visible3(){
    document.getElementById("ic3").style.visibility = "visible";
}
function media_visible4(){
    document.getElementById("ic4").style.visibility = "visible";
}
function media_visible5(){
    document.getElementById("ic5").style.visibility = "visible";
}

function media_hide1(){
    document.getElementById("ic1").style.visibility = "hidden";
}
function media_hide2(){
    document.getElementById("ic2").style.visibility = "hidden";
}
function media_hide3(){
    document.getElementById("ic3").style.visibility = "hidden";
}
function media_hide4(){
    document.getElementById("ic4").style.visibility = "hidden";
}
function media_hide5(){
    document.getElementById("ic5").style.visibility = "hidden";
}
function navopenfunc(){
    document.getElementById("navbarsecond").style.marginLeft = "0";
}
function navclosefunc(){
    document.getElementById("navbarsecond").style.marginLeft = "-800px";
}

function phonealert(){
    alert("Contact me on +92-309-2095262")
}
function twitteralert(){
    alert("No Twitter account yet!")
}
function youtubealert(){
    alert("No Youtube channel yet!")
}
function linkedinalert(){
    alert("No Linkedin account yet!")
}

// EMAIL AFFAIRS START
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "maarijabbasi92@gmail.com",
        Password : "Maarij1814446",
        To : 'maarijabbasi93@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Form from the Portfolio",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
// EMAIL AFFAIRS END

function func(){
    alert();
}