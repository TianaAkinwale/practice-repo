const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.closeBtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    /*if (sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }
    else {
        sidebar.classList.add('show-sidebar');
    }*/
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});