// skins changes
const links=document.querySelectorAll(".alternate-style"),
total=links.length;
function GetStyle(color){
    for(let i=0; i<total;i++){
        if(color===links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
}

//contact sending mail
function Sendmail(){
    var parm={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        phone_number:document.getElementById("phone").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_tqva4lm","template_m34wi5s",parm).then(
        alert("Mesage sent Successfully")
    );
}

//imageslide
var myImage=document.getElementById('imag')
var count=0
function imageChange(){
    let mySrc=myImage.getAttribute('src');
    var images=['gopal3.jpeg','gopal5.jpeg','gopal2.jpeg',"gopal4.jpeg"]
    if (count==images.length){
        count=0
    }
    else{
        myImage.setAttribute('src',images[count]);
        count+=1
    }
}
setInterval("imageChange()",2000)


//project slides
var myImag=document.getElementById('ig')
var c=0
function imaeChange(){
    let mySrc=myImag.getAttribute('src');
    var image=['g1.png','g2.png','g4.png',"g5.png"]
    if (c==image.length){
        c=0
    }
    else{
        myImag.setAttribute('src',image[c]);
        c+=1
    }
}
setInterval("imaeChange()",2000)
