document.getElementById("jogadorForm").addEventListener("submit", function(e) {
    e.preventDefault()

    const nome = document.getElementById("jogador").value

    if (nome === "Izaque") {
        window.location.href = "./inicioSistema/inicio.html"
        
    }else {
        window.alert("Jogador não existe")
    }
})