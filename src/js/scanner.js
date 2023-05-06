input = document.querySelector(".input-div input")

input.addEventListener("change", () => {
    const file = input.files
    const classifier = ml5.imageClassifier('MobileNet', setup);

    function setup(){
        console.log('setup OK!')
        console.log(file[0])
    }

    classifier.classify(file[0], (err, results) => {
        console.log(results);
    });
})
