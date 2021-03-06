import React, { useState } from 'react'

export default function Search() {

  const [text, setText] = useState('')  

  return (
        <section className='search'>
            <form>
                <input 
                  type='text' 
                  className='form-control' 
                  placeholder='Search characters'
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  autoFocus
                />
            </form>
        </section>
    )
}
