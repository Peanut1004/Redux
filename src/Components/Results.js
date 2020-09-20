import React ,{ useEffect } from "react";
import Pagination from "react-js-pagination";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Product from "./Product";
import {fetchProductsBegin, fetchProductsSuccess, setPage, setSort ,setCount,fetchProductsFailure} from "../action/actionProducts";
import Sidebar from "./Sidebar";
import {setType} from "../action/actionSidebar";


const Results = () => {
	const products = useSelector((state) => state.products.products);
	const page = useSelector((state) => state.products.page);
	const count = useSelector((state) => state.products.count);
	const sort = useSelector((state) => state.products.sort); //mapStateToProps
	const type = useSelector((state) => state.sidebar.type);
	const dispatch = useDispatch(); //mapDispatchToProps
	useEffect(() => {
		dispatch(fetchProductsBegin());
		let url = `http://localhost:4000/products?_page=${page}&_limit=16`;
		if(sort) {
			url += `&_sort=price&_order=${sort}`;
		}
		if (type) {
  			url += `&type=${type}`;
  		}
		fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchProductsSuccess(data));
        dispatch(setCount())
      })
      .catch((error) => {
				dispatch(fetchProductsFailure(error));
			});
	}, [dispatch, page, sort,type]);

  useEffect(() => {
  		let url = `http://localhost:4000/products?`;
  		if (type) {
  			url += `type=${type}`;
  		}
		fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setCount(data.length))
      })
      .catch((error) => {
				dispatch(fetchProductsFailure(error));
			});
	}, [count,type]);

    const handlePageChange = (pageNumber) => {
			dispatch(setPage(pageNumber));
		};

		const sortBy = (e) => {
			const sortFilter = e.target.value;
			dispatch(setSort(sortFilter));
		};

  return (
  	<div className="app">
	  	<Header />
	  	<Sidebar />
	  	<div className="results-wrapper">
			  <div id="results-topbar">
			    <div id="stats">
			    	<span className="product-result">{count} results </span>
			    	<span className="speed-result">found in 2ms</span>
			    </div>
			    <div className="sort-by">
			      <label>Sort by</label>
			      <div id="sort-by-selector">
			        <select data-reactroot="" className="ais-sort-by-selector" value={sort} onChange={sortBy}>
			          <option className="ais-sort-by-selector--item" value="featured">Featured</option>
			          <option className="ais-sort-by-selector--item" value="asc">Price asc.</option>
			          <option className="ais-sort-by-selector--item" value="desc">Price desc.</option>
			        </select>
			      </div>	
			    </div>
			  </div>
			  <main id="hits">
			    <div data-reactroot="" className="ais-hits">
			    	{products.map((el) => (
					    <Product key={el.id} item={el} />)
			    	)}
				  </div>
			  </main>
        <div id="pagination">
    			<Pagination
	          activePage={page}
	          itemsCountPerPage={16}
	          totalItemsCount={count}
	          pageRangeDisplayed={5}
	          onChange={handlePageChange}
	        />
        </div>
			</div>
		</div>
  );
};

export default Results;

