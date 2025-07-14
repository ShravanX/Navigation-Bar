 function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.addEventListener('scroll', () => {
    const navbars = document.getElementsByClassName("nav");

    for (let i = 0; i < navbars.length; i++) {
        const navbar = navbars[i];

        if (window.scrollY > 200) {
         navbar.style.background = "Ivory";
        } else {
            navbar.style.background = "#FAF9F6"; 
        }
    } 
});