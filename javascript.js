function carregar(){
    var relogio = window.document.getElementById(`relogio`)
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    relogio.innerHTML = `${hora}:${minuto}:${segundo}`
}
