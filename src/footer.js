let footer = (()=>{
    let content = document.getElementById("content");
    let footer = document.createElement("div");

    footer.id = "footer";
    footer.textContent = "© Lorem ipsum dolor sit.";

    let init = ()=>{
        content.appendChild(footer);
    }

    return {init};
})();


export {footer}
