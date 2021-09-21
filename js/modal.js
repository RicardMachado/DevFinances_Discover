const Modal = {
    open(){
        var modalOpen = document.querySelector(".modal-overlay");
        modalOpen.classList.add("active");
    },
    close(){
        var modalClose = document.querySelector(".modal-overlay");
        modalClose.classList.remove("active");
    }
}