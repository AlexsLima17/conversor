function converter(event) {
    event.preventDefault()
  
    let real = document.getElementById('real').value

    let dolar = real / 5.75

    document.getElementById('dolar').value = `${dolar.toFixed(2)} Dolar `
}