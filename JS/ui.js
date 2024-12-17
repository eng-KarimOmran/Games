import Gams from './Gams.js';
import Details from './Details.js';
export default class Ui{
    async dsplayCard(category){
        document.getElementById('secCards').classList.replace('d-none','d-block')
        const data = new Gams()
        document.getElementById('loader').classList.replace('d-none','d-block')
        const listCard = await data.fetchData(category)
        document.getElementById('loader').classList.replace('d-block','d-none')
        if(listCard === 'eroor'){
            const cardsEle = document.getElementById('cards')
            cardsEle.innerHTML = `<div class="w-100 py-5">
                                    <p class="h3 text-white text-center">Make sure you have a network connection.</p>
                                </div>`
        }
        else{
            const cardsEle = document.getElementById('cards')
            let container = ``
            for(let i = 0;i < listCard.length;i++){
                container += `<div class="col-12 col-sm-11 col-md-6 col-lg-3 p-3 mx-auto">
                                <div class="card-inarr position-relative" idCard="${listCard[i].id}">
                                    <div class="p-3 border border-Gray card-gams rounded-top-2">
                                        <div class="h-100 d-flex flex-column justify-content-between">
                                            <div class="w-100 h-50">
                                                <img src="${listCard[i].thumbnail}" class="w-100 h-100 d-block rounded-top-2" alt="">
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center my-2">
                                                <span class="text-capitalize text-white">${listCard[i].title}</span>
                                                <div class="py-1 px-2 bg-blue rounded-1">
                                                    <span class="text-capitalize text-white">Free</span>
                                                </div>
                                            </div>
                                            <p class="text-center text-Gray">${listCard[i].short_description}</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center px-3 py-2 border border-Gray border-top-0 card-gams-bottom rounded-bottom-2">
                                        <span class="text-white text-uppercase p-1 bg-Gray rounded-2">${listCard[i].genre}</span>
                                        <span class="text-white p-1 bg-Gray rounded-2">${listCard[i].platform}</span>
                                    </div>
                                </div>
                            </div> `
            }
            cardsEle.innerHTML = container
        }
    }
    async dsplayDetails(id){
        document.getElementById('secCards').classList.replace('d-block','d-none')
        document.getElementById('secDetailsCards').classList.replace('d-none','d-block')
        document.getElementById('CloseDetails').addEventListener('click',()=>{
            document.getElementById('secDetailsCards').classList.replace('d-block','d-none')
            document.getElementById('secCards').classList.replace('d-none','d-block')
        })
        const DetailsCards = new Details()
        document.getElementById('loader').classList.replace('d-none','d-block')
        const DetailsCard = await DetailsCards.fetchData(id)
        document.getElementById('loader').classList.replace('d-block','d-none')
        if(DetailsCard === 'eroor'){
            const cardsEle = document.getElementById('DetailsCard')
            cardsEle.innerHTML = `<div class="w-100 py-5">
                                    <p class="h3 text-white text-center">Make sure you have a network connection.</p>
                                </div>`
            document.getElementById('loader').classList.replace('d-block','d-none')
        }
        else{
            const DetailsElm = document.getElementById('DetailsCard')
            let container = `<div class="col-lg-3 col-md-4 col-12 me-auto my-2">
                                <img src="${DetailsCard.thumbnail}" class="w-100 d-block" alt="">
                            </div>
                            <div class="d-flex flex-column col-md-7 col-12 col-lg-8">
                                <span class="text-capitalize text-white my-2">Title: ${DetailsCard.title}</span>
                                <span class="text-capitalize text-white my-2">Category: <span class="px-1 text-black bg-info rounded-3">${DetailsCard.genre}</span></span>
                                <span class="text-capitalize text-white my-2">Platform: <span class="px-1 text-black bg-info rounded-3">${DetailsCard.platform}</span></span>
                                <span class="text-capitalize text-white my-2">Status: <span class="px-1 text-black bg-info rounded-3">${DetailsCard.status}</span></span>
                                <p class="text-white my-2 col-11">${DetailsCard.description}</p>
                                <div><a href="${DetailsCard.game_url}"><button class="btn btn-custom my-2">Show Game</button></a></div>
                            </div>`
            DetailsElm.innerHTML = container
        }
        console.log(DetailsCard)
    }
}