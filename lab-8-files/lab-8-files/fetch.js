/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
let header = document.querySelector('header');
let section = document.querySelector('section');

// STEP 3 - Store JSON URL in a variable

let requestURL = 'https://prabhnoor3017.github.io/lab8/products.json';

// using Fetch Api  the fetch method will retrive the resopnse by sending a request

fetch(requestURL)
  .then((response) => {
    return response.json()
  })
  .then((section) => {

    console.log(section);
    populateHeader(section);
  })

function populateHeader(jsonObj) {
    let headerH1 = document.createElement('h1'); 
    headerH1.textContent = jsonObj['companyName'];
    header.appendChild(headerH1); 
    let headerPara = document.createElement('p'); 
    headerPara.textContent = jsonObj['headOffice']; 
    header.appendChild(headerPara); 
    let headerPara1 = document.createElement('p'); 
    headerPara1.textContent = jsonObj['established']; 
    header.appendChild(headerPara1); 
}

function topDeals(jsonObj) {
    let topDeals = jsonObj['topDeals']; 
    for(let i = 0; i < topDeals.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2'); 
        let img = document.createElement('img'); 
        let p1 = document.createElement('p'); 
        let p2 = document.createElement('p'); 
        let list = document.createElement('ul'); 

        img.setAttribute('src', 'images/' + topDeals[i].image); 
        img.setAttribute('alt', topDeals[i].name);
        h2.textContent = topDeals[i].name;
        p1.textContent = topDeals[i].price;
        p2.textContent = topDeals[i].description; 
        
        let features = topDeals[i].features;
        for(let j = 0; j < features.length; j++ ) {
            let listItem = document.createElement('li'); 
            listItem.textContent = features[j]; 
            list.appendChild(listItem); 
        }

        article.appendChild(img);
        article.appendChild(h2); 
        article.appendChild(p1); 
        article.appendChild(p2); 
        article.appendChild(list); 
        section.appendChild(article); 
    }
}