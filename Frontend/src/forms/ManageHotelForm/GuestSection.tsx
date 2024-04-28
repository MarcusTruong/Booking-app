import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <div className="flex gap-10 bg-slate-400 px-8 py-6">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Adults
          <input
            type="number"
            min={1}
            className="border rounded w-full py-1 px-2 font-normal"
            placeholder="Number Adults"
            {...register("adultCount", {
              required: "This field is required",
            })}
          />
        </label>
        {errors.adultCount?.message && (
          <span className="text-red-500 text-sm font-bold">
            {errors.adultCount?.message}
          </span>
        )}
        <label className="text-gray-700 text-sm font-bold flex-1">
          Children
          <input
            type="number"
            min={0}
            className="border rounded w-full py-1 px-2 font-normal"
            placeholder="Number Childrens"
            {...register("childCount", {
              required: "This field is required",
            })}
          />
        </label>
        {errors.childCount?.message && (
          <span className="text-red-500 text-sm font-bold">
            {errors.childCount?.message}
          </span>
        )}
      </div>
    </div>
  );
};

export default GuestSection;
