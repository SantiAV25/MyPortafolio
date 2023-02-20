//#region Atributos
let ZonaDeCartas = document.getElementById('CartasZoneProyects');
let CartasColumnasInicio = document.getElementsByClassName('CartasColumnas');
let InfoZoneProyects = document.getElementById('InfoZoneProyects');
let ArrayDatos = [{Titulo: 'Gym', Descripcion: 'An App That I made for de register of a gym', link:'https://github.com/Pablo736/Gym', direccionFoto:'deadLiftIcone.png'},
                {Titulo: 'Perfume', Descripcion: 'An App That I made for an Perfumery', link:'https://github.com/Pablo736/Gym', direccionFoto:'PerfumeIcone.png'}];
let WaitingIconeDirreccion = "waitingIcone.png";
//#endregion
function deleteCartasColumnas(){
        while(CartasColumnasInicio.length > 0)
        {
            CartasColumnasInicio[0].parentNode.removeChild(CartasColumnasInicio[0]);
        }

        var DocumentoCartasColumnas = document.createElement("div");
        DocumentoCartasColumnas.setAttribute("class","CartasColumnas");
        ZonaDeCartas.insertAdjacentElement("beforeend",DocumentoCartasColumnas);

        CreateCartasColumnasClass(2);

        let CartasColumnas = document.getElementsByClassName("CartasColumnas");
        MixArray(ArrayDatos);
        CreacionDeLogos(CartasColumnas,2);



        
}

//#region MezclarLosElementos


function CreateCartasColumnasClass(a)
{
    while(a > 0){
        var DocumentoCartasColumnas = document.createElement("div");
        DocumentoCartasColumnas.setAttribute("class","CartasColumnas");
        ZonaDeCartas.insertAdjacentElement("beforeend",DocumentoCartasColumnas);
        a = a - 1;
    }
        
}

function CreacionDeLogos(CartasColumnas, cantidad){
        validacion = false;

    for (let index2 = 0; index2 < cantidad; index2++) {
        for (let index = 0; index < 3; index++) {
            if(ArrayDatos.length > index && !validacion){
                var nuevaClaseCartas = document.createElement("div");
                nuevaClaseCartas.setAttribute("class","Cartas");
                nuevaClaseCartas.innerHTML = `<img src="Iconos/${ArrayDatos[index].direccionFoto}" onclick="Informacion('${ArrayDatos[index].Titulo}','${ArrayDatos[index].Descripcion}','${ArrayDatos[index].link}')">`;
                CartasColumnas[index2].insertAdjacentElement("beforeend",nuevaClaseCartas);                
            }else{
                validacion = true;
                var nuevaClaseCartas = document.createElement("div");
                nuevaClaseCartas.setAttribute("class","Cartas");
                nuevaClaseCartas.innerHTML = `<img src="Iconos/${WaitingIconeDirreccion}">`;
                CartasColumnas[index2].insertAdjacentElement("beforeend",nuevaClaseCartas);   
            }
                            
        }
        
        
    }

}

function MixArray(Array){
    
        for (let i = Array.length - 1; i > 0; i--) {
            let indiceAleatorio = Math.floor(Math.random() * (i + 1));
            let temporal = Array[i];
            Array[i] = Array[indiceAleatorio];
            Array[indiceAleatorio] = temporal;
        }
    
    }

//#endregion

//#region Zona De InfomracionDeProyectos
function Informacion(Titulo,Descripcion,Link)
{
    InfoZoneProyects.innerHTML = "";

    var ElementoInformacion = document.createElement("div");
    ElementoInformacion.setAttribute("id","Informacion");
    ElementoInformacion.innerHTML = `<h3>${Titulo}</h3>
                                    <p>${Descripcion}</p>
                                    <a href="${Link}">${Link}</a>
                                    <button class="btn btn-outline-success btn-lg" onclick="botonVolverInfo()">Volver</button>`;
    InfoZoneProyects.insertAdjacentElement("beforeend",ElementoInformacion);

}

function botonVolverInfo(){
    InfoZoneProyects.innerHTML = `<button type="button" class="btn btn-outline-success btn-lg" onclick="deleteCartasColumnas()">Mix it</button>
    <button type="button" class="btn btn-outline-success btn-lg">pick One</button>`;
}

//#endregion
