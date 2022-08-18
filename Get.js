import fetch from "node-fetch"

function makeApiCall(){
    fetch("https://demo7303877.mockable.io/",{method:"GET"}).then((res)=>{
        let promise = res.json();
        promise.then((result)=>{
            console.log(result);
        })
    })
}

makeApiCall();