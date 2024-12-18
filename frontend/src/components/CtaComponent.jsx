import { Link } from "react-router-dom"

const CtaComponent = () => {
    const year = new Date().getFullYear().toString()
  return (
    <div className="sm:w-[50%] w-full sm:h-full h-[48vh] p-5 flex items-center justify-center">
        <div className="top sm:w-[40%] grid h-full">
            <div className="Header grid items-end">
                <div className="text-center min-h-[20vh] h-auto grid">
                    <div className="text">
                        <h1 className="sm:text-[40px] text-[35px] font-bold text-[#F4A261]">FleetEase</h1>
                        <p className="capitalize sm:text-[25px] text-[20px] text-[rgba(26,23,23,0.85)]">Fleet management made simple.</p>
                    </div>
                    <Link to={'/dashboard'} className="">
                        <button className="button w-full text-white flex justify-center bg-[#457B9D] p-3 rounded-full hover:bg-[#1D3557] transition-all">
                            <p className="sm:text-xl">Manage vehicles now</p>
                        </button>
                    </Link>
                </div>
            </div>

            <footer className="copyright text-center text-sm grid items-end">
                <p>Copyright &copy; {year} All right reserved.</p>
            </footer>
        </div>
    </div>
  )
}

export default CtaComponent