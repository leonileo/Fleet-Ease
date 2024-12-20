/* eslint-disable react/prop-types */
import { Spinner } from "flowbite-react"
import { BsTrash } from "react-icons/bs"
import { useDeleteVehicleMutation } from "../slices/vehicleSlice"
import { toast } from 'sonner'
import { PiWarningCircle } from "react-icons/pi"

const DeleteComponent = ({ vehicle, setDeleteModal }) => {
    // states 
    const vName = vehicle.vehicleName;

    const [deleteVehicle, { isLoading }] = useDeleteVehicleMutation(); 
    
    // Function to delete vehicle
    const remove = async () => {
        try {
            const res = await deleteVehicle({vehicleID: vehicle._id}).unwrap();
            toast.success(res.message)
            setTimeout(() => {
                location.reload()
            }, (500));

        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }

  return (
    <div>
        <div className='bg-[rgba(0,0,0,.9)] rounded sm:p-10 xl:px-20 p-5 min-h-[100vh] py-0 relative flex items-center justify-center'>
            <div className="space-y-5 bg-gray-50 text-white xl:w-[40%] xl:min-h-[15vh] rounded-lg flex items-center justify-center">
                <div className="px-5 space-y-4">
                    <div className="flex items-center justify-center text-[#1E1E1E]"><PiWarningCircle className="w-10 h-10" /></div>
                    <p className="text-xl text-[#1D3557] text-center">Delete <b>{vName}</b> ?</p>
                    <div className="btns flex gap-3 my-5">
                        {isLoading ?
                         <button disabled className="p-2 px-8 rounded-full bg-red-400 flex gap-2 items-center justify-center ">Removing ... <Spinner className="w-4 fill-[#1D3557]" /> </button>
                         : <button onClick={remove} className="p-2 px-9 rounded-full bg-red-400 hover:bg-red-500 transition-all flex gap-2 items-center">Confirm <BsTrash /> </button>
                          }
                        <button onClick={() => setDeleteModal(false)} className="p-2 px-5 rounded-full bg-blue-400 hover:bg-blue-500 transition-all">Cancel </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteComponent