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
                    <button onclick="getMovieId('${element.id}')" class="btn btn-primary" > + MORE</button>
                  </div>
               </div>`
                      });
                 
                    })
                
  
                  }

  function getMovieId(id){
      sessionStorage.setItem('movie_id', element.id);
      window.location = 'movie.html';
      return false;
    }
 
    /**Pagination */

  const obj = [{N1, N2, N3, N4, N5}]
    var current_page = 1;
    var obj_per_page = 3;
  function totNumPages(){
      return Math.ceil(obj.length / obj_per_page);
                  }         
  function prevPage(){
      if (current_page > 1) {
          current_page--;
          change(current_page);}
      }
  function nextPage(){
      if (current_page < totNumPages()) {
          current_page++;
          change(current_page);}
      }
  function change(page){
      var btn_next = document.getElementById("btn_next");
      var btn_prev = document.getElementById("btn_prev");
      var listing_table = document.getElementById("TableList");
      var page_span = document.getElementById("page");
          if (page < 1) page = 1;
          if (page > totNumPages()) page = totNumPages();
            listing_table.innerHTML = "";
              for (var i = (page-1) * obj_per_page; i < (page * obj_per_page); i++) {
              listing_table.innerHTML += obj[i].number + "<br>";
                      }
            page_span.innerHTML = page;
              if (page == 1) {
              btn_prev.style.visibility = "hidden";
                } else {
              btn_prev.style.visibility = "visible";
                      }
              if (page == totNumPages()) {
              btn_next.style.visibility = "hidden";
                } else {
              btn_next.style.visibility = "visible";
                      }
                  }

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