let home = (()=>{
    let sHome = document.createElement("div");
    let sHead = document.createElement("div");
    let sBody = document.createElement("div");
    let content  = document.getElementById("content");

    sHome.id = "main-section-home";
    sHead.id = "section-header";
    sBody.id = "section-body";

    sHead.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.";
    sBody.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque enim fugiat corporis ipsum illum nam quia voluptate velit accusamus, magnam officia nulla aliquid sunt quos facere? Voluptatibus porro itaque, amet, magnam nemo eveniet sed facere vero excepturi cupiditate aliquam.";

    let init = ()=>{
        content.appendChild(sHome);

        sHome.appendChild(sHead);
        sHome.appendChild(sBody);

    }

    return {init};
})();


export {home};