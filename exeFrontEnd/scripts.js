const modalOverlay= document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.cards')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener("click", function() {
        const siteId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${siteId}`;
    })
}

document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (modal.classList.contains('maximize') == false) 
        modal.classList.add('maximize')    
})

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src = ""
})
