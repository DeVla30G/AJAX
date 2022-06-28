/*document.getElementById("searchText").addEventListener("keyup", function(e) {
    let searchTextValue = document.getElementById("searchText").value;
    if (e.keyCode === 13) {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `http://localhost:3000/api/movies=${searchTextValue}`,
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
          document.getElementById("movies").innerHTML = output;
        }
      };
      
    }
  });
  
  function movieSelected(id) {
    sessionStorage.setItem("movieId", id);
    window.location = "movie.html";
  
    return false;
  }*/

window.onload = function(){

    let searchText = document.getElementsByTagName("input")[0];
    let searchBtn = document.getElementsByTagName("button")[0];
    
          function movieSelected(id) {
            sessionStorage.setItem("movieId", id);
            window.location = "movie.html";
          
            return false;
          }

            //let valueR = searchText.value;

            fetch('http://localhost:3000/api/movies')
                .then(response => { console.log(response);  return response.json();  })
                .then((data) => { 
                    console.log(data.movies)
                let resultM = data.movies
                console.log(resultM, 'HERE')
                   let result = document.getElementById('results');
                   let synopsis = document.getElementById('info');

                        for (let i=0; i<=50; i++){
                        let movie_title = data.movies[i].title;
                        let lib = data.movies[i].prod_year;
                        let info = data.movies[i].summary;
                        let N = 1;
                            console.log(info)
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