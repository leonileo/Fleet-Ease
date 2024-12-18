import { Link } from 'react-router-dom'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import pfp from "../assets/Abebe's-profile-picture.png"


// eslint-disable-next-line react/prop-types
const HeaderComponent = ({ page }) => {
  return (
    page === "dashboard" 
    ?  <Navbar fluid className='bg-[#1D3557] h-[57px] p-2 px-4 pr-10 text-white'>
      <h1 className="sm:text-2xl"><Link to={'/'}>FleetEase</Link></h1>
      <div className="flex md:order-2 px-5 items-center gap-5">
        <p className='font-semibold '>Abebe</p>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={pfp} className='border-2 border-[#F1FAEE] rounded-full overflow-hidden bg-black w-[40px] h-[40px]' />
          }
          className='bg-gray-100 text-[#1D3557] font-semibold'
        >
          <Dropdown.Item className='p-3 hover:bg-[#457B9D] hover:text-white transition-all'><Link to={"/dashboard"}>Dashboard</Link></Dropdown.Item>
          <Dropdown.Item className='p-3 hover:bg-[#457B9D] hover:text-white transition-all'><Link to={"/dashboard/add-vehicle"}>Add-vehicle</Link></Dropdown.Item>
        </Dropdown>
        {/* <Navbar.Toggle /> */}
      </div>
    </Navbar>
    : (<div className="bg-[#1D3557] h-[57px] p-2 px-4 flex items-center justify-between text-white">
        <h1 className="sm:text-2xl">FleetEase</h1>
        <Link to={'/dashboard'}>
          <button className="button flex justify-center bg-[rgba(69,123,157,0.50)] p-1 px-8 rounded-full hover:bg-[#457B9D] transition-all">
              <p>Manage vehicles now</p>
          </button>
        </Link>
      </div>
    )
      
  )
}

export default HeaderComponent