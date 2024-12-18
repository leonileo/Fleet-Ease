import { Link } from "react-router-dom"
import { RxDashboard } from "react-icons/rx";
import { MdAddLink } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";


// eslint-disable-next-line react/prop-types
const Sidebar = ({ active }) => {
    const links = [
        {icon: <RxDashboard />, title: "Dashboard", to: "/dashboard", active: active},
        {icon: <MdAddLink />, title: "Add a vehicle", to: "/dashboard/add-vehicle", active: active}
    ]
  return (
    <div className="xl:w-[300px] transition-all bg-[#457B9D] text-white h-full grid items-center">
        <div className="links h-[50%]">
            {/* loop through the links to display them. */}
            {links.map((e, x) =>
                <div key={x} className="flex group transition-all">
                    <Link to={e.to} className={`xl:w-full link flex gap-3 hover:bg-[rgba(217,217,217,0.25)] hover:cursor-pointer p-5 items-center ${active == e.title && "bg-[rgba(217,217,217,0.25)] border-r-3 border-e-indigo-300"}`}>
                        {e.icon}
                        <p className="xl:block hidden">{e.title}</p>
                    </Link>
                    {active == e.title ?
                        <span className="opacity-100 group-hover:opacity-0 transition-all group-hover:block bg-[#F4A261] group-hover:m-0 ml-1 rounded group-hover:w-0 w-[5px]"></span>
                        : 
                        <div className="flex items-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-all group-hover:block bg-[#F4A261] m-0 group-hover:ml-1 rounded w-0 group-hover:w-[5px] h-[50%] grid"></span>
                        </div>
                    }
                </div>
            )}
        </div>
        <footer className="footer h-full flex items-end justify-center p-5">
            <div className="xl:block hidden texts text-center text-sm">
                <p>This mini app was created by kaleb wendwessen.</p>
                <a href="mailto:kalebwendwessen@gmail.com" className="font-semibold">Contact: kalebwendwessen@gmail.com</a>
            </div>
            <div className="xl:hidden block">
                <a href="mailto:kalebwendwessen@gmail.com" className="font-semibold"><MdAttachEmail/></a>
            </div>
        </footer>
    </div>
  )
}

export default Sidebar