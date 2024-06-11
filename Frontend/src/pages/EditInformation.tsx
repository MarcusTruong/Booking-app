import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
export type UserType = {
  _id: any;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  location?: string;
  about?: string;
};

const EditInformation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const {
    data: currentUser,
    isLoading: isFetching,
    isError,
  } = useQuery<UserType>("fetchCurrentUser", apiClient.fetchCurrentUser);

  const [location, setLocation] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  useEffect(() => {
    if (currentUser) {
      setLocation(currentUser.location || "");
      setAbout(currentUser.about || "");
    }
  }, [currentUser]);

  const mutation = useMutation(apiClient.updateUserInformation, {
    onSuccess: () => {
      queryClient.invalidateQueries("fetchCurrentUser");
      showToast({
        message: "Information updated successfully!",
        type: "SUCCESS",
      });
      navigate("/my-information");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = { location, about };
    mutation.mutate({ userId: currentUser!._id, userData: updatedData });
  };

  if (isFetching) return <div className="text-3xl font-bold">Loading...</div>;
  if (isError) return <div>Error fetching user information</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl font-bold mb-4">Edit Information</h1>
      </div>
      <hr className="my-4 border-blue-gray-50" />

      <form onSubmit={handleSubmit}>
        <div className="mr-4 flex gap-2">
          <p className="font-bold">Name:</p>
          <p>{currentUser?.firstName + " " + currentUser?.lastName}</p>
        </div>
        <hr className="my-4 border-blue-gray-50" />

        <div className="mr-4 flex gap-2">
          <p className="font-bold">Email:</p>
          <p>{currentUser?.email}</p>
        </div>
        <hr className="my-4 border-blue-gray-50" />

        <div className="col-span-full">
          <label
            htmlFor="location"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Location
          </label>
          <div className="mt-2">
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <hr className="my-4 border-blue-gray-50" />

        <div className="col-span-full">
          <label
            htmlFor="about"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            About
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              rows={3}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <hr className="my-4 border-blue-gray-50" />

        <span className="flex justify-end">
          <button
            disabled={mutation.isLoading}
            type="submit"
            className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl disabled:bg-gray-500"
          >
            {mutation.isLoading ? "Saving..." : "Save"}
          </button>
        </span>
      </form>
    </div>
  );
};

export default EditInformation;
