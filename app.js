// http://www.omdbapi.com/?apikey=[a6a35b27]&"



async function main(movieName){
    
    const moviesUrl =`https://www.omdbapi.com/?i=tt3896198&apikey=a6a35b27&s=${movieName}`;
    const res = await fetch(`${moviesUrl}`)
    const moviesData = await res.json();
    console.log(moviesData)
    
}

main('hyper');