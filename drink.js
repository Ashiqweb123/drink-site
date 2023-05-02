const loadData= ()=>
{
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value
    // console.log(searchText)
    searchField.value=''

    const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.drinks))
}

const displayData= drinks =>
{
    const cardDiv=document.getElementById("card-container")
    cardDiv.textContent=''
    for(const drink of drinks)
    {
        console.log(drink)
      const div= document.createElement('div')
      div.innerHTML=`
      <div onclick="loadDataDetails(${drink.idDrink})" class="card" style="width: 15rem;">
      <img src="${drink.strDrinkThumb}"class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${drink.strDrink}</h5>
        <p class="card-text">${drink.strInstructions.slice(0,50)}</p>
        <a href="${drink.strVideo}" class="btn btn-primary">Watch details</a>
      </div>
    </div>
      
      
      
      `
      cardDiv.appendChild(div)
    }
    
}

const loadDataDetails = drinkId =>
{
 const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
fetch(url)
.then(res=>res.json())
.then(data=>displayDataDetails(data.drinks[0]))
}


const displayDataDetails = drinksDetails =>
{
  console.log(drinksDetails)
  const cardDetails=document.getElementById('card-details')
  cardDetails.textContent =''
  const div= document.createElement('div')
  div.innerHTML=`
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${drinksDetails.strDrinkThumb}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${drinksDetails.strDrink}</h5>
        <p class="card-text">${drinksDetails.strInstructions}</p>
       
      </div>
    </div>
  </div>
</div>
  `;
  cardDetails.appendChild(div)
}
