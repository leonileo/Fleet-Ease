/* eslint-disable no-unused-vars */
import { useState } from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import Sidebar from '../../components/SidebarComponent'
import UpdateComponent from '../../components/UpdateComponent'
import moment from 'moment'

import ViewComponent from '../../components/ViewComponent'
import Card from '../../components/Card'
import SkeletonCard from '../../components/SkeletonCard.jsx'
import SkeletonTable from '../../components/SkeletonTable.jsx'
import { useDashboardQuery } from '../../slices/vehicleSlice.js'

import vp from '../../assets/vehicle-picture.png'
import { CiWifiOff } from 'react-icons/ci'
import { BsInboxes } from "react-icons/bs";
import DeleteComponent from '../../components/DeleteComponent.jsx'
import { Link } from 'react-router-dom'
import { FcRefresh } from 'react-icons/fc'


const DashboardScreen = () => {
  document.title = "Fleet Ease - Dashboard"

  // states
  const [viewModal, setViewModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  // modal states
  const [vehicle, setVehicle] = useState("");
  const [vName, setVName] = useState("");
  const [vPlate, setVPlate] = useState("");
  const [vStaus, setVStaus] = useState("");
  const [vType, setVType] = useState("");
  const [vMileage, setVMileage] = useState("");
  const [vRdate, setVRdate] = useState("");
  const [vUdate, setVUdate] = useState("");
  const [vPicture, setVPicture] = useState("");
  const [vId, setVId] = useState("");

  const { data, isLoading, error } = useDashboardQuery();
  
  // status data
  const status =[
    {hover: "hover:bg-[rgba(69,123,157,0.50)]", boc: "border-[rgba(69,123,157,0.50)]", tc: "white", bgc: "bg-[rgba(69,123,157,0.50)]", title: "All vehicles", value: isLoading ? "" : error ? <CiWifiOff /> : data.status.allVehicles},
    {hover: "hover:bg-[#F4A261]", boc: "border-[#F4A261]", tc: "white", bgc: "bg-[#F4A261]", title: "All active vehicles", value: isLoading ? "" : error ? <CiWifiOff /> : data.status.allActiveVehicles},
    {hover: "hover:bg-[#F1FAEE]", boc: "border-[#F1FAEE]", tc: "[#1D3557]", bgc: "bg-[#F1FAEE]", title: "Vehicles on maintenance", value: isLoading ? "" : error ? <CiWifiOff /> : data.status.vehiclesInMaintenance},
    {hover: "hover:bg-[#1D3557]", boc: "border-[#1D3557]", tc: "white", bgc: "bg-[#1D3557]", title: "All Inactive vehicles", value: isLoading ? "" : error ? <CiWifiOff /> : data.status.allInActiveVehicles},
  ]
  // vehicles data
  const vehicles = isLoading ? [] : error ? [] : data.vehicles

  // Function for view modal
  const view = (e) => {
    setVehicle(e)
    setVPicture(e.vehiclePicture)
    setVName(e.vehicleName)
    setVPlate(e.licensePlate)
    setVStaus(e.vehicleStatus)
    setVType(e.vehicleType)
    setVMileage(e.vehicleMileage)
    setVRdate(e.vehicleRegesterationDate)
    setVUdate(e.vehicleLastUpdatedAt)
    setViewModal(true)
  }

  // dummy data 
    // status data
    // const status =[
    //   {hover: "hover:bg-[rgba(69,123,157,0.50)]", boc: "border-[rgba(69,123,157,0.50)]", tc: "white", bgc: "bg-[rgba(69,123,157,0.50)]", title: "All vehicles", value: 10},
    //   {hover: "hover:bg-[#F4A261]", boc: "border-[#F4A261]", tc: "white", bgc: "bg-[#F4A261]", title: "All active vehicles", value: 5},
    //   {hover: "hover:bg-[#F1FAEE]", boc: "border-[#F1FAEE]", tc: "[#1D3557]", bgc: "bg-[#F1FAEE]", title: "Vehicles on maintenance", value: 3},
    //   {hover: "hover:bg-[#1D3557]", boc: "border-[#1D3557]", tc: "white", bgc: "bg-[#1D3557]", title: "All Inactive vehicles", value: 2},
    // ]
    // All vehicles
    // const vehicles = [
    //   {vehicleName: "Toyota Corolla", vehicleType: "Sedan", licensePlate: "AB1234CD", vehicleMileage: "45,000", vehicleStatus: "Active", vehicleRegesterationDate: "2022-05-20", vehicleLastUpdatedAt: "2024-12-14 08:30Am", vehiclePicture: vp},
    //   {vehicleName: "Ford Transit", vehicleType: "Van", licensePlate: "EF5678GH", vehicleMileage: "88,000", vehicleStatus: "Maintenance", vehicleRegesterationDate: "2021-09-18", vehicleLastUpdatedAt: "2024-12-13 02:45PM", vehiclePicture: vp},
    //   {vehicleName: "Honda Civic", vehicleType: "Sedan", licensePlate: "IJ9101KL", vehicleMileage: "72,500", vehicleStatus: "In Transit", vehicleRegesterationDate: "2023-04-14", vehicleLastUpdatedAt: "2024-12-14 09:00AM", vehiclePicture: vp},
    //   {vehicleName: "Freightliner M2", vehicleType: "Truck	", licensePlate: "MN2345OP", vehicleMileage: "155,000", vehicleStatus: "Active", vehicleRegesterationDate: "2022-11-30", vehicleLastUpdatedAt: "2024-12-14 10:15AM", vehiclePicture: vp},
    //   {vehicleName: "Nissan Altima", vehicleType: "Sedan", licensePlate: "QR6789ST", vehicleMileage: "62,000", vehicleStatus: "Idle", vehicleRegesterationDate: "2023-01-25", vehicleLastUpdatedAt: "2024-12-12 05:30PM", vehiclePicture: vp},
    //   {vehicleName: "Chevrolet Silverado", vehicleType: "Truck", licensePlate: "UV1234WX", vehicleMileage: "120,000", vehicleStatus: "Maintenance", vehicleRegesterationDate: "2023-07-22", vehicleLastUpdatedAt: "2024-12-14 03:00PM", vehiclePicture: vp},
    //   {vehicleName: "Tesla Model 3", vehicleType: "Sedan", licensePlate: "YZ5678AB", vehicleMileage: "35,000", vehicleStatus: "Active", vehicleRegesterationDate: "2022-03-10", vehicleLastUpdatedAt: "2024-12-13 07:00PM", vehiclePicture: vp},
    //   {vehicleName: "Volvo XC90", vehicleType: "SUV", licensePlate: "CD9101EF", vehicleMileage: "80,000", vehicleStatus: "Idle", vehicleRegesterationDate: "2023-05-18", vehicleLastUpdatedAt: "2024-12-12 09:30AM", vehiclePicture: vp},
    //   {vehicleName: "Mercedes Sprinter", vehicleType: "Van", licensePlate: "GH2345IJ", vehicleMileage: "140,000", vehicleStatus: "In Transit", vehicleRegesterationDate: "2021-08-15", vehicleLastUpdatedAt: "2024-12-14 04:00PM", vehiclePicture: vp},
    // ]
    // Dynamic username best practice for future development. 
  // dummy data
  const username = "abebe";

  return (
    <div>
        {/* Navbar */}
        <div className="navbar z-10">
          <HeaderComponent page={"dashboard"} />
        </div>

        {/* main content */}
        <main className='h-[96vh] flex'>

          {/* sidebar */}
            <Sidebar active={"Dashboard"} />

          {/* dashboard content */}
          <div className="dashboard-content relative overflow-auto md:w-full w-[88%] sm:p-10 p-5 space-y-10">
            {/* Welcome */}
            <p className='items-center sm:text-3xl text-2xl font-semibold'>Welcome {username}</p>

            {/* overview cards */}
            <div className="overview">
              <h2 className='sm:text-2xl text-xl my-5 font-bold text-[#1D3557]'>Overview</h2>
              <div className="overview-cards xl:flex md:grid grid-cols-2 gap-5 md:space-y-0 space-y-4 sm:w-full">
                {/* loop through status cards */}

                {/* Set skeleton when the page is loading */}
                {isLoading ?
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                  <SkeletonCard />
                </>  
                : 
                // Remove skeleton when the loading is complete
                  status.map((e, x) =>
                    <Card key={x} data={e} id={x} />
                  )
              }

              </div>
            </div>

            {/* all Vehicles table */}
            <div className="all-vehicles-table w-[100%]">
              <h2 className='text-3xl my-5 font-bold text-[#1D3557]'>All vehicles</h2>
              <div className='overflow-x-auto overflow-y-auto xl:h-[60vh] h-[45vh] rounded'>
                {/* when the page is loading */}
                { isLoading ? <SkeletonTable />
                :
                //  when it completes 
                <table className='text-nowrap rounded w-full overflow-auto '>
                  <thead className='bg-[#1e1e1ed3] z-10 sticky top-0'>
                    <tr className='text-white h-[5vh] p-4'>
                      <td className='p-4'>N <u>o</u></td>
                      <td className='p-4'>Vehicle name</td>
                      <td className='p-4'>Vehicle status</td>
                      <td className='p-4'>Vehicle last updated</td>
                      <td className='p-4 text-center'>Actions</td>
                    </tr>
                  </thead>

                  <tbody className='relative'>
                    {/* loop through vehicle's data */}
                    {vehicles.length > 0 ? vehicles.map((e, x) => 
                      <tr key={e._id} className='even:bg-[rgba(0,0,0,0.3)] even:text-white text-[#1D3557] font-semibold transition-all'>
                        <td className='p-4'>{x + 1}</td>
                        <td className='p-4'>{e.vehicleName}</td>
                        <td className='p-4'>{e.vehicleStatus}</td>
                        <td className='p-4'>{moment(e.vehicleLastUpdatedAt).format('YYYY-MM-DD A')}</td>
                        <td className='p-4 w-[15%]'>
                          <div className="btns flex justify-center gap-3">
                            <button onClick={() => view(e)} className='bg-[rgba(69,132,157,0.7)] hover:bg-[#1D3557] hover:text-white transition-all p-2 rounded'>View more</button>
                            <button onClick={() => {setDeleteModal(true); setVId(e._id); setVehicle(e)}} className='bg-red-400 hover:bg-red-500 hover:text-white transition-all p-2 rounded'>Remove</button>
                          </div>
                        </td>
                      </tr>
                    ) : 
                      <div className='flex items-center justify-center bg-white absolute w-full h-[40vh]'>
                        <div className='space-y-4 text-[#1e1e1ed2]'>
                          <BsInboxes className='w-full text-[#1e1e1ed2] sm:h-[8vh] h-[4vh]' />
                          <p className='text-center font-semibold'>No data available</p>
                          <p className='text-center font-semibold'> <span onClick={() => location.reload()} className='cursor-pointer hover:underline inline-flex gap-1 items-center'>Try to refresh <FcRefresh /></span> or add a vehicle <Link to="/dashboard/add-vehicle"><u>Here</u></Link></p>
                        </div>
                      </div>
                      }
                  </tbody>
                </table>
                }

              </div>
            </div>

            {/* modals */}

            {/* view modal */}
            {viewModal && (
              <div className="absolute z-50 left-0 top-0 w-full p-4">
                <ViewComponent vehicle={vehicle} setViewModal={setViewModal} setUpdateModal={setUpdateModal} />
              </div>
            )}

            {/* update modal */}
            {updateModal && (
              <div className="update-modal absolute z-50 left-0 top-0 w-full p-4">
                <div className='bg-[rgba(0,0,0,.9)] text-white rounded sm:p-10 xl:px-20 p-2 min-h-[100vh] py-0 relative'>
                  <UpdateComponent vehicle={vehicle} setUpdateModal={setUpdateModal} />
                </div>
              </div>
            )}

            {/* delete modal */}
            {deleteModal && (
              <div className="absolute z-50 left-0 top-0 w-full p-4">
                <DeleteComponent vName={vName} setVid={setVId} setDeleteModal={setDeleteModal} vehicle={vehicle} />
              </div>
            )}
          </div>

        </main>

    </div>
  )
}

export default DashboardScreen