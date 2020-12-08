
let menu = (() => {
    let content = document.getElementById("content");
    let menu = document.createElement("div");
    let head = document.createElement("div");
    let list = document.createElement("ol");
    let list_items = [];

    head.textContent = "MENU";

    menu.id = "main-section-menu";
    head.id = "menu-head";
    list.id = "list";
    
    let init = ()=>{
        content.appendChild(menu);
        menu.appendChild(head);
        menu.appendChild(list);

        for(var i = 0 ; i < 4 ; i++){
            list_items[i] = document.createElement("li");
            list_items[i].classList.add("list-item");
            list_items[i].textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
            list.appendChild(list_items[i]);      
        }
    }

    let remove = ()=>{
        //console.log(document.getElementById("main-section-menu"));
        if(document.getElementById("main-section-menu")){
            content.removeChild(menu);
        }
        //content.removeChild(head);
        //content.removeChild(list);
    }

    return {init , remove};

})();


export {menu};