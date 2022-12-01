import React,{useState,useEffect} from 'react'
import InputBase from '@material-ui/core/InputBase';
import { useDebounce } from '../helpers/customHooks';


function SearchResults() {
    const [searchField ,setSearchField]=useState();

    


const debouncedSearch = useDebounce(searchField,500);

useEffect(() => {
  console.log(debouncedSearch)
}, [debouncedSearch])

    
    const handleOnKeyChage = (e)=>{
   
        setSearchField(e.target.value)
    }
   
  return (
    <div>
    <InputBase
    placeholder="Search…"
    onChange={(e)=>handleOnKeyChage(e)}
    inputProps={{ 'aria-label': 'search' }}
  />
    </div>
  )
}

export default SearchResults