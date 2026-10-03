const Links = [
  { id: 1, page: "Home" , path: "/"},
  { id: 2, page: "About" , path: "/about"},
  { id: 3, page: "Contact" , path: "/contact"},
  { id: 4, page: "Blog" , path: "/blog"},
  { id: 5, page: "Careers" , path: "/careers"},
]
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-gray-400 h-[80px] w-full flex items-center justify-center fixed top-0 z-50">

        <div className="container mx-auto flex justify-between items-center h-full px-4 md:px-10">



        <div>
            <img src="" alt="logo"></img>
            <h1 className="text-xl font-bold">COFFEE</h1>
        </div>






        <ul className="hidden md:flex space-x-4 font-bold">
            {Links.map((link) => (
                <li key={link.id}>
                    <a href={link.path} className="text-grey-800 hover:text-blue-500">
                        {link.page}
                    </a>
                </li>
            ))}
        </ul>



        <div className="hidden md:flex space-x-4 text-white">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 font-medium"
          >Get Started</button>
        </div>

        <div onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <FaBars className="text-white cursor-pointer" /> : <IoMdClose className="text-white cursor-pointer" /> }
        </div>




        </div>


        <div className={`fixed top-0 right-0 bg-red-500 w-[200px] h-[100vh] ${ open ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out `}>


          <div className="absolute top-4 left-2 cursor-pointer" 
              onClick={() => setOpen(false)}>
            <IoMdClose />
          </div>


          <ul className="flex flex-col px-4 gap-7 mt-16">
            {Links.map((link) => (
                <li className="px-2 py-1 hover:bg-blue-500 transition-duration-400 rounded"
                     key={link.id}>
                    <a href={link.path} >
                        {link.page}
                    </a>
                </li>
            ))}
        </ul>


           <div className="flex flex-col mt-7 px-4 gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 font-medium"
          >Get Started</button>
           </div>



        </div>


    </div>
  )
}

export default NavBar