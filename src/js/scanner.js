const img = document.getElementById('img')
const input = document.getElementById("file")
const result = document.getElementById('prediction')
const linkElement = document.getElementById("qrcodeLink")

const garrafaWhiteList = ["water bottle", "whistle", "flatworm, platyhelminth", "pop bottle", "soda bottle", "pop bottle, soda bottle", "ballpoint, ballpoint pen, ballpen, Biro", "wine bottle", "water jug"]
const sacolaWhiteList = ["bullet proof vest", "plastic bag", "binder", "ring-binder", "switch", "electric switch", "electrical switch", "shopping basket", "beaker", "punching bag", "punch bag", "punching ball", "punchball", "mailbag", "postbag"]
const balinhaWhiteList = ["packet", "Band Aid", "sandal", "crayfish, crawfish, crawdad, crawdaddy", "lighter, light, igniter, ignitor", "shower cap"]

let model
let classifier
linkElement.style.display = "none"

input.onchange = () => {
    classifier = ml5.imageClassifier('MobileNet')
    img.src = URL.createObjectURL(input.files[0])
    result.innerText = "Analisando..."
    linkElement.style.display = "none"
}

img.onload = () => {
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
      console.error(error)
    }
    showPrediction(results)
  }

function showPrediction(results) {
    if (garrafaWhiteList.includes(results[0].label) || garrafaWhiteList.includes(results[1].label)) {
      result.innerText = "Garrafa Pet"
      linkElement.style.display = "block"
    } else {
      console.log(results[0].label, results[1].label)
      result.innerText = "Objeto não indentificado. Tente novamente."
    }
    if (sacolaWhiteList.includes(results[0].label) || sacolaWhiteList.includes(results[1].label)){
      result.innerText = "Sacola Plástica"
      linkElement.style.display = "block"
    } else {
      console.log(results[0].label, results[1].label)
      result.innerText = "Objeto não indentificado. Tente novamente."
    }
    if (balinhaWhiteList.includes(results[0].label) || balinhaWhiteList.includes(results[1].label)){
      result.innerText = "Papel de Bombom"
      linkElement.style.display = "block"
    } else {
      console.log(results[0].label, results[1].label)
      result.innerText = "Objeto não indentificado. Tente novamente."
    }
}