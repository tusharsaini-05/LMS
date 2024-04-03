import { FaArrowCircleRight , FaInbox } from "react-icons/fa";
import {useState} from 'react';
import { AiFillEnvironment } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdDashboard ,MdOutlineClass } from "react-icons/md";
import { IoIosArrowDropdown, IoIosLogOut, IoMdHome } from "react-icons/io";


const App = () => {
  const [open, setOpen] = useState(true);
  const [submenuopen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "pages", src: "Chat" },
    { title: "Media", src: "User", spacing: true },
    { 
      title: "Departments",
      submenu: true,
      submenuItems:[
        {title: "Ceramic"},
        {title: "Electrical"},
        {title: "Computer Science"},
      ], src: "Calendar" , icon : <MdOutlineClass />},
    //{ title: "Search", src: "Search" },
    { title: "Home", src: "Chart" , icon :<IoMdHome /> },
    { title: "Inbox ", src: "Folder", gap: true , icon :<FaInbox /> },
    { title: "Logout", src: "Setting" , icon : <IoIosLogOut /> },
  ] ;

  return (
<div className = "flex">
<div className = {`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20" } duration-300 relative`}>
<FaArrowCircleRight className = {`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`}  onClick={() => setOpen(!open)} />
<div className = "inline-flex">
<AiFillEnvironment className= {`bg-amber-300" text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} />
<h1 className = {`text-white origin-left  font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Lab Management System
</h1>
   
</div>
<div className = {`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2" : "px-5"} py-2`}>
<FaSearch className = {`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />
<input type = {"search"} placeholder = "Search" className= {`text-base bg-transparent w-full text-white focus: outline-none${!open && "hidden"}`} />

</div>
<ul className="pt-2">
  {Menus.map((menu,index) => (
    <>
    <li key = {index} className= {`text-gray-300 text-sm flex-items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" :"mt-2" } `}>
    <span className="text-2xl block float-left">
    {menu.icon ? menu.icon : <MdDashboard />}
    
    </span>  
      <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
      {menu.submenu && (
        <IoIosArrowDropdown className = { `${submenuopen && "rotate-180"}`} onClick = {() =>
        setsubmenuOpen(!submenuopen)} />

      )}
    </li>
    {menu.submenu && submenuopen && (
      <ul>
        {menu.submenuItems.map((submenuItem, index) =>(
          <li key = {index} className = "text-gray-300 text-sm flex-items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md " >
          {submenuItem.title}

          </li>
        ))} 
      </ul>
    )}
    </>
  ))}
</ul>
</div>
<div className = "p-7">
<h1 className = "text-2xl font-semibold">Home Page
</h1>
</div>
</div>
  );
};

export default App;
  