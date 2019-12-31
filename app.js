$(()=>{

    axios.get("https://api.imgflip.com/get_memes").then((result)=>{
    result.data.data.memes.forEach(element => {
        $('body').append(`<div id="${element.id}"></div>`)
        $(`#${element.id}`).append(`<p>${element.name}</p>
        <img width="${element.width}px" height="${element.height}px" src="${element.url}"/>`)
    });
})
})