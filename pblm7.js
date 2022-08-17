function getHashTags(title) {
    const arr = title.split(" ");
    const asc = arr.sort((a,b) => b.length - a.length);
    const hashtag = [];
    let n = asc.length<=3 ? asc.length:3
    {
        for(let i=0;i<3;i++){
            let c = '#' + asc[i];
            hashtag.push(c);
        }
        console.log(hashtag)
    }
}    

getHashTags("How the Avocado Became the Fruit of the Global Trade")