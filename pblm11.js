let filterarr = bookList.filter((e) => e.stock != 0)
filterarr.map((e)=>{
    console.log(JSON.stringify(e,(key,value)=>key ==="stock"?undefined:value));
})