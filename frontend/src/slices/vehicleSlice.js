import { VEHICLE_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const vehicleApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        dashboard: builder.query({
            query: () => ({
                url: `${VEHICLE_URL}dashboard`,
            })
        }),
        addVehicle: builder.mutation({
            query: (data) => ({
                url: `${VEHICLE_URL}dashboard/add-vehicle`,
                method: 'POST',
                body: data
            })
        }),
        updateVehicle: builder.mutation({
            query: (data) => ({
                url: `${VEHICLE_URL}dashboard/${data.id}`,
                method: 'PUT',
                data: data
            })
        }),
        deleteVehicle: builder.mutation({
            query: (vehicleId) => ({
                url: `${VEHICLE_URL}dashboard/${vehicleId}`,
                method: 'DELETE',
            })
        }),
        uploadImage: builder.mutation({
            query: (data) => ({
                url: `api-v1/upload`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { 
    useDashboardQuery,
    useAddVehicleMutation,
    useUpdateVehicleMutation,
    useDeleteVehicleMutation,
    useUploadImageMutation
} = vehicleApiSlice;