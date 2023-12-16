window.onload = () => {
    let filters = document.querySelectorAll("#filters button");
    for(let  filter of filters){
        filter.addEventListener("click", function(){
            let tag = this.id;

            let images = document.querySelectorAll("#gallery img");
            
            for(let img of images){
                img.classList.replace("active", "inactive");

                if(tag in img.dataset || tag === "all"){
                    img.classList.replace("inactive", "active");
                }
            }
        });
    }
}