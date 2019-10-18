import React from 'react';

interface Article {
    article: {
        title: string,
        urlToImage: string,
        description: string,
        url: string,
    }
}

const NewsItem: React.FC<Article> = ({article}: Article) => {
    return (<article>
        <div className="wrapper">
            <h3 className="text-center">{article.title}</h3>
            <img src={article.urlToImage} alt="" />
            <p className="text-center">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer"> read more </a>
        </div>
    </article>);
};
  
export default NewsItem ;