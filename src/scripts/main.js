let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.hamburguer-menu')

menuToggle.addEventListener('click', () =>{
    document.body.style.overflow = show ? 'hidden' : 'initial'; 

    menuSection.classList.toggle('on', show)
    show = !show;
})


const observer = new IntersectionObserver(entries => {
    Array.from(entries).forEach(entry => {
        if(entry.intersectionRatio >= 0.05){
            entry.target.classList.add('init-hidden-off')
        } 
    })
  }, {
    threshold: [0, 0, 0.1]
  })
  Array.from(document.querySelectorAll('.init-hidden')).forEach(element =>{
    observer.observe(element)
  })

var coffe = document.querySelector('.cupCoffe')
var sorry = document.querySelector('.sorry')
coffe.addEventListener('click', ()=>{
  console.log('oi')
  coffe.classList.add('animationcoffe')
  sorry.classList.remove('hide')
})

let montanhaVerde = document.querySelector('.montanhaverde')
let montanhaNeve = document.querySelector('.montanhaneve')

window.addEventListener('scroll', function(){
  var value = window.scrollY


  var x = window.matchMedia("(max-width: 700px)")
  if(x.matches){
    montanhaVerde.style.top = (value +760) * 0.3 + 'px'
    montanhaNeve.style.top = (value + 170)* 0.9 + 'px'
  }else{
    montanhaVerde.style.top = (value +800) * 0.3 + 'px'
    montanhaNeve.style.top = (value + 5)* 0.9 + 'px'
  }
})