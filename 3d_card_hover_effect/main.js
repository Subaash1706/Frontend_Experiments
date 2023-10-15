const card = document.querySelectorAll('.card');
const body = document.querySelector('body')
const cardContainer = document.querySelector('.card-container')

card.forEach(item=>{
    item.addEventListener('mouseover', (e)=>{
        if(e.target.classList.contains('ironmanCard')||(e.target.classList.contains('ironmanMainImage')||(e.target.classList.contains('ironmanLogo')))){
            body.style.background = 'url(/images/ironmanCard.jpg)';
        }
        else if(e.target.classList.contains('capCard')||(e.target.classList.contains('capMainImage')||(e.target.classList.contains('capLogo')))){
            body.style.background = 'url(/images/cap-background-2.jpg)'
        }
        else{
            body.style.background = 'url(/images/hulk-background.jpg)'
        }
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center'
        body.style.backdropFilter = 'blur(20px)'
    })
})