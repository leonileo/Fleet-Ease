/* eslint-disable react/prop-types */
import { useState } from "react"
import { FaCircleInfo } from "react-icons/fa6"
import { useDropzone } from 'react-dropzone'

const UpdateComponent = ({ vehicle, setUpdateModal }) => {
  // states
  const [vName, setVName] = useState(vehicle.vehicleName)
  const [vPlate, setVPlate] = useState(vehicle.licensePlate)
  const [vType, setVType] = useState(vehicle.vehicleType)
  const [vStatus, setVStatus] = useState(vehicle.vehicleStatus)
  const [vMileage, setVMileage] = useState(vehicle.vehicleMileage)
  const [image, setImage] = useState(null);

  
  // dummy data
  const types = [
    {type: "Car"},
    {type: "Truck"},
    {type: "Van"},
    {type: "Motorbike"},
  ]
  // dummy data

  // Function for drag and drop image.
  const onDrop = (acceptedFiles) => {
    if(acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(Object.assign(file, { preview: URL.createObjectURL(file) }))
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    onDrop,
  })
  // Function for drag and drop image.

  // Function to submit the form
  const handleUpdate = (e) => {
    e.preventDefault();

    alert(`
      Name: ${vName}
      LicensePlate: ${vPlate}
      Type: ${vType}
      Status: ${vStatus}
      Mileage: ${vMileage}
      Vehicle picture: ${image ? image : vehicle.vehiclePicture}
      `)
  }
    
  return (
    <>
      {/* dashboard content */}
      <div className="dashboard-content overflow-auto md:w-full w-[88%] sm:p-10 p-5 space-y-10">
        <form onSubmit={handleUpdate} className="form bg-[#F1FAEE] text-black min-h-[70vh] border rounded p-5 md:px-10">
          <div className="info flex items-center gap-5 text-[#1D3557]">
            <FaCircleInfo />
            <p>Add vehicle info</p>
          </div>
          
           {/* upload image */}
          <div className="picture flex justify-center items-center my-5">
            <div 
            className="xl:w-[40%] xl:h-[400px] h-[250px] text-center grid justify-center items-end bg-white p-4 border-2 border-dashed rounded-md cursor-pointer hover:border-[#1D3557] text-[#1D3557] transition-all">
              <input {...getInputProps()} />
              {image ? (
                <div className="xl:w-[500px] w-full flex items-center h-full overflow-hidden rounded"
                {...getRootProps()}
                >
                  <img 
                    src={image.preview}
                    alt="Preview of uploaded picture"
                    className="mr-2 rounded"
                  />
                  <p>sdsd</p>
                </div>
              ) : (
                <div {...getRootProps()}>
                  <div className="xl:w-[500px] w-full flex items-center h-full overflow-hidden rounded">
                    <img 
                      src={vehicle.vehiclePicture}
                      alt={`${vName} picture"`}
                      className="mr-2 rounded"
                    />
                  </div>
                  <div className="btn flex justify-end my-2">
                    <button type="button" className="bg-[#1D3557] hover:bg-white hover:border-red-50 border border-transparent hover:text-[#1D3557] font-semibold text-white transition-all px-5 p-2 rounded-full">Update picture</button>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="vehicle-information xl:w-[40%] w-full ">
            {/* basic info */}
            <div className="basic-info space-y-5">
              <h2 className="text-xl font-semibold text-[#1D3557]">Basic vehicle information</h2>

              {/* Vehicle name */}
              <div className="input font-semibold flex items-center gap-5">
                <label htmlFor="vName" className="w-[200px]">Vehicle name <span className="text-red-600 font-bold">*</span></label>
                <input value={vName} onChange={(e) => setVName(e.target.value)} required id="vName" type="text" className="w-full p-2 rounded border font-light" />
              </div>

              {/* Vehicle licence plate */}
              <div className="input font-semibold flex items-center gap-5">
                <label htmlFor="vLicencePlate" className="w-[200px]">Licence plate <span className="text-red-600 font-bold">*</span></label>
                <input value={vPlate} onChange={(e) => setVPlate(e.target.value)} required id="vLicencePlate" type="text" className="w-full p-2 rounded border font-light" />
              </div>

              {/* Vehicle type */}
              <div className="input font-semibold flex items-center gap-5">
                <label htmlFor="vType" className="w-[200px]">Vehicle type <span className="text-red-600 font-bold">*</span></label>
                <select value={vType} onChange={(e) => setVType(e.target.value)} name="type" id="vType" className="w-full p-3 border rounded">
                  {/* loop through the types of vehicles */}
                  {types.map((e, x) => (
                    <option key={x} value={`${e.type}`}>{e.type}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* operational details */}
            <div className="operational-details space-y-5 my-5">
              <h2 className="text-xl font-semibold text-[#1D3557]">Operational Details</h2>

              {/* Vehicle status */}
              <div className="input font-semibold flex items-center gap-5">
                <label htmlFor="vStatus" className="w-[200px]">Vehicle status <span className="text-red-600 font-bold">*</span></label>
                <select value={vStatus} onChange={(e) => setVStatus(e.target.value)} name="status" id="vStatus" className="bg-[#457B9D] w-full text-white p-3 border rounded">
                  <option value="Active">Active</option>
                  <option value="In active">In active</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              {/* Vehicle mileage */}
              <div className="input font-semibold flex items-center gap-5">
                <label htmlFor="vMileage" className="w-[200px]">Vehicle mileage <span className="text-red-600 font-bold">*</span></label>
                <input value={vMileage} onChange={(e) => setVMileage(e.target.value)} required id="vMileage" type="text" maxLength={20} className="w-full p-2 rounded border font-light" />
              </div>
              
            </div>

            <div className="btns flex gap-5">
              {/* update button */}
              <button type="submit" className="my-5 px-16 p-2 border border-transparent hover:border-[#1D3557] hover:bg-transparent hover:text-[#1D3557] transition-all hover: bg-[#1D3557] text-white font-semibold rounded-full">Update vehicle</button>

              {/* Cancle button */}
              <button type="button" onClick={() => setUpdateModal(false)} className="my-5 px-10 p-2 border border-transparent hover:border-red-400 hover:bg-transparent hover:text-red-400 transition-all hover: bg-red-400 text-white font-semibold rounded-full">Cancle</button>
            </div>

          </div>

        </form>
      </div>
    
    </>
  )
}

export default UpdateComponent