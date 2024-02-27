const allItems = document.querySelectorAll('.navmenu ul li a');
allItems.forEach(items =>{
    items.addEventListener('click',function(e){
        for(var i=0;i<allItems.length;i++){
            allItems[i].classList.remove("active");
        }
        this.classList.add("active")
    })
})

const sections = document.querySelectorAll('section'); // Get all sections
const allitems = document.querySelectorAll('.navmenu ul li a');


window.addEventListener('scroll', () => {
    let currentSection = null;

    for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top ;  
        const sectionBottom = sectionTop + section.offsetHeight;


    if (sectionTop<475 && sectionTop>= 0) {
        currentSection=section;
            break;
    }
    if(currentSection==null){
        if((sectionBottom+sectionTop)<951 && (sectionBottom+sectionTop)>0){
            currentSection=section;
                break;
        }
    }
    
}

    if (currentSection) {
        const sectionId = currentSection.id;

    allitems.forEach(items => {
        if (items.hash === `#${sectionId}`) {
        items.classList.add('active');
        } else {
        items.classList.remove('active');
        }
    });
    } 
});
const cards = document.querySelectorAll(".card")
const card2 = document.querySelector(".card2")
const card2p =document.querySelector(".class2p")
console.log(card2p)
cards.forEach(card =>{
    card.addEventListener('mouseover',()=>{
        card2.style.width = "7rem"
        card.style.width = "700px"
        card2p.style.opacity="0"
    })
    card.addEventListener("mouseout",()=>{
        card2.style.width="700px"
        card.style.width ="7rem"
        card2p.style.opacity="100"
    })
})
