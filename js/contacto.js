function enviarCorreo(nom,cor,cel){
    fetch("https://formsubmit.co/ajax/148e9ec8625740283d6aa2672f1d5542", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: nom,
            correo:cor,
            celular:cel,
            message: verificar_Carrito_Compras()
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    
    }
function confirmado(){
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu Solicitud de pedido a sido enviada',
    showConfirmButton: false,
    timer: 1500
  })
}
function estavacio(){
 Swal.fire({
        icon: 'error',
        title: 'Falta completar formulairo',
      
      })
}
// function enviarCompras(){
//     const carrito_Compras = []; 
//     carrito_Compras = JSON.parse(localStorage.getItem('compras'));
//     console.log(carrito_Compras);
// } 

// enviarCompras();


function cambioDeNombre(){
    const verCompras =JSON.parse(localStorage.getItem('compras'));

    if(verCompras!=null){
       const CambioNombre = document.querySelector(".form__title") 
        CambioNombre.innerHTML="HACER PEDIDO";
    }
}
cambioDeNombre();


const verCompras =[];
let datos="";
function verificar_Carrito_Compras(){
    const verCompras =JSON.parse(localStorage.getItem('compras'));
    
    if(verCompras!=null){
            let cantidadObjetos=verCompras.length;
        if(cantidadObjetos==1 &&cantidadObjetos>=1 && cantidadObjetos<=1){
            datos = "Producto: " + verCompras[0].nombre + ", Edad: " + verCompras[0].precio;
        }else{
            verCompras.forEach(function(pro){
                datos += "Producto: "+pro.nombre+"------->"+"Precio: "+pro.precio+"\n";
                
            });
        }

    }else{
        datos = "Solicita que lo contacten para poder hacer compras"
    }    
    return datos
};

console.log(verificar_Carrito_Compras());


function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
       const nombreInput =document.getElementById("name");
        const celularInput = document.getElementById("celular");
        const correoInput = document.getElementById("correo");
class persona{
    constructor(nombre,celular,correo){
        this.nombre=nombre;
        this.celular=celular;
        this.correo=correo;
    }
    sorteoDescuento(){
        let numeroAleatorio = generarNumeroAleatorio(1, 10);
        console.log(numeroAleatorio);
    }
    static agregardatos(nombreid,celularid,correoid){
        let nom = nombreInput.value;
        let cel = parseInt(celularInput.value);
        let cor = correoInput.value;
        return new persona(nom,cel,cor);
    }
    static limpiarInput(){
    nombreInput.value='';
    celularInput.value='';
    correoInput.value='';
    }
}
document.getElementById("boton").addEventListener("click",function(event){
    event.preventDefault();
     const personas = persona.agregardatos('nombreInput','celularInput','correoInput');
    
    const {nombre,celular,correo}=personas;
     console.log(nombre)
    if(nombre=='' || celular==='' || correo===''){
        estavacio();
    }else{
    setTimeout(() => {
    localStorage.removeItem("User","celular","correo");
    localStorage.setItem("User", JSON.stringify(nombre));
    localStorage.setItem("celular", JSON.stringify(celular));
    localStorage.setItem("correo", JSON.stringify(correo));
    enviarCorreo(nombre,correo,celular);
    persona.limpiarInput();

   }, 1000);
    confirmado(); 
    }
})    

function limpiararray(array){
    array.pop();
}




