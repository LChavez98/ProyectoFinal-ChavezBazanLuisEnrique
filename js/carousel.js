let info = document.querySelector("#info");



const getElementos =async()=>{
try {
    const res = await fetch('carousel.json');
    if (!res.ok) {
        throw{ok: false ,msg:"error 404"}
    }
    const data = await res.json();
    console.log(data);
    data.map((item)=>{
        const spaceInfo = document.createElement("div");
        spaceInfo.className=`carousel-item ${item.activar}`;
        spaceInfo.innerHTML=`
        <img src="${item.imagen}" class="d-block w-100 dimencion" alt="${item.nombre}">
        
        `;
        info.append(spaceInfo);
    })

} catch (error) {
    console.log(error);
}

}
getElementos();
// const fechCarousel = async()=>{
//     const res = await fetch('carousel.json');
//     const data = await res.json();
//     console.log(data);
//     data.map((item)=>{
//         const spaceInfo = document.createElement("div");
//         spaceInfo.className=`carousel-item ${item.activar}`;
//         spaceInfo.innerHTML=`
//         <img src="${item.url} class="d-block w-100 dimencion" alt="">
        
//         `;
//         info.append(spaceInfo);
//     })

// };


// function cargarCarousel(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             fechCarousel();
//             resolve();

//             reject("ocurrio un error")
//         }, 2000);

//     })
// }
// async function res (){
//     try {
//         cargarCarousel();
//         console.log("promesa resuelta con exito");
//     } catch (e) {
//         console.log(e);
//     }
// }
// res();