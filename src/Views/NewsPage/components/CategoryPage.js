import React, { PropTypes, Component } from 'react';
import * as sources from '../constants/newsSources';


class CategoryPage extends Component {
    render() {
        return (
            <>
            <div className="col-sm-2">
                <div className="sidebar">
             
                    <h3 >News API</h3>
                    <ul >
                        <li ><a href="#"  onClick={() => this.props.onCategoryClick(sources.ALL)} > Top Stories</a></li>
                        <li ><a href="#"  onClick={() => this.props.onCategoryClick(sources.CNN)}>CNN</a></li>
                        <li ><a href="#"  onClick={() => this.props.onCategoryClick(sources.ESPN)}>ESPN</a></li>
                        <li ><a href="#"  onClick={() => this.props.onCategoryClick(sources.TECH_CRUNCH)}>TechCrunch</a></li>
                        <li ><a href="#"  onClick={() => this.props.onCategoryClick(sources.BBC_NEWS)}>BBC News</a></li>
                        <li><a href="#"  onClick={() => this.props.onCategoryClick(sources.AL_JAZEERA)}>AL Jazzera</a></li>
                    </ul>
                    
                    
               
                       
                </div>
                </div>
                </>
            
        );
    }
}



// Define PropTypes
// CategoryPage.propTypes = {
//     onCategoryClick: PropTypes.func
// };

export default CategoryPage;


