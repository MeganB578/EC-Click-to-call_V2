import React from "react";

import LandingPageHeader from "components/LandingPageHeader";
import {
  Text,
  Input,
  Img,
  SelectBox,
  Button,
  GoogleMap,
  List,
} from "components";
import PropertyCard from "components/PropertyCard";
import PaginationCard from "components/PaginationCard";
import LandingPageFooter from "components/LandingPageFooter";

const ListingMapViewPage = () => {
  const propertyCardPropList = [
    { image: "images/img_image_260x384.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_16.png" },
    { image: "images/img_image_18.png" },
    { image: "images/img_image_19.png" },
    { image: "images/img_image_19.png" },
    { image: "images/img_image_20.png" },
    { image: "images/img_image_17.png" },
    { image: "images/img_image_17.png" },
  ];

  return (
    <>
      <div className="bg-gray_51 flex flex-col font-markoone gap-[100px] sm:gap-[40px] md:gap-[40px] items-start justify-start mx-[auto] self-stretch sm:w-[100%] md:w-[100%] w-[auto]">
        <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-center w-[100%]">
          <LandingPageHeader
            className="bg-white_A700 flex h-[80px] md:h-[auto] items-center justify-between px-[120px] md:px-[20px] py-[19px] w-[100%]"
            relasto="Relasto"
            home="Home"
            listing="Listing"
            agents="Agents"
            language="Property "
            otherspages="Blog"
            search="Search"
            log_In="Log in"
          />
          <div className="flex font-manrope items-center justify-start px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-center justify-center max-w-[1200px] mx-[auto] w-[100%]">
              <Text
                className="text-gray_900 text-left tracking-[-0.72px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Find Property
              </Text>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                  <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 h-[60px] md:h-[auto] items-start justify-start px-[16px] py-[14px] rounded-[10px] w-[100%]">
                    <Input
                      wrapClassName="flex sm:w-[100%] w-[auto]"
                      className="font-semibold p-[0] placeholder:text-gray_700 self-stretch text-[18px] text-gray_700 text-left w-[100%]"
                      name="frame1000001565"
                      placeholder="Enter your address"
                      suffix={
                        <Img
                          src="images/img_search_24X24.svg"
                          className="mt-[auto] mb-[3px] ml-[12px]"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-bluegray_100 border-solid font-bold px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_700 text-left w-[100%]"
                      placeholderClassName="text-gray_700"
                      name="dropdownlarge"
                      placeholder="Buy"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <SelectBox
                    className="bg-white_A700 border-[1px] border-bluegray_100 border-solid md:flex-1 font-bold px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_700 text-left md:w-[100%] w-[18%]"
                    placeholderClassName="text-gray_700"
                    name="price"
                    placeholder="$15000 - $18000"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                  <div className="flex flex-row gap-[20px] items-start justify-start w-[260px]">
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-bluegray_100 border-solid font-bold px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_700 text-left sm:w-[100%] w-[47%]"
                      placeholderClassName="text-gray_700"
                      name="dropdownlarge_One"
                      placeholder="Bed - 3"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_700.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button
                      className="bg-white_A700 border-[1px] border-bluegray_100 border-solid cursor-pointer flex items-center justify-center px-[16px] py-[18px] rounded-[10px] w-[100%]"
                      rightIcon={
                        <Img
                          src="images/img_plus_gray_700.svg"
                          className="mb-[1px] ml-[12px]"
                          alt="plus"
                        />
                      }
                    >
                      <div className="font-bold text-[18px] text-gray_700 text-left">
                        More
                      </div>
                    </Button>
                  </div>
                  <Button
                    className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[124px] px-[16px] py-[20px] rounded-[10px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_search_70X70.svg"
                        className="mt-[1px] mb-[3px] ml-[10px]"
                        alt="search"
                      />
                    }
                  >
                    <div className="font-bold text-[18px] text-left text-white_A700">
                      Search
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row flex-wrap gap-[10px] items-start justify-start max-w-[1200px] w-[100%]">
                  <Button
                    className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center px-[14px] py-[7px] rounded-[10px] w-[145px]"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="mt-[2px] mb-[1px] ml-[8px]"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-[14px] text-gray_700 text-left">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="mt-[1px] mb-[3px] ml-[8px]"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-[14px] text-gray_700 text-left">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="mt-[2px] mb-[1px] ml-[8px]"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-[14px] text-gray_700 text-left">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="mt-[1px] mb-[3px] ml-[8px]"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-[14px] text-gray_900 text-left">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
                    rightIcon={
                      <Img
                        src="images/img_close_16X16.svg"
                        className="mt-[2px] mb-[1px] ml-[8px]"
                        alt="close"
                      />
                    }
                  >
                    <div className="font-semibold text-[14px] text-gray_900 text-left">
                      New Construction
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-manrope items-center justify-center px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[60px] items-center justify-start max-w-[1200px] mx-[auto] w-[100%]">
              <div className="h-[428px] relative w-[100%]">
                <GoogleMap
                  className="h-[428px] m-[auto] rounded-[10px] w-[100%]"
                  showMarker={false}
                ></GoogleMap>
                <div
                  className="absolute bg-cover bg-no-repeat flex h-[max-content] inset-[0] items-end justify-center m-[auto] p-[67px] sm:px-[20px] md:px-[40px] w-[91%]"
                  style={{ backgroundImage: "url('images/img_group6842.svg')" }}
                >
                  <div className="bg-white_A700 border-[1px] border-gray_600 border-solid flex items-start justify-start mb-[15px] mt-[24px] px-[16px] py-[24px] rounded-[8px] w-[308px]">
                    <div className="flex flex-col gap-[21.66px] items-start justify-start w-[276px]">
                      <div className="flex flex-row gap-[9.63px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_eye.svg"
                          className="h-[19px] w-[19px]"
                          alt="eye"
                        />
                        <Text
                          className="flex-1 text-gray_900 text-left w-[auto]"
                          variant="body6"
                        >
                          2861 62nd Ave, Oakland, CA 94605
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[16.84px] grid items-start w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-[0] w-[100%]">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bookmark.svg"
                              className="h-[16px] w-[16px]"
                              alt="bookmark"
                            />
                            <Text
                              className="flex-1 text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              3 Bed Room
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_ticket_20X20.svg"
                              className="h-[16px] w-[16px]"
                              alt="ticket"
                            />
                            <Text
                              className="text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              1 Bath
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-[32.08px] items-center justify-between my-[0] w-[100%]">
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_icon_20X20.svg"
                              className="h-[16px] w-[16px]"
                              alt="icon"
                            />
                            <Text
                              className="flex-1 text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              1,032 sqft
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-[9.63px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_iocnmenu_16x16.svg"
                              className="h-[16px] w-[16px]"
                              alt="iocnmenu"
                            />
                            <Text
                              className="text-gray_700 text-left w-[auto]"
                              variant="body6"
                            >
                              Family
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="text-gray_900 text-left tracking-[-0.39px] w-[auto]"
                          variant="body2"
                        >
                          $649,900
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                  {propertyCardPropList.map((props, index) => (
                    <React.Fragment key={`PropertyCard${index}`}>
                      <PropertyCard
                        className="flex flex-1 flex-col h-[512px] md:h-[auto] items-start justify-start w-[100%]"
                        location="2861 62nd Ave, Oakland, CA 94605"
                        bedrooms="3 Bed Room"
                        bathrooms="1 Bath"
                        sqftCounter="1,032 sqft"
                        bath="Family"
                        view_Details="View Details"
                        price="$649,900"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <PaginationCard className="flex flex-row items-center justify-between w-[100%]" />
            </div>
          </div>
        </div>
        <LandingPageFooter
          className="bg-white_A700 flex items-center justify-center px-[120px] md:px-[20px] py-[80px] w-[100%]"
          relasto_One="Relasto"
          description_Two={
            <>
              59 Bervely Hill Ave, Brooklyn Town,
              <br />
              New York, NY 5630, CA, US
            </>
          }
          _6035550123="+(123) 456-7890"
          email="info@mail.com"
          features="Features"
          homev1HomevTwo="Home v1"
          homev1HomevTwo_One="Home v2"
          homev1HomevTwo_Two="About"
          homev1HomevTwo_Three="Contact"
          homev1HomevTwo_Four="Search"
          informations="Information"
          homev1HomevTwo_Five="Listing v1"
          homev1HomevTwo_Six="Listing v2"
          homev1HomevTwo_Seven="Property Details"
          homev1HomevTwo_Eight="Agent List"
          homev1HomevTwo_Nine="Agent Profile"
          language_Two="Documentation "
          homev1HomevTwo_Ten="Blog"
          homev1HomevTwo_Eleven="FAQ"
          homev1HomevTwo_Twelve="Privacy Policy"
          homev1HomevTwo_Thirteen="License"
          others="Others"
          homev1HomevTwo_Fourteen="Log in"
          homev1HomevTwo_Fifteen="Enter OTP"
          homev1HomevTwo_Sixteen="New Password"
          homev1HomevTwo_Seventeen="Reset Password"
          homev1HomevTwo_Eighteen="Create Account"
          staticmania2022="© 2022. All rights reserved."
        />
      </div>
    </>
  );
};

export default ListingMapViewPage;
