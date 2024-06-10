import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";

const Information = () => {
  const {
    data: currentUser,
    isLoading,
    isError,
  } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser);
  console.log(currentUser);

  if (isLoading) return <div className="text-3xl font-bold">Loading...</div>;
  if (isError) return <div>Error fetching user information</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl font-bold mb-4">Profile Information</h1>
        <Link to={"/edit-information"}>
          <Tooltip content="Edit Profile">
            <PencilIcon className="h-6 w-6 mb-4 cursor-pointer text-back" />
          </Tooltip>
        </Link>
      </div>
      <hr className="my-4 border-blue-gray-50" />

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

      <div className="mr-4 flex gap-2">
        <p className="font-bold">Location:</p>
        <p>{currentUser?.location}</p>
      </div>
      <hr className="my-4 border-blue-gray-50" />

      <div className="mr-4 flex gap-2">
        <p className="font-bold">About:</p>
        <p>{currentUser?.about}</p>
      </div>
      <hr className="my-4 border-blue-gray-50" />
    </div>
  );
};

export default Information;
