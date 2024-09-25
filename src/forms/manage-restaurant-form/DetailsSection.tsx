import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import { useFormContext } from "react-hook-form";
  
  const DetailsSection = () => {
    const { control } = useFormContext();
    return (
      <div className="space-y-6 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Details</h2>
          <FormDescription className="text-gray-600">
            Enter the details about your restaurant
          </FormDescription>
        </div>
  
        <FormField
          control={control}
          name="restaurantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <div className="flex gap-4">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-gray-700 font-medium">City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="text-gray-700 font-medium">Country</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
  
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="max-w-[25%]">
              <FormLabel className="text-gray-700 font-medium">Delivery price (£)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="1.50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
  
        <FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <FormItem className="max-w-[25%]">
              <FormLabel className="text-gray-700 font-medium">Estimated Delivery Time (minutes)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  
  export default DetailsSection;
  