import React, { useState, useEffect} from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux';
import { searchTopNewsAction, searchAnyNewsAction, searchSourceNewsAction } from '../actions/newsActions';
import ArticlesPage from '../components/ArticlesPage';
import CategoryPage from '../components/CategoryPage';
import * as sources from '../constants/newsSources';

function NewsPage( props ) {

  const [searchText, setSearchText] = useState("")

  

  useEffect(
    () => {
      const { searchTopNewsAction } = props
      searchTopNewsAction();
      return () => {
        searchTopNewsAction();
      };
    },[searchAnyNewsAction]
  );


      const handleChange = event => setSearchText(event.target.value);
    
     const  handleSearch = () => {
        const { searchTopNewsAction, searchAnyNewsAction } = props;
     
          (searchText === "") ? searchTopNewsAction() : searchAnyNewsAction(searchText)
      }
    
      const onCategoryClick = (value) => {
        const { searchTopNewsAction, searchSourceNewsAction } = props;
        setSearchText("");
        (value === sources.ALL) ? searchTopNewsAction() : searchSourceNewsAction(value)
      }
      const { articles } = props;
      console.log(JSON.stringify(articles))
  return (
    
         <div className="container-fluid">
         {articles ?
          <div>
           <div className="row" style={{ margin: '20px' }}>
           <input type="text" value={searchText} onChange={handleChange} style={{ padding: '5px' }} />
             <button className="btn btn-primary btn-search" value="Search Library" onClick={handleSearch} style={{ marginLeft: '10px' }}>Search News</button>
        </div>
          <div className="row1">
            <CategoryPage onCategoryClick={onCategoryClick} />
            <ArticlesPage articles={articles} />
         </div>
         </div> 
         : 'loading ....'}
       </div>
    
  )
}


const mapStateToProps = ({ news }) => ({
  articles: news.articles,
});

const mapDispatchToProps = dispatch => ({
  searchTopNewsAction: () => dispatch(searchTopNewsAction()),
  searchAnyNewsAction: payload => dispatch(searchAnyNewsAction(payload)),
  searchSourceNewsAction: payload => dispatch(searchSourceNewsAction(payload)),
});
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(NewsPage)


