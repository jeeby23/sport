const cancelBtn = document.querySelector(".cancelBtn");
const loginBtn = document.querySelector(".loginBtn");
const formpage = document.querySelector(".formpage");

loginBtn.addEventListener("click",()=>{
    loginBtn.style.display ="none";
    cancelBtn.style.display = "block"
    formpage.style.scale = "1"
})
cancelBtn.addEventListener("click",()=>{
    loginBtn.style.display ="block";
    cancelBtn.style.display = "none"
    formpage.style.scale = "0"
});

function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ="flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display ="none"
}