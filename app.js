function converter(event) {
    event.preventDefault()
  
    let real = document.getElementById('real').value
    let cotacao = document.getElementById('cotacao').value
    let dolar = real / cotacao
    

    document.getElementById('dolar').value = `${dolar.toFixed(2)} Dolar `
}