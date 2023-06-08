const shopcontent = document.getElementById("shopcontent");
const verCarrito = document.getElementById("verCarrito");
const modalcontainer = document.getElementById("modalcontainer");
// const prodEliminado = document.querySelector("");
// 
const productos=[
    {
        id:1,
        nombre:"Tinte rojo",
        precio:15,
        img:"../img/prod_TinteItalyRojo.jpg",
    },
    {
        id:2,
        nombre:"Tinte cenizo",
        precio:15,
        img:"../img/prod_TinteItaly_Rubio_Clasico_Cenizo.jpg",
    },
    {
        id:3,
        nombre:"Tinte Cobre intenso",
        precio:15,
        img:"../img/prod_TinteItaly_Rubio_Cobre_Intenso.png",
    },
    {
        id:4,
        nombre:"Tinte rojo",
        precio:15,
        img:"../img/prod_TinteItalyRojo.jpg",
    },
    {
        id:5,
        nombre:"Pulidora",
        precio:70,
        img:"../img/prod_PulidaraElectrica.jpg",
    },
    {
        id:6,
        nombre:"Tinte rojo",
        precio:15,
        img:"../img/prod_TinteItalyRojo.jpg",
    },
    {
        id:7,
        nombre:"Tinte rojo",
        precio:15,
        img:"../img/prod_TinteItalyRojo.jpg",
    },
    {
        id:8,
        nombre:"Plancha de cabello",
        precio:120,
        img:"../img/prod_PlanchaBabyliss.jpg",
    },
];
let carrito=[];

function alerta(){
    Swal.fire({
        icon: 'success',
        title: 'Eliminado',
      
      })
}
function verificarLocalStore(){
    const vercompras =JSON.parse(localStorage.getItem('compras'));
    if(vercompras!=null){
        carrito = JSON.parse(localStorage.getItem('compras'));
    }   
};
productos.forEach(product => {
    const content = document.createElement("div");
    content.className="card";
    content.innerHTML=`
    <img src="${product.img}" alt="${product.nombre}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;
    shopcontent.append(content);

    const comprar = document.createElement("button");
    comprar.innerHTML="comprar";
    comprar.className="comprar";
    content.append(comprar);
    verificarLocalStore();
    comprar.addEventListener("click",()=>{
        carrito.push({
            id:product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        actionVerCarrito();
        localStorage.setItem("compras", JSON.stringify(carrito));
    });
});

function limpiarcarrito(){
    carrito.splice(0);
    localStorage.removeItem("compras");   
}
function actionVerCarrito(){

    modalcontainer.innerHTML="";
    modalcontainer.style.display="flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "model-header";
    modalHeader.innerHTML=`<h1 class="model-header-title"> carrito </h1>`;
    modalcontainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText="X";
    modalbutton.className="modal-header-button";

    modalbutton.addEventListener("click",()=>{
        modalcontainer.style.display="none";
    });

    modalHeader.append(modalbutton);
let contador = 0;
    carrito.forEach((product)=>{
        contador++;
        const carritocontent = document.createElement("div");
        carritocontent.className="modal-content";
        carritocontent.innerHTML=`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <input type="checkbox" id="opcion-${contador}" class="ds" value="${contador}">
        `;
    modalcontainer.append(carritocontent);
    });

    const total = carrito.reduce((acc,el)=> acc +el.precio,0);
    localStorage.setItem("precio", JSON.stringify(total));
    const totalBuying =document.createElement("div");
    totalBuying.className="total_content";
    totalBuying.innerHTML= `total pagar:${total} $`;
    modalcontainer.append(totalBuying);

    const vaciarcar = document.createElement("div");
    vaciarcar.className = "content_VaciarCar";
    modalcontainer.append(vaciarcar);
    const vaciarCarButton = document.createElement("button");
    vaciarCarButton.className = "vaciarCarButton";
    vaciarCarButton.innerHTML = "Vaciar Carrito";
    vaciarCarButton.addEventListener('click',()=>{
        const checkboxes = document.querySelectorAll(".ds");
        const valoresSeleccionados = [];

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
            valoresSeleccionados.push(checkbox.value);
            }
        });
        if(valoresSeleccionados==0){
            alerta();
        limpiarcarrito();
        actionVerCarrito();
        }
        let c = valoresSeleccionados.length;
        
        if(c==1){
            carrito.splice(valoresSeleccionados,1);
            alerta();
            actionVerCarrito();
        }else{
        valoresSeleccionados.forEach(element => {
                carrito.splice(valoresSeleccionados,1);
            });
            alerta();
            actionVerCarrito();
        }
        // actionVerCarrito();
        // limpiarcarrito();
    })
    vaciarcar.append(vaciarCarButton);

}




verCarrito.addEventListener("click",()=>{
    actionVerCarrito();
});


