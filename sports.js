const loadData=()=>
{
    fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
    .then(res=>res.json())
    .then(data=>displayCountry(data.leagues))
}

const displayCountry= sports =>
{
    const sportsDiv=document.getElementById('sports-div')
    for(const sport of sports)
    {
        const p =document.createElement('p')
        p.innerText=sport.idLeague
        const h2=document.createElement('h2')
        h2.innerText=sport.strSport
        const h3= document.createElement('h3')
        h3.innerText=sports.strLeague
        sportsDiv.append(p,h2,h3)
    }
}