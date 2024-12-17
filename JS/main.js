import Ui from './ui.js';
const disPlay = new Ui()
function navClick(){
    disPlay.dsplayCard('mmorpg')
    const navLink = document.querySelectorAll('.navbar-nav a')
    for (const element of navLink) {
        element.addEventListener('click',()=>{
            for (const item of navLink) {
                item.classList.remove('active-nav')
            }
            element.classList.add('active-nav')
            const category = element.textContent.toLocaleLowerCase()
            disPlay.dsplayCard(category)
        })
    }
}
const TrackerDom = new MutationObserver(()=>{
    const listCardsElm = document.querySelectorAll('.card-inarr')
            for(const card of listCardsElm){
                card.addEventListener('click',()=>{
                    disPlay.dsplayDetails(card.getAttribute('idCard'))
            })}
})
TrackerDom.observe(document.getElementById('cards'),{childList: true})
navClick()