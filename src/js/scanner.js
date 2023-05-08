const img = document.getElementById('img');
const input = document.getElementById("input-file")
const result = document.getElementById('prediction');

let model;
let classifier;

input.onchange = () => {
    classifier = ml5.imageClassifier('MobileNet');
    img.src = URL.createObjectURL(input.files[0])
    result.innerText = "Analisando..."
}

img.onload = () => {
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    showPrediction(results);
  }

function showPrediction(results) {
    result.innerText = results[0].label;
}