export class Article{
    constructor(options){
        this.id = options.id;
        this.title = options.title;
        this.urlToImage = options.urlToImage;
        this.tags = options.tags
    }

    generateArticle(){
        let template = '';
        let article = document.createElement('div');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        if(this.urlToImage){
            (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)
        }
        if(this.title || this.tags){
            template += `<div class="strategy__content">`

            if(this.title){
                (template += `<h3 class="strategy__name">${this.title}</h3>`)
            }

            if(this.tags){
                template += `<div class="strategies__tags">`

                this.tags.map((tag)=>{
                    template += `<span class="tag tag_colored">${tag}</span>`
                })

                template += `</div>`
            }

            template += `</div>`
        }

        article.innerHTML = template;
        return article;
    }
}