const sections = document.querySelectorAll('.section');

const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');

const allSections = document.querySelector('.main-content');

function pageTransition() {
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function(){
            let currentBtn =  document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', ' ');
            this.className += ' active-btn';
        })
    }

    //  Sectionsactive calsses

    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;

        if(id){
            // remove selected btns
            secBtns.forEach((btn)=>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // hide other sections  
            sections.forEach((section)=>{
                section.classList.remove('active');
            });

            // set ID
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

    // toggle theme-btn

    const themeBtn = document.querySelector('.theme-bnt');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

pageTransition()