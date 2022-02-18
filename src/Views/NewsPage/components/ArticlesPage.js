
import React from 'react'
import './../styles/News.css'


function ArticlesPage(props) {

    const childElements = props.articles.map(function (element, index) {
                    return (
                    <div className='try'>
                        <div className="page" key={index}>
                             <a href={element.url} >
                        <div className="news" >
                            {element.urlToImage ? 
                        <img className="article-image"  alt="" src={element.urlToImage} /> : null
                    } 
                          <h3 className="news__title">{element.title}</h3>
                          <span className="news__source">{element.source.name}</span>
                        </div>
                        </a>
                        </div>
                        </div>


                        
                    );
                });

    return (
        <div> 
    
        {childElements}
            
        </div>
    )
}

export default ArticlesPage
