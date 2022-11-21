const divContainer = document.querySelector(".content-chat");

const buttonHi = document.getElementById("choice-one");
const buttonAbout = document.getElementById("choice-two");
const buttonContact = document.getElementById("choice-three");


buttonHi.addEventListener('click', () =>{
  divContainer.insertAdjacentHTML('beforeend',
  `<p class="text-chat-rigth" id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)
  
  setTimeout(() =>{
     divContainer.removeChild(divContainer.lastChild)
  },1000)

  setTimeout(() =>{
     divContainer.insertAdjacentHTML('beforeend',
  `<p class="text-chat-rigth">I just want to say Hi!</p>`)
  },1000)
  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
  `<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)
  
  },1000)
  
  setTimeout(() =>{
     divContainer.removeChild(divContainer.lastChild)
  },3000)

 
  setTimeout(() =>{
      divContainer.insertAdjacentHTML('beforeend',
  `<p>Helloooo! Thanks for get in my portfolio!</p>`)
  },3000)

  buttonHi.disabled = true
  buttonHi.style.display = 'none';
})


buttonAbout.addEventListener('click', () =>{
  divContainer.insertAdjacentHTML('beforeend',
  `<p class="text-chat-rigth" id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)
  
  setTimeout(() =>{
     divContainer.removeChild(divContainer.lastChild)
  },1000)

  setTimeout(() =>{
      divContainer.insertAdjacentHTML('beforeend',
  `<p class="text-chat-rigth">Please, tell me more about Felipe's programing skills!</p>`)
  }, 1000)

  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
  `<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)
  
  },1000)
  
  setTimeout(() =>{
     divContainer.removeChild(divContainer.lastChild)
  },3000)

  setTimeout(() =>{
     divContainer.insertAdjacentHTML('beforeend',
  `<p>Yeah, Sure!</p>`)
  },3000)

  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
  `<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)
  
  },3000)
  
  setTimeout(() =>{
     divContainer.removeChild(divContainer.lastChild)
  },5000)

  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
  `<p>Soo, he started programing in January 2022, his first contact with programing was doing simple things in Python, but now he really loves to program with JavaScript.</p>`)
  },5000)
  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
  `<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)
  
  },5000)
  
  setTimeout(() =>{
     divContainer.removeChild(divContainer.lastChild)
  },10000)
  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
   `<p>To learn better, he likes to be chalenged. For example, he set it a goal to create me and create this entire chat without asking help for google or another developer. Preaty cool, right?</p>`)

  },10000)
  
  buttonAbout.disabled = true
  buttonAbout.style.display = 'none';
})

buttonContact.addEventListener('click', () =>{
  divContainer.insertAdjacentHTML('beforeend',
  `<p class="text-chat-rigth" id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)

  setTimeout(() =>{
    divContainer.removeChild(divContainer.lastChild)
  },1000)
  setTimeout(() =>{
    divContainer.insertAdjacentHTML('beforeend',
 `<p class="text-chat-rigth">So, where I can find Felipe?</p>`)
 },1000)

 setTimeout(() =>{
  divContainer.insertAdjacentHTML('beforeend',
`<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)

},1000)

setTimeout(() =>{
   divContainer.removeChild(divContainer.lastChild)
},3000)
setTimeout(() =>{
  divContainer.insertAdjacentHTML('beforeend',
`<p>You can find him on his LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/felipe-repker-2937b0122/">https://www.linkedin.com/in/felipe-repker-2937b0122/</a></p>`)
},3000)
setTimeout(() =>{
  divContainer.insertAdjacentHTML('beforeend',
`<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)

},3000)

setTimeout(() =>{
   divContainer.removeChild(divContainer.lastChild)
},6000)
setTimeout(() =>{
  divContainer.insertAdjacentHTML('beforeend',
`<p>Or his GitHub: <a target="_blank" href="https://github.com/feliperepker">https://github.com/feliperepker</a></p>`)
},6000)
setTimeout(() =>{
  divContainer.insertAdjacentHTML('beforeend',
`<p id="loading"><span id="span1">.</span><span id="span2">.</span><span id="span3">.</span></p>`)

},6000)

setTimeout(() =>{
   divContainer.removeChild(divContainer.lastChild)
},9000)
setTimeout(() =>{
  divContainer.insertAdjacentHTML('beforeend',
`<p>Or you can send him a email in: <strong>felipe.repker@gmail.com</strong></p>`)
},9000)

  buttonContact.disabled = true
  buttonContact.style.display = 'none';
})
