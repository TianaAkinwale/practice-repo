import { Link } from 'react-router-dom';
import { useState, Component } from 'react';
/* import {Bars3Icon} from '@heroicons/react/24/outline'
*/

const NavBar = () => {
    const Links = [
        {name:"NumberGene", link:"/numgene"},
        {name:"UserCard", link:"/usercard"},
        {name:"EventWorld", link:"/eventsWorld"},
        {name:"HexaColors", link:"/hexacolor"},
        {name:"Counter", link:"/Counter"},
        {name:"Log In", link:"/login"},
    ]

    const [open, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!open)
    }

    return (
        <div className="fixed bg-white px-[20px] md:px-[30px] shadow-md p-3.5 top-0 left-0 w-full"> {/* fixed */}
        <div className="md:flex justify-between items-center ">
            <div className="text-lg flex flex-shrink-0 text-green-800 font-bold cursor-pointer">
                <Link to="/">React Learn</Link>
            </div>
            <div onClick={toggleNavbar}
                className='absolute right-9 top-4 cursor-pointer md:hidden'>
                <p className={`${open ? 'close':'menu'} `}> HI </p>
            </div>
            <ul className={`md:flex md:items-center bg-white md:pb-0 pb-12 absolute md:static
                 right-0 top-0 w-[300px] md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in
                ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 `}>
                {
                    Links.map((link) =>(
                        <li key={link.name} className=" hover:bg-green-600 hover:text-white text-green-700 duration-500-
                            px-[18px] py-[8px] md:my-0 my-5">
                            <Link to={link.link} className="">
                                {link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
       </div>
    )
}

export default NavBar;
