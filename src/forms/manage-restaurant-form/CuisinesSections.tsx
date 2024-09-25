import {
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";
  import { cuisineList } from "@/config/restaurant-options-config";
  import { useFormContext } from "react-hook-form";
  import CuisineCheckbox from "./CuisineCheckbox";
  
  const CuisinesSection = () => {
    const { control } = useFormContext();
  
    return (
      <div className="space-y-6 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Cuisines</h2>
          <FormDescription className="text-gray-600">
            Select the cuisines that your restaurant serves
          </FormDescription>
        </div>
  
        <FormField
          control={control}
          name="cuisines"
          render={({ field }) => (
            <FormItem>
              <div className="grid md:grid-cols-4 gap-4">
                {cuisineList.map((cuisineItem) => (
                  <CuisineCheckbox key={cuisineItem} cuisine={cuisineItem} field={field} />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  
  export default CuisinesSection;
  