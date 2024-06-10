import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SignOutButton from "./SignOutButton";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  const {
    data: currentUser,
  } = useQuery("fetchCurrentUser", apiClient.fetchCurrentUser);
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>
        <span className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded-sm"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600 rounded-sm"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <Link
                to={`/my-information/${currentUser?._id}`}
                className="text-white rounded-full px-2 bg-blue-600 text-2xl text-center "
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
              <SignOutButton />
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="flex items-center text-blue-600 bg-white border-blue-600 px-3 rounded-md font-bold hover:bg-gray-100"
              >
                Register
              </Link>

              <Link
                to="/sign-in"
                className="flex items-center text-blue-600 bg-white border-blue-600 px-3 rounded-md font-bold hover:bg-gray-100"
              >
                Sign In
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
1;
