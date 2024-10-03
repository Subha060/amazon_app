import React from 'react'
import menuIcon from '../assets/menuIcons.js'

export default function NavList() {
    return(
        <>
        <div className=''>
        <ul className=''>

            {
                menuIcon.map((icon) => (
                    <a href={icon.link} key={icon.name} className='w-full pr-10 h-10' >
                        <li className='flex'>
                            <img src={icon.image} alt="" className='pr-6' />
                            <div className='w-full flex justify-between'>

                            <h1>
                            {icon.name}
                            </h1>

                               <h1>
                                {'>'}
                               </h1>
                            </div>
                            </li>
                    </a>
                ))

            }

        </ul>
        </div>
        </>
    )
}