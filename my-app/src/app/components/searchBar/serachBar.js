"use client"
import React, {useState} from 'react'
import SearchManuFacturer from '../searchManuFacturer/searchManuFacturer'
export default function SearchBar() {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch =()=>{

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
    <div className="searchbar__item">
      <SearchManuFacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    </div>

    </form>
  )
}
