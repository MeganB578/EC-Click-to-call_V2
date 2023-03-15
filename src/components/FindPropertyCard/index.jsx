import React from "react";

import { Text, Input, Img, SelectBox, Button } from "components";

const FindPropertyCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-manrope text-gray_900 text-left tracking-[-0.72px] w-[auto]"
          as="h3"
          variant="h3"
        >
          {props?.findProperty}
        </Text>
        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
          <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
            <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex flex-1 h-[60px] md:h-[auto] items-start justify-start px-[16px] py-[14px] rounded-[10px] w-[100%]">
              <Input
                wrapClassName="flex sm:w-[100%] w-[auto]"
                className="font-manrope font-semibold p-[0] placeholder:text-gray_700 self-stretch text-[18px] text-gray_700 text-left w-[100%]"
                name="Frame1000001565"
                placeholder="Enter your address"
                suffix={
                  <Img
                    src="images/img_search_24X24.svg"
                    className="ml-[12px] my-[4px]"
                    alt="search"
                  />
                }
              ></Input>
            </div>
            <div className="flex sm:flex-1 items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <SelectBox
                className="bg-white_A700 border-[1px] border-bluegray_100 border-solid font-bold font-manrope px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_700 text-left w-[100%]"
                placeholderClassName="text-gray_700"
                name="DropdownLarge"
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
              className="bg-white_A700 border-[1px] border-bluegray_100 border-solid md:flex-1 font-bold font-manrope px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_700 text-left md:w-[100%] w-[18%]"
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
            <SelectBox
              className="bg-white_A700 border-[1px] border-bluegray_100 border-solid md:flex-1 font-bold font-manrope px-[16px] py-[18px] rounded-[10px] text-[18px] text-gray_700 text-left md:w-[100%] w-[11%]"
              placeholderClassName="text-gray_700"
              name="DropdownLarge One"
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
              className="bg-white_A700 border-[1px] border-bluegray_100 border-solid cursor-pointer flex items-center justify-center min-w-[113px] px-[16px] py-[18px] rounded-[10px] w-[auto]"
              rightIcon={
                <Img
                  src="images/img_plus_gray_700.svg"
                  className="ml-[12px] mr-[16px] my-[18px]"
                  alt="plus"
                />
              }
            >
              <div className="font-bold font-manrope text-[18px] text-gray_700 text-left">
                {props?.more}
              </div>
            </Button>
            <Button
              className="bg-gray_900 cursor-pointer flex items-center justify-center min-w-[124px] px-[16px] py-[20px] rounded-[10px] w-[auto]"
              rightIcon={
                <Img
                  src="images/img_search_70X70.svg"
                  className="ml-[10px] mr-[16px] my-[20px]"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-[18px] text-left text-white_A700">
                {props?.searchTwo}
              </div>
            </Button>
          </div>
          <div className="flex flex-row flex-wrap gap-[10px] items-start justify-start max-w-[1200px] w-[100%]">
            <Button
              className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center px-[14px] py-[7px] rounded-[10px] w-[145px]"
              rightIcon={
                <Img
                  src="images/img_close_16X16.svg"
                  className="ml-[8px] mr-[14px] my-[10px]"
                  alt="close"
                />
              }
            >
              <div className="font-manrope font-semibold text-[14px] text-gray_700 text-left">
                {props?.bathrooms2}
              </div>
            </Button>
            <Button
              className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[243px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
              rightIcon={
                <Img
                  src="images/img_close_16X16.svg"
                  className="ml-[8px] mr-[14px] my-[10px]"
                  alt="close"
                />
              }
            >
              <div className="font-manrope font-semibold text-[14px] text-gray_700 text-left">
                {props?.squarefeet7502000Sqft}
              </div>
            </Button>
            <Button
              className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[151px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
              rightIcon={
                <Img
                  src="images/img_close_16X16.svg"
                  className="ml-[8px] mr-[14px] my-[10px]"
                  alt="close"
                />
              }
            >
              <div className="font-manrope font-semibold text-[14px] text-gray_700 text-left">
                {props?.yearbuilt5Fifteen}
              </div>
            </Button>
            <Button
              className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[168px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
              rightIcon={
                <Img
                  src="images/img_close_16X16.svg"
                  className="ml-[8px] mr-[14px] my-[10px]"
                  alt="close"
                />
              }
            >
              <div className="font-manrope font-semibold text-[14px] text-gray_900 text-left">
                {props?.forsalebyagent}
              </div>
            </Button>
            <Button
              className="border-[1px] border-bluegray_101 border-solid cursor-pointer flex items-center justify-center min-w-[174px] px-[14px] py-[7px] rounded-[10px] w-[auto]"
              rightIcon={
                <Img
                  src="images/img_close_16X16.svg"
                  className="ml-[8px] mr-[14px] my-[10px]"
                  alt="close"
                />
              }
            >
              <div className="font-manrope font-semibold text-[14px] text-gray_900 text-left">
                {props?.newconstruction}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FindPropertyCard.defaultProps = {
  findProperty: "Find Property",
  more: "More",
  searchTwo: "Search",
  bathrooms2: "Bathrooms 2+",
  squarefeet7502000Sqft: "Square Feet 750 - 2000 sq. ft",
  yearbuilt5Fifteen: "Year Built 5 - 15",
  forsalebyagent: "For Sale By Agent",
  newconstruction: "New Construction",
};

export default FindPropertyCard;
