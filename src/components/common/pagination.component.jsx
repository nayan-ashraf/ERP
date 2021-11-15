import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Pagination extends Component {
    
    render() { 
        const { total, pageCount, activePage } = this.props;
        const totalPages = Math.ceil(total/pageCount);
        
        const pages = _.range(1, totalPages+1, 1)
        if(total <= pageCount ) return null;
        return (
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class={activePage === 1 ? "page-item disabled" : "page-item "}>
                <Link to="#" class="page-link"  tabindex="-1" style={{'cursor':'pointer', 'textDecoration': 'none'}}
                onClick={() => activePage > 1 ? this.props.onPageChange(activePage-1) : null}

                >
                  Previous
                </Link>
              </li>
              {pages.map((page) => (
                <li
                  class={activePage === page ? "page-item active" : "page-item"}
                  
                >
                  <Link to="#" class="page-link" onClick={()=>(this.props.onPageChange(page))} style={{'cursor':'pointer', 'textDecoration': 'none'}}>
                    {page}
                  </Link>
                </li>
              ))}

              <li class={activePage===totalPages ?"page-item disabled": "page-item"}>
                <Link to="#" class="page-link" style={{'cursor':'pointer', 'textDecoration': 'none'}}
                onClick={()=>(activePage+1 <= totalPages ?this.props.onPageChange(activePage+1):null)}
                >Next</Link>
              </li>
            </ul>
          </nav>
        );
    }
}
 
export default Pagination;