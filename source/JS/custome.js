/* Modals */
// location modal
document.querySelector("#location").addEventListener("click",()=>{
    document.querySelector("#backdrop").style.display = "block";
    document.querySelector(".location-modal").style.display = "block"
})

// Supermarket Modal
document.querySelector("#super-market").addEventListener("click",()=>{
    document.querySelector("#backdrop").style.display = "block";
    document.querySelector(".super-market-modal").style.display="block";
})

// Closing Modal
function closeModal(str){
    document.querySelector(`#${str}-modal-close`).addEventListener("click",()=>{
        document.querySelector("#backdrop").style.display = "none";
        document.querySelector(`.${str}-modal`).style.display = "none"
    })
}

closeModal("location");
closeModal("super-market")

/* STICKY BOTTOM CATEGORY */
// Max-lg Bottom Menu Category Tabs
const tab_btns = document.querySelectorAll(".tab-btn");
const tab_panels = document.querySelectorAll(".tab-panel")

tab_btns.forEach((item,index)=>{
    item.addEventListener("click",function(){
        tab_btns.forEach(item=>{item.classList.remove("active");});
        this.classList.add('active');

        const currentTabId = this.getAttribute("data-tab");
        
        tab_panels.forEach(item=>{item.classList.remove("active");});
        document.querySelector(`#${currentTabId}`).classList.add("active");
    })
})

// Opening the category
document.querySelector("#sticky-catergory-open").addEventListener("click",()=>{
    document.querySelector(".sticky-bottom-catergory").style.display = "block";
})  

// Closing the category
document.querySelector("#sticky-catergory-close").addEventListener("click",()=>{
    document.querySelector(".sticky-bottom-catergory").style.display = "none";
})  

