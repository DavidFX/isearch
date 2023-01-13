import axios from 'axios';
import Link from 'next/link'
import { FormEvent, useState } from 'react';
import { FaRegSun, FaRegMoon } from "react-icons/fa";

interface Data {
  toggle: Function,
  isDark: boolean,
  setPost: Function,
  post: string[]
}


const SearchBar = (props: Data): JSX.Element => {
  const [search, setSearch] = useState("")

  const toggleSearch = async (event: FormEvent, data: string) => {
    event.preventDefault()
    const options = {
      method: 'GET',
      url: 'https://duckduckgo8.p.rapidapi.com/',
      params: { q: data },
      headers: {
        'X-RapidAPI-Key': 'f98e96f596msh9081e59d4bc3f09p19d9dejsn9d68dca27b60',
        'X-RapidAPI-Host': 'duckduckgo8.p.rapidapi.com'
      }
    }
    const response = axios.request(options)
    try {
      props.setPost((await response).data.results)
      console.log(props.post);

    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <nav className='flex items-center justify-between mt-4 px-4 md:px-12'>
      <form className="form-control grow " onSubmit={e => toggleSearch(e, search)}>
        <div className="input-group w-[90%] md:w-[70%] shadow-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search…"
            className="input w-full  input-bordered focus:outline-none" />
          <button type='submit' className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </form>
      <button onClick={props.toggle} className='btn grow-0 text-md col-span-1'>
        {props.isDark ? <FaRegSun /> : <FaRegMoon />}
      </button>
    </nav>
  )
}

export default SearchBar