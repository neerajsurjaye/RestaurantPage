let about  = (()=>{
    let holder = document.createElement("div");
    let header = document.createElement("div");
    let body = document.createElement("div");
    let content = document.getElementById("content");

    header.textContent = "ABOUT:";
    body.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque enim fugiat corporis ipsum illum nam quia voluptate velit accusamus, magnam officia nulla aliquid sunt quos facere? Voluptatibus porro itaque, amet, magnam nemo eveniet sed facere vero excepturi cupiditate aliquam.";


    holder.id = "main-section-about";
    header.id = "section-header";
    body.id = "section-body";

    let init = ()=>{
        content.appendChild(holder);
        holder.appendChild(header);
        holder.appendChild(body);

    }

    let remove = ()=>{
        //console.log(document.getElementById("section-header"));
        if(document.getElementById("main-section-about")){
            content.removeChild(holder);
        }
        //console.log(document.getElementById("section-header"));
    }

    return {init , remove};

})();

export {about};