const button = document.getElementById("btn")! as HTMLButtonElement

button.addEventListener("click", (e)=> {
  const btnTarget = e.target
  if(btnTarget) {
    let offsetLeft = (btnTarget as HTMLButtonElement).offsetLeft
    let offsetTop = (btnTarget as HTMLButtonElement).offsetTop
    // Para no olvidarme, client hace referencia a la posicion en el cliente y offset a la posicion en el boton
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetTop
    
    
    
    const ripple = document.createElement("span")
    ripple.style.left =`${x}px`
    ripple.style.top =`${y}px`
    
    
    button.appendChild(ripple)


    setTimeout(()=> {
      ripple.remove()
    }, 500)
   
    
   
    
  }
  

  
})