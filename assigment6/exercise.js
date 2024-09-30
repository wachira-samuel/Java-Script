

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