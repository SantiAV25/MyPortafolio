let ZonaDeCartas = document.getElementById('CartasZoneProyects');
let CartasColumnasInicio = document.getElementsByClassName('CartasColumnas');
let ArrayDirreciones = ["deadLiftIcone.png","PerfumeIcone.png","waiatingIcone.png"];
function deleteCartasColumnas(){
        while(CartasColumnasInicio.length > 0)
        {
            CartasColumnasInicio[0].parentNode.removeChild(CartasColumnasInicio[0]);
        }

        var DocumentoCartasColumnas = document.createElement("div");
        DocumentoCartasColumnas.setAttribute("class","CartasColumnas");
        ZonaDeCartas.insertAdjacentElement("beforeend",DocumentoCartasColumnas);

        let CartasColumnas = document.getElementsByClassName("CartasColumnas");
        
        ArrayDirreciones.forEach(element => {
            var nuevaClaseCartas = document.createElement("div");
            nuevaClaseCartas.setAttribute("class","Cartas");
            nuevaClaseCartas.innerHTML = `<img src="Iconos/${element}">`;
            CartasColumnas[0].insertAdjacentElement("beforeend",nuevaClaseCartas);

        });

        
}