import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const NavItem = ({ name, link_path }) => {   

    return (
        <li className=' py-1 lg:py-3 px-4 lg:px-4  lg:self-center font-semibold lg:font-semibold text-base flex '>
            <a href={link_path}>
                {name}{' '}
                
            </a>
            {name === 'Products' ? (

                    <AiFillCaretDown className='self-center text-gray-300' style={{marginLeft: '.2rem', marginTop: '-3px'}} />
            ) : ''}
        </li>
    )
}

export default NavItem
