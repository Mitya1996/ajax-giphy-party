console.log("Let's get this party started!");

const api_key = 'BXOztdBn3GDpzq1xuPcimuRNtN6SHQ4s';

$('form').on('submit', function(e){
    e.preventDefault();
    let searchTerm = $(this).children()[0].value;
    console.log(searchTerm)
    getGif(searchTerm);
})

async function getGif(searchTerm) {
    try {
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${ api_key }&q=${ searchTerm }`);
      console.log(response.data.data);
      appendGif(response);
    } catch (error) {
      console.error(error);
    }
  }

function appendGif(response){
    let gifList = response.data.data;
    let gifListLength = Object.keys(gifList).length;
    let randomNum = Math.floor(Math.random() * gifListLength);
    let randomGifUrl = gifList[randomNum].images.original.url;
    $('#gifList').append($('<img>', {src: randomGifUrl}));
}