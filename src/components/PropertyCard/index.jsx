import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const PropertyCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.image}
          className="h-[260px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
          alt="image"
        />
        <div className="bg-gray_51 border-[1px] border-red_101 border-solid flex items-start justify-start px-[20px] py-[30px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
          <div className="flex flex-col gap-[27px] items-start justify-start w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
              <Img
                src="images/img_eye.svg"
                className="h-[24px] w-[24px]"
                alt="eye"
              />
              <Text
                className="flex-1 font-manrope font-semibold text-gray_900 text-left w-[auto]"
                variant="body4"
              >
                {props?.location}
              </Text>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_bookmark.svg"
                    className="h-[20px] w-[20px]"
                    alt="bookmark"
                  />
                  <Text
                    className="flex-1 font-manrope font-semibold text-gray_700 text-left w-[auto]"
                    variant="body4"
                  >
                    {props?.bedrooms}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_ticket_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="ticket"
                  />
                  <Text
                    className="font-manrope font-semibold text-gray_700 text-left w-[auto]"
                    variant="body4"
                  >
                    {props?.bathrooms}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[40px] items-center justify-between w-[100%]">
                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_icon_20X20.svg"
                    className="h-[20px] w-[20px]"
                    alt="icon"
                  />
                  <Text
                    className="flex-1 font-manrope font-semibold text-gray_700 text-left w-[auto]"
                    variant="body4"
                  >
                    {props?.sqftCounter}
                  </Text>
                </div>
                <div className="flex flex-1 flex-row gap-[12px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[20px] w-[20px]"
                    alt="settings"
                  />
                  <Text
                    className="font-manrope font-semibold text-gray_700 text-left w-[auto]"
                    variant="body4"
                  >
                    {props?.bath}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[31px] items-center justify-start w-[100%]">
              <Button
                className="common-pointer bg-gray_900 cursor-pointer flex-1 font-manrope font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 w-[100%]"
                onClick={() => navigate("/propertydetails")}
              >
                {props?.view_Details}
              </Button>
              <Text
                className="flex-1 font-bold font-manrope text-gray_900 text-left tracking-[-0.48px] w-[auto]"
                as="h5"
                variant="h5"
              >
                {props?.price}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyCard.defaultProps = {
  image: "images/img_image_260x384.png",
  location: "2861 62nd Ave, Oakland, CA 94605",
  bedrooms: "3 Bed Room",
  bathrooms: "1 Bath",
  sqftCounter: "1,032 sqft",
  bath: "Family",
  view_Details: "View Details",
  price: "$649,900",
};

export default PropertyCard;
