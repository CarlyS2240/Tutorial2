document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    displayMeme(); //new
}

//YOLO
async function displayMeme(){
    try{
        const response = await
        fetch("https://api.imgflip.com/get_memes");
        const jsonResponse = await response.json();
        //required
        console.log(jsonResponse);
        const meme = jsonResponse.data.memes[7];

        const image = document.createElement("img");
        image.src = meme.url;
        image.alt = meme.name;
        image.width = 200;

        const memeContainer = document.querySelector("#meme");
        memeContainer.appendChild(image);
    } catch (error){
        console.log("Promise failed", error);
    }

}