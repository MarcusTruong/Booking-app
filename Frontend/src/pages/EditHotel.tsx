import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import * as apiClient from "../api-client";

import { useAppContext } from "../contexts/AppContext";
import ManageHotelForm2 from "../forms/ManageHotelForm/ManageHotelForm2";

const EditHotel = () => {
  const { hotelId } = useParams();
  const { showToast } = useAppContext();
  const navigate = useNavigate();

  const { data: hotel } = useQuery(
    ["fetchMyHotelById", hotelId],
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  const saveMutation = useMutation(apiClient.updateMyHotelById, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  const deleteMutation = useMutation(
    () => apiClient.removeMyHotelById(hotelId || ""),
    {
      onSuccess: () => {
        showToast({ message: "Hotel Deleted!", type: "SUCCESS" });
        navigate("/my-hotels");
      },
      onError: () => {
        showToast({ message: "Error Deleting Hotel", type: "ERROR" });
      },
    }
  );

  const handleSave = (hotelFormData: FormData) => {
    saveMutation.mutate(hotelFormData);
  };

  const handleDelete = (id: string) => {
    deleteMutation.mutate();
  };

  return (
    <ManageHotelForm2
      hotel={hotel}
      onSave={handleSave}
      onDelete={handleDelete}
      isLoading={saveMutation.isLoading || deleteMutation.isLoading}
    />
  );
};

export default EditHotel;
