import React, { useState } from 'react'

export default function Search() {
    return (
        <section>
            <form>
                <input type='text' 
                className='form-control' 
                placeholder='Search characters'/>
            </form>
        </section>
    )
}
