import React from "react";
import Categorie from './Categorie';
import { useSelector, useDispatch } from "react-redux";
import { resetFilter } from "../action/actionSidebar";

const Sidebar = () => {
  let className;
  const type = useSelector((state) => state.sidebar.type);
  const dispatch = useDispatch();

  if (type) {
    className = "open";
  }
  else{
    className = "";
  }

  const clearFilter = () => {
    dispatch(resetFilter());
  };
  
  return (
    <aside>
      <div id="clear-all" className={'show-hide ' + className }>
        <a className="ais-clear-all--link" href="#" onClick={clearFilter}>
          <div className="ais-title">
            <i className="fa fa-eraser"></i> Clear all filters
          </div>
        </a>
      </div>
      <section className="facet-wrapper">
        <h3 className="facet-category-title">Show results for</h3>
        <div id="categories">
          <Categorie />
        </div>
      </section>
      {/*categories*/}
      <section className="facet-wrapper">
        <h3 className="facet-category-title">Refine by</h3>
        {/*types*/}
        <div id="brands" className="facet">
          <h4 className="facet-title">Brand</h4>
          <form noValidate="" className="searchbox sbx-sffv">
            <div role="search" className="sbx-sffv__wrapper">
              <input type="search" name="search" placeholder="Search for other..." autoComplete="off" required="" className="sbx-sffv__input" />
              <button type="submit" title="Submit your search query." className="sbx-sffv__submit">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </form>
          <div className="ais-refinement-list--list">
            <div className="ais-refinement-list--item">
              <a href="#" className="facet-item">
                <input type="checkbox" className="ais-refinement-list--checkbox" value="Insignia™" />Insignia™
                <span className="facet-count">(746)</span>
              </a>
            </div>
            <div className="ais-refinement-list--item">
              <a href="#" className="facet-item">
                <input type="checkbox" className="ais-refinement-list--checkbox" value="Samsung" />Samsung
                <span className="facet-count">(633)</span>
              </a>
            </div>
            <div className="ais-refinement-list--item">
              <a href="#" className="facet-item">
                <input type="checkbox" className="ais-refinement-list--checkbox" value="Metra" />Metra
                <span className="facet-count">(591)</span>
              </a>
            </div>
            <div className="ais-refinement-list--item">
              <a href="#" className="facet-item">
                <input type="checkbox" className="ais-refinement-list--checkbox" value="HP™" />HP
                <span className="facet-count">(530)</span>
              </a>
            </div>
            <div className="ais-refinement-list--item">
              <a href="#" className="facet-item">
                <input type="checkbox" className="ais-refinement-list--checkbox" value="Apple" />Apple
                <span className="facet-count">(442)</span>
              </a>
            </div>
          </div>
        </div>
        {/*brands*/}
        <div id="rating" className="facet">
          <h4 className="facet-title">Ratings</h4>
          <div className="ais-star-rating--list">
            <div className="ais-star-rating--item">
              <a className="ais-star-rating--link" href="">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i> 
                <span className="ais-star-rating--up">&Up</span> 
                <span className="ais-star-rating--count">16,075</span>
              </a>
            </div>
            <div className="ais-star-rating--item">
              <a className="ais-star-rating--link" href="">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i> 
                <span className="ais-star-rating--up">&Up</span> 
                <span className="ais-star-rating--count">17,697</span>
              </a>
            </div>
            <div className="ais-star-rating--item">
              <a className="ais-star-rating--link" href="">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i> 
                <span className="ais-star-rating--up">&Up</span> 
                <span className="ais-star-rating--count">17,891</span>
              </a>
            </div>
            <div className="ais-star-rating--item">
              <a className="ais-star-rating--link" href="">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i>
                <i className="fa fa-star-o" aria-hidden="true"></i> 
                <span className="ais-star-rating--up">&Up</span> 
                <span className="ais-star-rating--count">18,047</span>
              </a>
            </div>
          </div>
        </div>
        {/*rating*/}
        <div id="prices" className="facet">
          <h4 className="facet-title">Prices</h4>   
            <div className="ais-price-ranges--list nav nav-list">
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">≤ 1</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$1 - 80</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$80 - 160</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$160 - 240</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$240 - 1,820</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$1,820 - 3,400</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">$3,400 - 4,980</a>
              </div>
              <div className="ais-price-ranges--item">
                <a className="ais-price-ranges--link" href="#">≥ $4,980</a>
              </div>
            </div>
            <form className="ais-price-ranges--form">
              <label className="ais-price-ranges--label">
                <span className="ais-price-ranges--currency">
                  
                </span>
                <input type="number" className="ais-price-ranges--input"  />
              </label>
              <span className="ais-price-ranges--separator">
                
              </span>
              <label className="ais-price-ranges--label">
                <span className="ais-price-ranges--currency">
                  
                </span>
                <input type="number" className="ais-price-ranges--input"  />
              </label>
              <button className="ais-price-ranges--button" type="submit">Go</button>
            </form>
        </div>{/*prices*/}
      </section>
      <div className="thank-you">Data courtesy of <a href="#">Best Buy</a></div>
    </aside>
  );
};

export default Sidebar;
