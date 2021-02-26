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
      const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchTerm}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }