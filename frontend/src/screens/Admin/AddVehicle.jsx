import HeaderComponent from "../../components/HeaderComponent"
import Sidebar from "../../components/SidebarComponent"
import { FaCircleInfo } from "react-icons/fa6";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useDropzone } from 'react-dropzone'
import { useState } from "react";
import { useAddVehicleMutation, useUploadImageMutation } from "../../slices/vehicleSlice";
import { toast } from "sonner"
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const AddVehicle = () => {
  document.title = "Fleet Ease - Add vehicle"

  // states
  const [vName, setVName] = useState("")
  const [vPlate, setVPlate] = useState("")
  const [vType, setVType] = useState("")
  const [vStatus, setVStatus] = useState("Active")
  const [vMileage, setVMileage] = useState("")
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [uploadImage, { isLoading: uploadLoader }] = useUploadImageMutation();
  const [addVehicle, { isLoading }] = useAddVehicleMutation();
  const navigate = useNavigate();

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
      const file1 = acceptedFiles[0];
      console.log(file1)
      setFile(file1);
      setImage(Object.assign(file1, { preview: URL.createObjectURL(file1) }))
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024,
    onDrop,
  })
  
  // Function to submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', file);

      try {
        // this try/catch statment has 2 function, 
        // that uploads the image then set the image url
        // and create the vehicle based on the inputs.
        // the if statement checks if the image is uploaded to cloudinary already or not.

        let res, imageUrl;
        if (!uploaded) {
          res = !uploaded && await uploadImage(formData).unwrap();
          imageUrl = res.imageUrl;
          setUploaded(true);
          toast.success(res.message);
        }

        const response = await addVehicle({ 
          vehicleName: vName,
          vehicleType: vType,
          licensePlate: vPlate,
          vehicleMileage: Number(vMileage),
          vehicleStatus: vStatus,
          vehiclePicture: imageUrl
        }).unwrap();
  
        toast.success(response.message)
        navigate('/dashboard')
        location.reload()

      } catch (error) {
        toast.error(error?.data?.message || error?.error)
      }
      
    } catch (error) {
        toast.error(error?.data?.message || error?.error)
    }
  }

  return (
    <div>
        {/* Navbar */}
        <HeaderComponent page={"dashboard"} />

        {/* main content */}
        <main className='h-[96vh] flex'>

          {/* sidebar */}
            <Sidebar active={"Add a vehicle"} />
          {/* dashboard content */}
          <div className="dashboard-content overflow-auto md:w-full w-[88%] sm:p-10 p-5 space-y-10">
            <h2 className='sm:text-3xl text-xl my-5 font-bold text-[#1D3557]'>Add Vehicle</h2>
            <form onSubmit={handleSubmit} className="form bg-[rgba(217,217,217,0.25)] min-h-[70vh] border rounded p-5 md:px-10">
              <div className="info flex items-center gap-5 text-[#1D3557]">
                <FaCircleInfo />
                <p>Add vehicle info</p>
              </div>
              
              {/* upload image */}
              <div className="picture flex justify-center items-center my-5">
                <div 
                className="xl:w-[40%] relative xl:h-[400px] h-[250px] text-center grid justify-center items-end bg-white p-4 border-2 border-dashed rounded-md cursor-pointer hover:border-[#1D3557] text-[#1D3557] transition-all"
                {...getRootProps()}>
                  <input  {...getInputProps()} />
                  {image ? (
                    <div className="xl:w-[500px] w-full flex items-center h-full overflow-hidden rounded">
                      <img 
                        src={image.preview}
                        alt="Preview of uploaded picture"
                        className="mr-2 rounded"
                      />
                    </div>
                  ) : (
                    <>
                    <div className="icon flex justify-center items-center">
                      <AiOutlineCloudUpload className="xl:w-[150px] w-[80px] xl:h-[150px] h-[80px]" />
                    </div>
                    <p className="text-sm">Drag & drop some images here, or click to select files.</p>
                    <div className="w-full flex justify-center">
                      <p className="xl:w-[70%] sm:text-[15px] text-sm">Please upload an image no larger than 5 MB and with a resolution of 1920 x 1080 pixels or less</p>
                    </div>
                    </>
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
                    <input onChange={(e) => setVName(e.target.value)} required id="vName" type="text" className="w-full p-2 rounded border font-light" />
                  </div>

                  {/* Vehicle licence plate */}
                  <div className="input font-semibold flex items-center gap-5">
                    <label htmlFor="vLicencePlate" className="w-[200px]">Licence plate <span className="text-red-600 font-bold">*</span></label>
                    <input onChange={(e) => setVPlate(e.target.value)} required id="vLicencePlate" type="text" className="w-full p-2 rounded border font-light" />
                  </div>

                  {/* Vehicle type */}
                  <div className="input font-semibold flex items-center gap-5">
                    <label htmlFor="vType" className="w-[200px]">Vehicle type <span className="text-red-600 font-bold">*</span></label>
                    <select onChange={(e) => setVType(e.target.value)} name="type" id="vType" className="w-full p-3 border rounded">
                      <option value="">Choose vehicle type</option>
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
                    <select onChange={(e) => setVStatus(e.target.value)} name="status" id="vStatus" className="bg-[#457B9D] w-full text-white p-3 border rounded">
                      <option value="Active">Active(Default)</option>
                    </select>
                  </div>

                  {/* Vehicle mileage */}
                  <div className="input font-semibold flex items-center gap-5">
                    <label htmlFor="vMileage" className="w-[200px]">Vehicle mileage <span className="text-red-600 font-bold">*</span></label>
                    <input onChange={(e) => setVMileage(e.target.value)} required id="vMileage" type="Number" maxLength={8} className="w-full p-2 rounded border font-light" />
                  </div>
                  
                </div>

                {/* register button */}
                {isLoading || uploadLoader ? 
                <button disabled className="transition-all my-5 px-24 p-2 bg-[#1D3557] text-white font-semibold rounded-full flex gap-3 items-center">Registering <Spinner className="fill-[#457B9D]  w-5 h-5" /></button>
                : 
                <button  type="submit" className="my-5 px-24 p-2 bg-[#1D3557] text-white font-semibold rounded-full transition-all">Register vehicle</button>
                }

              </div>

            </form>
          </div>
        </main>
    </div>
  )
}

export default AddVehicle