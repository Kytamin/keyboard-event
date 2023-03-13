function uparrowpressed(){
    var imgObj=document.getElementById("zenitsu")
    imgObj.style.top=parseInt(imgObj.style.top)-5 +'px'
}
function downarrowpressed(){
    var imgObj=document.getElementById("zenitsu")
    imgObj.style.top=parseInt(imgObj.style.top)+5+'px'
}
function righarrowpressed(){
    var imgObj=document.getElementById("zenitsu")
    imgObj.style.left=parseInt(imgObj.style.left)+5+'px'
}
function leftarrowpressed(){
    var imgObj=document.getElementById("zenitsu")
    imgObj.style.left=parseInt(imgObj.style.left)-5+'px'
}
function moveselection(evt){
    switch (evt.keyCode){
        case 37:
            leftarrowpressed();
            break;
        case 39:
            righarrowpressed();
            break;

        case 38:
            uparrowpressed();
            break;
        case 40:
            downarrowpressed();
            break;

    }
}
function docready(){
    window.addEventListener('keypress',moveselection);
}

