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
  const anchor = document.querySelector('.stars');
  const astronaut = document.querySelector('.last-astronaut')
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;

document.addEventListener('mousemove', (e) =>{
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

 
  astronaut.style.transform = `rotate(${ angleDeg}deg)`;
})

function angle(cx, cy, ex, ey){
  const dy = ey - cy;
  const dx = ex - cx;
  const rad =Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}

let montanhaVerde = document.querySelector('.montanhaverde')
let montanhaNeve = document.querySelector('.montanhaneve')

window.addEventListener('scroll', function(){
  var value = window.scrollY

  montanhaVerde.style.top = (value + 1000) * 0.2 + 'px'
  montanhaNeve.style.top = (value + 900)* 0.1 + 'px'
})