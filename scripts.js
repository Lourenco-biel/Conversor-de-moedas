const button = document.getElementById(`convert-button`)
const select = document.getElementById(`currency-select`)


const convertValues = async () => {
    const inputReais = document.getElementById(`input-real`).value
    const realvaluetext = document.getElementById(`real-value-text`)
    const currencyvaluetext = document.getElementById(`currency-value-text`)

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())


    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bit = data.BTCBRL.high


    realvaluetext.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar Americano") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    } else if (select.value === "Є Euro") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    } else if (select.value === "Bitcoin") {
        currencyvaluetext.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputReais / bit)
    }
}
const changeCurrency = () => {
    const currencyName = document.getElementById(`currency-name`)
    const currencyImg = document.getElementById(`currency-Img`)

    if (select.value === `US$ Dólar Americano`) {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/EstadosUnidos.svg"
    }

    if (select.value === `Є Euro`) {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/Euro.svg"
    }

    if (select.value === `Bitcoin`) {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bit.png"
    }
    convertValues()
}

button.addEventListener(`click`, convertValues)
select.addEventListener(`change`, changeCurrency)