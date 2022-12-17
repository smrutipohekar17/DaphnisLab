
import React, { useState } from 'react'
import Begin from './Begin'
import SearchBar from './SearchBar'
import Tags from './Tags'
import Card from './Card'
import Data from './data'
import Sidebar from './Sidebar/Sidebar/SidebarRender'


function Container() {
  return (
    <div className='container'>
        <div className='path'>
            <Begin />
        </div>
        <div className='searchBar'>
            <SearchBar />
        </div>
        <div className='tags'>
            <Tags />
        </div>
        <div className='main'>
                   
                <div className='sideBar'>
                <div>
                <Sidebar/>
                </div>
            </div>
                <div className='meds'>
                {Data.map((noteItem, index) => {
                    return (
                    <Card cardDetails={noteItem} />
                    );
                })}
                </div>
        </div>
    </div>
  )
}

export default Container