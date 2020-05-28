const links = document.querySelector('.links')
const navBtn = document.querySelector(".nav-toggle");
const closeBtn = document.querySelector(".work-modal-close");
const modal = document.querySelector(".work-modal");
const modalItem = document.querySelector(".work-modal-item");

//navbar
navBtn.addEventListener("click", function () {
    links.classList.toggle("show-links");
});



const eventListeners = (() => {
    class UI {
        //show modal
        showModal(event) {
        event.preventDefault();
        if (event.target.parentElement.classList.contains("work-item-icon")) {
            let id = event.target.parentElement.dataset.id;

            modal.classList.add("show-modal");
            modalItem.style.backgroundImage = `url(./img/galeria-${id}.jpg)`;
            }
        }

        //hide modal
        closeModal(event) {
        event.preventDefault();
        modal.classList.remove("show-modal");
        }
    }

    const ui = new UI();

    //display modal
    const icons = document.querySelectorAll(".work-item-icon");
    icons.forEach((item) => {
        item.addEventListener("click", function (event) {
        ui.showModal(event);
        });
    });

    //hide modal
    closeBtn.addEventListener("click", function () {
        ui.closeModal(event);
    });
    
})();


