import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { HotelType } from "../../../../Backend/src/shared/types";

type Props = {
  hotel?: HotelType; // Change this to HotelType
  onDelete: (hotelId: string) => void;
};

const DetailsSection = ({ hotel, onDelete }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();
  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this hotel?"
    );
    if (isConfirmed && hotel && hotel._id) {
      onDelete(hotel._id);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
        <button
          type="button"
          className="text-2xl bg-blue-700 p-2 text-center hover:bg-red-600 cursor-pointer font-bold text-white"
          onClick={handleDelete}
        >
          DELETE HOTEL
        </button>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          placeholder="Enter your name"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <div className="flex flex-col md:flex-row gap-5 ">
        <label className="text-gray-700 text-sm font-bold flex-1">
          City
          <input
            type="text"
            placeholder="Enter your city"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Country
          <input
            type="text"
            placeholder="Enter your country"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </label>
      </div>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          rows={6}
          placeholder="Enter your description"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-500">{errors.description.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Price per Night
        <input
          type="number"
          placeholder="Enter the price per Night"
          min={1}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors.pricePerNight && (
          <span className="text-red-500">{errors.pricePerNight.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Star Rating
        <select
          {...register("starRating", {
            required: "This field is required",
          })}
          className="border rounded w-full p-2 text-gray-700 font-normal"
        >
          <option value="" className="text-sm font-bold">
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-500">{errors.starRating.message}</span>
        )}
      </label>
    </div>
  );
};

export default DetailsSection;
