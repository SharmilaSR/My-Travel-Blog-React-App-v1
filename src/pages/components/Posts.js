import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

export default function Posts () {
  return (
    <>
    <div className='posts'>
      <div className='postsLeft'> 
        <Link to='australia'>
          <img src="https://images.unsplash.com/photo-1516941064643-74aacd84843c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className='postsImg'/>
        </Link>
        <h4>AUSTRALIA</h4>
      </div>
      <div className='postsRight'>
        <Link to='/spain'>
          <img src="https://images.unsplash.com/photo-1598960635501-373fc199bf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className='postsImg'/>
        </Link>
        <h4>SPAIN</h4>
      </div>
      <div className='postsCentre'>
        <Link to='/vietnam'>
          <img src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className='postsImg'/>
        </Link>
        <h4>VIETNAM</h4>
      </div>
    </div>
    </>
  )
}
