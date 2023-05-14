const img = document.getElementById('img')
const input = document.getElementById("file")
const result = document.getElementById('prediction')

const garrafaWhiteList = ["water bottle", "whistle", "flatworm, platyhelminth", "pop bottle", "soda bottle", "pop bottle, soda bottle", "ballpoint, ballpoint pen, ballpen, Biro", "wine bottle", "water jug"]

let model
let classifier

input.onchange = () => {
    classifier = ml5.imageClassifier('MobileNet')
    img.src = URL.createObjectURL(input.files[0])
    result.innerText = "Analisando..."
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
    } else {
      result.innerText = results[0].label
    }
}