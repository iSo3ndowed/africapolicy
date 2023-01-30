const navMenu = document.querySelector ("aside ul")
const navBtn = document.querySelector (".fa-bars")
const closeBtn = document.querySelector("#main")
const removeBtn = document.querySelector("#closeBtn")


navBtn.addEventListener ("click", () => { 
    changeToggler()
    navMenu.style.display ="flex"
    navMenu.classList.toggle("show")

    
   
    
})


function changeToggler() {
    let navStatus = "true"
    if(navStatus === false){
        navMenu.style.display = "flex"
        navBtn.style.display = "none"
    }else if(navStatus === true){
        navMenu.style.display = "none"
    }
}

function remove(){
    navMenu.style.display = "none"
}

removeBtn.addEventListener ("click", () => {
    navMenu.style.display = "none"
})




