const body = document.querySelector('body');
const pages = document.querySelectorAll('.pageContent > div');
const re = new RegExp(/bg-\w+/);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){ 
            body.classList.forEach(bodyClassItem=>{
                re.test(bodyClassItem) ? (body.classList.remove(bodyClassItem)) : null;
            })
            const childElem = entry.target.firstElementChild;
            childElem.classList.forEach(classItem=>{
                classItem.includes('bg') ? body.classList.add(classItem) : null;    
            })
        }
    })
},{
    rootMargin: '-50%'
})

pages.forEach(page=>{
    observer.observe(page)
})
