var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = (function(){
    console.log("hello")
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article){
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2')
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;
        
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = "Ways to Achieve";

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way){
            var itemList = document.createElement('li');
            itemList.textContent = way;
            waysList.appendChild(itemList)
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = "Benefits";

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit){
            var benefitList = document.createElement('li');
            benefitList.textContent = benefit;
            benefitsList.appendChild(benefitList)
        });

        articlesDiv.appendChild(description);
        articlesDiv.appendChild(waysHeader);
        articlesDiv.appendChild(waysList);
        articlesDiv.appendChild(title);
        articlesDiv.appendChild(benefitsHeader);
        articlesDiv.appendChild(benefitsList);


    });

})
xhr.send();