/* eslint-disable react/prop-types */
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { BsFuelPump } from "react-icons/bs";
import { LuCog } from "react-icons/lu";
import { FcInTransit } from "react-icons/fc";


const ViewComponent = ({ vehicle, setViewModal, setUpdateModal }) => {
    // states

    // modal states
    const vName = vehicle.vehicleName;
    const vPlate = vehicle.licensePlate;
    const vStaus = vehicle.vehicleStatus;
    const vType = vehicle.vehicleType;
    const vMileage = vehicle.vehicleMileage;
    const vRdate = vehicle.vehicleRegesterationDate;
    const vUdate = vehicle.vehicleLastUpdatedAt;
    const vPicture = vehicle.vehiclePicture;
  
    // Function for update modal
    const update = (e) => {
        e.preventDefault();
        setViewModal(false);
        setUpdateModal(true);
    }

  return (
    <div>
        <div className='bg-[rgba(0,0,0,.9)] text-white rounded sm:p-10 xl:px-20 p-5 min-h-[100vh] py-0 relative'>
            {/* top section */}
            <div className="top sm:bg-transparent bg-[rgba(0,0,0,1)] sm:static sticky -top-5 py-2 sm:p-0 flex justify-between">
            {/* bread crumb */}
            <div className="bread-crumb flex md:gap-5 gap-3 font-semibold md:text-xl items-center"> 
                {vType}
                <span className="dash w-1 h-10 block bg-white rounded-full"></span> 
                {vName}
            </div>

            {/* go back div */}
            <div className="go-back-btn">
                <button onClick={() => setViewModal(false)} className='flex sm:gap-3 gap-2 items-center bg-white text-[#1D3557] sm:p-2 sm:px-5 p-1 rounded font-bold hover:bg-[#1D3557] transition-all hover:text-white'> <PiArrowBendUpLeftBold /> Go back</button>
            </div>

            </div>

            {/* bottom section */}
            <div className="bottom my-5 space-y-10">
            {/* vehicle info */}
            <div className="vehicle-info xl:flex xl:gap-24 gap-4 space-y-4 xl:space-y-0">
                {/* vehicle picture */}
                <div className="vehicle-picture xl:w-[700px] xl:h-[450px] xl:max-h-max max-h-[750px] flex justify-center items-start rounded overflow-hidden">
                <img src={vPicture} alt={`Photograph of ${vName} vehicle.`} className="h-auto" />
                </div>

                {/* vehicle info */}
                <div className="vehicle-info space-y-10 xl:p-0 sm:pl-10 pl-5 ">
                {/* vehicle name */}
                <div className="vname flex xl:gap-5 gap-2 items-center xl:text-2xl text-xl">
                    <span className='xl:w-[200px] w-[150px] font-semibold text-[#F4A261]'>Vechicle name :</span>
                    <p>{vName}</p>
                </div>

                {/* vehicle license plate */}
                <div className="vlp flex xl:gap-5 gap-2 items-center xl:text-2xl text-xl">
                    <span className='xl:w-[200px] w-[150px] font-semibold text-[#F4A261]'>License Plate :</span>
                    <p>{vPlate}</p>
                </div>

                {/* vehicle staus */}
                <div className="vstatus flex xl:gap-5 gap-2 items-center xl:text-2xl text-xl">
                    <span className='xl:w-[200px] w-[150px] font-semibold text-[#F4A261]'>Vechicle Status :</span>
                    <p className='flex items-center gap-3'>{vStaus} 
                    {/* Diplay active icon */}
                    {vStaus == "Active" && <span className='w-3 h-3 bg-green-500 animate-pulse duration-150 rounded-full block'></span>} 
                    {/* Display maintainance icon */}
                    {vStaus == "Maintenance" &&  <LuCog className='animate-spin duration-1000 w-5 h-5'/>}
                    {/* Display in transit icon */}
                    {vStaus == "In Transit" &&  <FcInTransit className='w-8 h-8'/>}
                    </p>
                </div>

                </div>
            </div>

            {/* vehicle status cards */}
            <div className="vehicle-status-cards flex items-center justify-center">
                <div className="cards xl:flex gap-3 2xl:w-[80%] xl:space-y-0 space-y-5 w-[100%] xl:p-0 sm:px-10">
                
                {/* vehicle regesteration date */}
                <div className="vrd group grid w-full min-h-[15vh] space-y-3 font-semibold sm:text-xl relative bg-gradient-to-tr from-[#F4A261] to-[#1D3557] from p-5 rounded-lg">
                    <p>Vehicle registeration date</p>
                    <span className='sm:text-2xl font-bold'>{vRdate}</span>
                    {/* icon */}
                    <div className='absolute bottom-0 right-0 p-2'><CiCalendarDate className='w-10 h-10 group-hover:text-white transition-all text-[rgba(255,255,255,.5)]'/></div>
                </div>

                {/* vehicle mileage */}
                <div className="vm group grid w-full min-h-[15vh] space-y-3 font-semibold sm:text-xl relative bg-[#1D3557] from p-5 rounded-lg">
                    <p>Mileage (km)</p>
                    <div className='sm:text-2xl font-bold'>{vMileage} <span className='text-sm'>KM</span></div>
                    {/* icon */}
                    <div className='absolute bottom-0 right-0 p-2'><BsFuelPump className='w-10 h-10 group-hover:text-white transition-all text-[rgba(255,255,255,.5)]'/></div>
                </div>

                {/* vehicle registeration date */}
                <div className="vlud group grid w-full min-h-[15vh] space-y-3 font-semibold sm:text-xl relative bg-gradient-to-tl from-[#F4A261] to-[#1D3557] from p-5 rounded-lg">
                    <p>Vehicle registeration date</p>
                    <span className='sm:text-2xl font-bold'>{vUdate}</span>
                    {/* icon */}
                    <div className='absolute bottom-0 right-0 p-2'><RxUpdate className='w-10 h-10 group-hover:text-white transition-all text-[rgba(255,255,255,.5)]'/></div>
                </div>

                </div>

            </div>

            {/* update button */}
            <div className="update-vehicle-button flex justify-center">
                <button onClick={update} className='p-3 px-10 bg-[#1D3557] text-white rounded-full hover:bg-[#F4A261] transition-all hover:text-[#1D3557] font-semibold'>Update vehicle</button>
            </div>

            </div>

        </div>
    </div>
  )
}

export default ViewComponent