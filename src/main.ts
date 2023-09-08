const button = document.getElementById("btn")! as HTMLButtonElement

button.addEventListener("click", (e)=> {
  const btnTarget = e.target
  if(btnTarget) {
    let offsetLeft = (btnTarget as HTMLButtonElement).offsetLeft
    // Para no olvidarme, client hace referencia a la posicion en el cliente y offset a la posicion en el boton
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetLeft
    
    const ripple = document.createElement("span")
    ripple.style.left =`${x}px`
    ripple.style.right =`${y}px`
    
    button.appendChild(ripple)


    setTimeout(()=> {
      ripple.remove()
    }, 500)
   
    
   
    
  }
  

  
})