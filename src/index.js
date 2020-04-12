import {Article} from './js/Article';

const data = [
    {
        id: 1,
        title: 'Increasing Prosperity with Positive Thinking',
        urlToImage: './img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step.Knowing yourself is the first, and a very critical step.Knowing yourself is the first, and a very critical step.',
        date: '01.01.2020'
    },
    {
        id: 2,
        title: 'Increasing Prosperity with Positive Thinking',
        urlToImage: './img/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step.Knowing yourself is the first, and a very critical step.Knowing yourself is the first, and a very critical step.',
        date: '01.01.2020'
    },
    {
        id: 3,
        title: 'Increasing Prosperity with Positive Thinking',
        urlToImage: './img/strategies/3.jpg',
        tags: ['Art', 'Design', 'Culture'],
        content: 'Knowing yourself is the first, and a very critical step.Knowing yourself is the first, and a very critical step.Knowing yourself is the first, and a very critical step.',
        date: '01.01.2020'
    }
]




window.addEventListener('load', ()=>{
    
    //Render Article

    if(data){
        renderArticlesToDom();
    }



    //Tags
    addTagsClickHandler();

})

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (event)=>{
        if(event.target.classList.contains('tag')){
            removeSelectedTags();
            event.target.classList.add('tag_selected');

            if(event.target.innerText === 'All'){
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(event.target.innerText);
            }
        }
    })
}

const removeSelectedTags = () =>{
    let tags = document.querySelectorAll('.strategies__tags .tag');
    tags.forEach((el)=>{
        el.classList.remove('tag_selected');
        el.classList.add('tag_bordered');
    })
}

const showAllStrategies = ()=>{
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach((el)=>{
        el.classList.remove('strategy_hidden')
    })
}

const filterStrategyBySelectedTag = (selectedTag)=>{
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach((el)=>{
        el.classList.add('strategy_hidden');
        el.querySelectorAll('.tag').forEach((tag)=>{
            if(tag.innerText === selectedTag){
                el.classList.remove('strategy_hidden');
            }
        })
    })
}



const renderArticlesToDom = ()=>{
    let strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach((article)=>{
        strategiesWrapper.append(article.generateArticle())
    })

}

const getStrategiesWrapper = ()=>{
    const strategiesContainer = document.querySelector('.strategy-wrapper');
    strategiesContainer.innerHTML = '';
    return strategiesContainer;
}

const generateArticles = (data)=>{
    let articles = [];
    data.forEach((article)=>{
        articles.push(new Article(article));
    })
    return articles;
}

