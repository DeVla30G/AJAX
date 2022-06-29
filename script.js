window.onload = function(){

    let searchText = document.getElementsByTagName("input")[0];
    let searchBtn = document.getElementsByTagName("button")[0];
    let box = document.getElementById('results');
    let output = "";
    let myInputValue = document.getElementById("myInput").value;


  fetch('http://localhost:3000/api/movies')
      .then(response => { 
          console.log(response);  
          return response.json();  })
      .then((data) => { 
          console.log(data.movies)
      const resultM = data.movies

      resultM.slice(0, 20).forEach(element => {
              console.log(element)
              console.log(element.title)
              console.log(element.prod_year)
              console.log(element.id)
              results.innerHTML +=    
              `<div class="result">
                  <div class="well text-center">
                    <h3>${element.title}</h3>
                    <p>${element.summary}</p>
                    <p>Production: ${element.prod_year}</p>
                    <a onclick="getMovieId('${element.id}')" class="btn btn-primary" >Movie Details</a>
                  </div>
               </div>`
                      });
                    })

  
                  }

    function getMovieId(id){
      sessionStorage.setItem('movie_id', id);
      window.location = 'movie.html';
      return false;
    }
  
        //box.innerHTML = (txt.slice(txt.length - 42));

            //let valueR = searchText.value;

       
                    
/*

       fetch('http://localhost:3000/api/movies')
                .then(response => { 
                    console.log(response);  
                    return response.json();  })
                .then((data) => { 
                    console.log(data.movies)
                let resultM = data.movies
                console.log(resultM, 'HERE')


                        /*for (let i=0; i<=50; i++){
                        let movie_title = data.movies[i].title;
                        let lib = data.movies[i].prod_year;
                        let info = data.movies[i].summary;
                        let movie_id = data.movies[i].id;
                        console.log(movie_id)
                        let N = i;
                       // sessionStorage.setItem("movieId", data.movies[i].id);
                 result.innerHTML += movie_title + " - " + lib + "<br>";
                }
                }); */