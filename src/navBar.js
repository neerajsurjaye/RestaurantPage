let navBar = (()=>{
    //creating elements
    let nav = document.createElement("div");
    let logo = document.createElement("div");
    let buttons = document.createElement("div");
    let home = document.createElement("div");
    let menu = document.createElement("div");
    let about = document.createElement("div");
    let content = document.getElementById("content");
    let line = document.createElement("div");

    //assigning ids
    nav.id = "nav-bar";
    logo.id = "logo";
    buttons.id = "buttons";
    home.id = "home";
    menu.id = "menu";
    about.id = "about";
    line.classList.add("line");


    //text-content
    logo.textContent = "PROJECT:RESTAURANT";
    home.textContent = "home";
    menu.textContent = "menu";
    about.textContent = "ABOUT";

    //initilizes~~~~
    let init = ()=>{
        //nav-bar
        content.appendChild(nav);

        //logo
        nav.appendChild(logo);
        nav.appendChild(line);
        
        //buttons
        nav.appendChild(buttons);
        buttons.appendChild(home);
        buttons.appendChild(menu);
        buttons.appendChild(about);

    }

    return {init};

})();


export {navBar};