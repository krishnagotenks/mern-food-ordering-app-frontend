import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi"
import ManagaeRestaurantForm from "@/forms/manage-restaurant-form/ManagaeRestaurantForm"

const ManagaeRestaurantPage=()=>{
   const {createRestaurant,isLoading:isCreateLoading}=useCreateMyRestaurant();
   const {restaurant}=useGetMyRestaurant();
   const {updateRestaurant,isLoading:isUpdateLoading}=useUpdateMyRestaurant();

   const isEditing=!!restaurant

   return (
    <ManagaeRestaurantForm restaurant={restaurant} isLoading={isCreateLoading||isUpdateLoading} onSave={isEditing? updateRestaurant:createRestaurant}/>

   )
}
export default ManagaeRestaurantPage