//declare variables
const form = document.querySelector('#generator');
const memeContainer = document.querySelector('#memeContainer');
const button = document.querySelector('#btn');
let imgUrl = document.querySelector('#link');
let topText = document.querySelector('#topText');
let bottomText = document.querySelector('#bottomText');

console.log(imgUrl);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //creates the new elements for the meme container
    let newDiv = document.createElement('div');
    let divImg = document.createElement('img');
    let memeTopText = document.createElement('p');
    let memeBotText = document.createElement('p');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Delete Meme';

    //sets text and image for complete meme
    memeTopText.innerText = topText.value;
    memeBotText.innerText = bottomText.value;
    divImg.src = imgUrl.value;



    //appends the new divs and images to container
    newDiv.prepend(memeTopText);
    newDiv.append(divImg);
    newDiv.append(memeBotText);
    memeContainer.append(newDiv);
    memeContainer.append(removeBtn);


    //logs for debugging
    console.log(divImg);
    console.log(newDiv);
    console.log(memeContainer);


    //resets form
    document.querySelector('#generator').reset();
});

//Remove button
memeContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.previousElementSibling.remove();
        e.target.remove();
    }
});

