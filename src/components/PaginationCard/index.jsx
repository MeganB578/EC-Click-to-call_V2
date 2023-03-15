import React from "react";

import { Button, Img } from "components";

const PaginationCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[5px] items-start justify-start self-stretch w-[auto]">
          <Button className="border-[1px] border-gray_700 border-solid cursor-pointer font-manrope font-semibold h-[48px] px-[18px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[48px]">
            {props?.one}
          </Button>
          <Button className="border-[1px] border-bluegray_102 border-solid cursor-pointer font-manrope font-semibold h-[48px] px-[18px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[48px]">
            {props?.two}
          </Button>
          <Button className="border-[1px] border-bluegray_102 border-solid cursor-pointer font-manrope font-semibold h-[48px] px-[18px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[48px]">
            {props?.three}
          </Button>
          <Button className="border-[1px] border-bluegray_102 border-solid cursor-pointer font-manrope font-semibold h-[48px] px-[18px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[48px]">
            {props?.four}
          </Button>
          <Button className="border-[1px] border-bluegray_102 border-solid cursor-pointer font-manrope font-semibold h-[48px] px-[18px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[48px]">
            {props?.five}
          </Button>
        </div>
        <Button
          className="border-[1px] border-bluegray_102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[18px] py-[16px] rounded-[10px] w-[auto]"
          rightIcon={
            <Img
              src="images/img_arrowright_16X16.svg"
              className="my-[16px]"
              alt="arrow_right"
            />
          }
        >
          <div className="font-manrope font-semibold text-[16px] text-gray_900 text-left">
            {props?.nextpage}
          </div>
        </Button>
      </div>
    </>
  );
};

PaginationCard.defaultProps = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  nextpage: "Next Page",
};

export default PaginationCard;
