import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

const ImageSection = () => {
  const { control, watch, setValue } = useFormContext();
  const [errorMessage, setErrorMessage] = useState("");

  const existingImageUrl = watch("imageUrl");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>, field: any) => {
    const file = event.target.files ? event.target.files[0] : null;

    // Validate image size and type
    if (file && (file.type !== "image/jpeg" && file.type !== "image/png")) {
      setErrorMessage("Only .jpg, .jpeg, and .png files are accepted.");
      return;
    }

    if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
      setErrorMessage("File size should not exceed 5MB.");
      return;
    }

    setErrorMessage(""); // Clear previous errors if valid
    field.onChange(file); // Use field.onChange to set the file in form state
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">Image</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will overwrite the existing one.
        </FormDescription>
      </div>

      <div className="flex flex-col gap-8 md:w-[50%]">
        {existingImageUrl ? (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              className="rounded-md object-cover h-full w-full"
              alt="Restaurant preview"
            />
          </AspectRatio>
        ) : (
          <p className="text-sm text-gray-500">No image uploaded yet.</p>
        )}
        
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="bg-white"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(event) => handleImageChange(event, field)} // Correct usage of field here
                />
              </FormControl>
              {errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        {existingImageUrl && (
          <Button
            variant="destructive"
            onClick={() => setValue("imageUrl", "")}
          >
            Remove Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageSection;
