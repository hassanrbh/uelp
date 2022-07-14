import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import client from "../../services/react-query";
import { useQuery } from "react-query";
import UserService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

import UserProfile from "./UserProfile/UserProfile";

const Yelper = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [AnonymousUser, setAnonymousUser] = useState(undefined);
  const [isFetchingAnonymousUser, setFetchingAnonymousUser] = useState(false);
  const currentUser = client.getQueryData(["currentUser"]);
  const { isSuccess, isLoading, error, data } = useQuery(
    "AnonymousUser",
    () => UserService.getAnonymousUser(searchParams.get("username")),
    {
      onSuccess: (data) => {
        setAnonymousUser(data);
      },
      onError: (error) => {
        if (error.response.status === 404) {
          return navigate("/profile/nonexisted", {
            replace: true,
            state: {
              errors: error.response.data.errors.message,
            },
          });
        }
      },
      enabled: isFetchingAnonymousUser,
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: Infinity,
    }
  );

  // check if the yelper is who already owner of this session to prevent sending another request for the currentUser
  useEffect(() => {
    if (currentUser?.username !== searchParams.get("username")) {
      return setFetchingAnonymousUser(true);
    }
    return setFetchingAnonymousUser(false);
  }, [searchParams, currentUser]);

  return (
    <>
      <div className="bg-[#f5f5f5] h-[195px]">
        <div className="container mx-auto px-[195px]">
          <UserProfile
            user={
              searchParams.get("username") !== currentUser?.username
                ? AnonymousUser
                : currentUser
            }
          />
        </div>
      </div>
    </>
  );
};

export default Yelper;
