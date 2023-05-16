const scanner = new Html5QrcodeScanner('leitor', { 
    qrbox: {
        width: 250,
        height: 250,
    },
    fps: 20,
});

scanner.render(success, error);

function success(result) {
    if (result == "lixeiraCoticoOk"){
        document.getElementById('resultado').innerText = "Reciclagem Realizada." 
        scanner.clear();
        document.getElementById('reader').remove();
    }else{
        document.getElementById('resultado').innerText = "QR Code invalido! Tente novamente."
    }
}

function error(err) {
    console.error(err);
    // Prints any errors to the console - document.getElementById('lixeiraID').innerHTML = `<p><a src="${result}">${result}</a></p>`
}