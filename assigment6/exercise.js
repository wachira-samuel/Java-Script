// const { JSDOM } = require('jsdom');

// // Create a new JSDOM instance
// const dom = new JSDOM(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div class="container"></div>
// </body>
// </html>`);

// // Access the document from the JSDOM instance
// const document = dom.window.document;
// const container = document.querySelector('.container');
// fetch('http://localhost:3000/products')
// .then((response) => response.json() )
// .then((data) => {
//     console.log(data);
    
//     let output = ''
//     //output ndio tuna append kwa container
//     data.forEach((item) => {

//         const { id, imageUrl, title, price, date, location, company } = item
//         output += `
//             <div class="item">
//                 <img src="${imageUrl}" alt="Food image"/>
//                 <h2 class="container__title">${title}</h2>
//                 <h3 class="container__price">Kshs. ${price}</h3>
//                 <p class="container__date">${date}</p>
//                 <p class="container__location">${location}</p>
//                 <p class="container__company">${company}</p>

//                 <div class="item__buttons">
//                     <button>Buy Now</button>
//                     <button>Add To My Favorites</button>
//                 </div>
//             </div>
//         `
//         container.innerHTML = output
//     })
// } )
// .catch(error => {
//     console.log(error.message);
// })


const button=document.querySelector('#sendButton')
button.addEventListener("click",fetchData)

async function fetchData (){
    const response= await fetch('http://localhost:3000/products')
    if (!response.ok){
        console.log('response was not okay');
        
    }
    else{
        console.log(response)
        const data = await response.json()
        console.log(data)
    }

    

}