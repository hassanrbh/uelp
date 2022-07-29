import React, { useState } from "react";
import { useQuery } from "react-query";
import client from "../../../services/react-query";
import amentyService from "../../../services/amenty.service";
import Loading from "../../reusableComponents/Loading";
import SetEmogies from "./setEmogies";
import MoreAmenties from "./MoreAmenties";
import Divider from "../../reusableComponents/Dividor"
import {useParams} from "react-router-dom"


const Amenties = () => {
  const { business_name } = useParams();
  const { data, isLoading, isSuccess, error, isError } = useQuery(
    ["amentys_for", business_name],
    () => amentyService.getIndex(business_name)
  );
  const [toggle, setToggle] = useState(false);

  if (isLoading) return <Loading />;
  if (isError) return <div>{error}</div>;

  const CapitalizeWords = (str) => {
    const words = str.split(" ");
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  };

  return isSuccess ? (
    <div>
      <h1 className="font-bold text-[1.25rem] mb-4">Amenties and More</h1>
      <div className="grid grid-cols-2 gap-3">
        {Object.keys(data.amenties)
          .slice(0, 4)
          .map((item, _) => (
            <div key={_} className={`text-[17px] font-medium flex ${data.amenties[item] === false ? "text-[rgba(110,112,114,1)]" : null}`}>
              <SetEmogies item={item} data={data.amenties} className="h-6 w-6 mr-3" classNameNo="h-6 w-6 mr-3 text-[rgba(110,112,114,1)]"/>
              {CapitalizeWords(item.replace(/[|&;$_%@"<>()+,]/g, " "))}
            </div>
          ))}
        {toggle ? (
          <>
            {Object.keys(data.amenties)
              .slice(4, -1)
              .map((item, _) => (
                <div key={_} className={`text-[16px] font-[600] flex ${data.amenties[item] === false ? "text-[rgba(110,112,114,1)]" : null}`}>
                  <SetEmogies item={item} data={data.amenties}  className="h-6 w-6 mr-3" classNameNo="h-6 w-6 mr-3 text-[rgba(110,112,114,1)]"/>
                  {CapitalizeWords(item.replace(/[|&;$_%@"<>()+,]/g, " "))}
                </div>
              ))}
          </>
        ) : null}
      </div>
      <MoreAmenties
        count={Object.keys(data.amenties).slice(4, -1).length}
        setToggle={setToggle}
        toggle={toggle}
      />
      <Divider />
    </div>
  ) : null;
};

export default Amenties;
