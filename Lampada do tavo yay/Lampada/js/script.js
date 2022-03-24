let int = document.createElement("img");
int.src="img/interruptor_10.png";
document.body.appendChild(int).style.height = "32vw"
let lampada = document.createElement("img");
lampada.src="img/lampada_off.png";
document.body.appendChild(lampada).style.margin = "0% 0% 0% 25%"
document.body.style.backgroundColor = "#000";
let estado = "off";
int.onclick = function() {
    if (estado === "on"){
    int.src = "img/interruptor_1.png";
    lampada.src = "img/lampada_on.png";
    document.body.style.backgroundColor = "#fff";   
    }
    else{
    int.src = "img/interruptor_10.png";
    lampada.src = "img/lampada_off.png";
    document.body.style.backgroundColor = "#000";   
    }
    teste();
    } 
    function teste() {
        estado === "off" ? estado = "on" : estado = "off";
        return estado;
    }
    