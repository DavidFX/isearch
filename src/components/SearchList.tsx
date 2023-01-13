import Link from 'next/link'
import React from 'react'

interface Data {
  post: string[]
}

const SearchList = (props: Data) => {
  const result = props.post.map((element) => (
    <div key={element.position} className='flex flex-col gap-2'>
      <a className='text-lg link link-hover link-secondary' target="_blank" href={element.url}>{element.title}</a>
      <p className='sm:text-base text-sm'>
        {element.description}
      </p>
    </div>
  ))

  return (
    <div className="flex flex-col gap-8 max-w-2xl mt-12 px-8 md:px-20">
      {result}
    </div>
  )
}

export default SearchList