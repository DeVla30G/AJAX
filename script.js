window.onload = function(){

    let searchText = document.getElementsByTagName("input")[0];
    let searchBtn = document.getElementsByTagName("button")[0];
   


            //let valueR = searchText.value;

            fetch('http://localhost:3000/api/movies')
                .then(response => { console.log(response);  return response.json();  })
                .then((data) => { 
                    console.log(data.movies)
                
                   let result = document.getElementById('results');

                        for (let i=0; i<=50; i++){
                            console.log(data.movies[i])
                        let movie_title = data.movies[i].title;
                        let lib = data.movies[i].prod_year;
                        let N = 1;
                            
                 result.innerHTML += N + movie_title + " - " + lib + "<br>";
                }
                
                });      
                    
}


/*document.getElementById("myInput").addEventListener("keyup", function(e) {
    let myInputValue = document.getElementById("myInput").value;
    if (e.keyCode === 13) {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `http://localhost:3000/movies/${myInputValue}`,
        true );
      xhr.send();
      xhr.onload = function() {
        if (xhr.status === 200) {
          
          let output = "";
          console.log(JSON.parse(xhr.responseText));
          let data = JSON.parse(xhr.responseText);
          if(data.Error) {
              output += `<h3 class="text-center">No Record Found</h3>`;
        }else {
          data.Search.forEach((element) => {
            output += `
                         <div class="col-md-3">
                             <div class="well text-center">
                                 <img src="${element.Poster}">
                                 <h5>${element.Title}</h5>
                                 <a onclick="movieSelected('${element.imdbID}')" class="btn btn-primary" >Movie Details</a>
                             </div>
                         </div>
                         `;
          });
      }
          document.getElementById("results").innerHTML = output;
        }
      };
      
    }
  });
  
  function movieSelected(id) {
    sessionStorage.setItem("movieId", id);
    window.location = "movie.html";
  
    return false;
  }*/