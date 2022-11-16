'use strict';

const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

// get reference to DOM elements
const form = document.querySelector('#search-form');
const button = form.querySelector('button'); //choosing specific button from 'form'
const input = form.querySelector('input');
const results = document.querySelector('#results')

button.addEventListener('click', (event) => {
   //prevents submitting form to anywhere(no page refresh)
   event.preventDefault();
   //preventinng generic event listener at the bottom
   event.stopPropagation();

   if(input.value.length > 1) {
      getTVSeriesData(input.value)
   }
});

const renderResults = (data) => {
   // clear existing result before appending new result
   results.innerHTML = '';

   for(let i = 0; i < data.length; i++){

      const h3 = document.createElement('h3');
      h3.textContent = data[i].show.name;

      const h4 = document.createElement('h4');

      const img = document.createElement('img');

      const genres = (data[i].show.genres != null) ? "Genre: " + data[i].show.genres.join(" | ") + "<br>" : "N/A" + "<br>" ;
      const summary = (data[i].show.summary != null) ? data[i].show.summary + "<br>" : "N/A" + "<br>" ;
      const url = (data[i].show.officialSite != null) ? "URL: "+ (data[i].show.officialSite) + "<br>" : "N/A" + "<br>" ;

      h4.innerHTML = genres + summary + url;

      if(data[i].show.image != null){
         img.src = data[i].show.image.medium ;
      }else{
         img.src = "http://placekitten.com/321/241";
      }
      results.append(h3);
      results.append(img);
      results.append(h4);
   }
}

const getTVSeriesData = async (name) => {
   try{
      const response = await fetch(apiUrl + name);
      const data = await response.json();
      console.log('results: ', data);
      renderResults(data);
   } catch (error){
      console.log('network faliure: ', error);
   }
};

//generic event handling example
document.addEventListener('click', (event) => {
   console.log('Mouse was clicked somewhere on the page', event);
});