import {navBar} from "./navBar";
import {home} from "./home";
import {menu} from "./menu";
import {about} from "./about";
import {footer} from "./footer";



navBar.init();
footer.init();
home.init();
document.getElementById("home").classList.add("active");


let clr_button = ()=>{
    let buttons = (document.getElementById("buttons")).childNodes;
    console.log(buttons);
    for(let btn of buttons){
        btn.classList.remove("active");
    }
};

let change_page = (e)=>{
    if(e.target.id == "home"){
        home.init();
        menu.remove();
        about.remove();
        clr_button();
        e.target.classList.add("active");
    }else if(e.target.id == "menu"){
        home.remove();
        menu.init();
        about.remove();
        clr_button();
        e.target.classList.add("active");
    }else if(e.target.id == "about"){
        home.remove();
        menu.remove();
        about.init();
        clr_button();
        e.target.classList.add("active");
    }
};

let buttons = document.getElementById("buttons");
buttons.addEventListener("click" , change_page);

