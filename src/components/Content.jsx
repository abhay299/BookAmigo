import React from 'react';
import "../App.css";

const Content = () => {
  return (
	<div className='content'>
		<div className='contentItems'>
			<img src='https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' 
				alt="" className='contentImgs'/>
			<div className='contentTitles'>
				<h2>Bandra</h2>
				<h3>Few Rooms Available</h3>
			</div>
		</div>
		<div className='contentItems'>
			<img src='https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60' 
				alt="" className='contentImgs'/>
			<div className='contentTitles'>
				<h2>Colaba</h2>
				<h3>No Rooms Available</h3>
			</div>
		</div>
		<div className='contentItems'>
			<img src='https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' 
				alt="" className='contentImgs'/>
			<div className='contentTitles'>
				<h2>Lower Parel</h2>
				<h3>Rooms Available</h3>
			</div>
		</div>
		
	</div>

  )
};

export default Content;
