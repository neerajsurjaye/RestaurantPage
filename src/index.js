import {navBar} from "./navBar";
import {home} from "./home";
import {menu} from "./menu";
import {about} from "./about";
import {footer} from "./footer";



navBar.init();
footer.init();


home.init();
menu.init();
about.init();
menu.remove();
home.remove();
about.remove();
