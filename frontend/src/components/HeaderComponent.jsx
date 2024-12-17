import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div className="bg-[#1D3557] h-[57px] p-2 px-4 flex items-center justify-between text-white">
        <h1 className="sm:text-2xl">FleetEase</h1>
        <Link to={'/dashboard'}>
          <button className="button flex justify-center bg-[rgba(69,123,157,0.50)] p-1 px-8 rounded-full hover:bg-[#457B9D] transition-all">
              <p>Manage vehicles now</p>
          </button>
        </Link>
    </div>
  )
}

export default HeaderComponent