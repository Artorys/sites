function carregar(){
    var relogio = window.document.getElementById(`relogio`)
    var img = window.document.getElementById(`gif`)
    var tempo = window.document.getElementById(`tempo`)
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    relogio.innerHTML = `${hora}:${minuto}:${segundo}`
    if (hora >= 0 &&  hora <12 )
    {
      img.src =  "nascerdosol.gif"
      tempo.innerText = `Bom dia`
      window.document.body.style.backgroundColor = `#E09F6E`
      
    }
    else if (hora >= 12 && hora< 18)
    {
        img.src = "entardecer.gif"
        tempo.innerText = `Boa tarde`
        window.document.body.style.backgroundColor = `#D88F12`
    }
    else
    {
        img.src = "lady-walking.gif"
        tempo.innerText = `Boa noite`
        window.document.body.style.backgroundColor = `#000000`
    }
}
