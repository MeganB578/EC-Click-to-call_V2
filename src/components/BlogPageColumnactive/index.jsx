import React from "react";

import { Img, Button, Text } from "components";
import { useNavigate } from "react-router-dom";

const BlogPageColumnactive = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
          <Img
            src="images/img_rectangle5617_350x384.png"
            className="h-[350px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
            alt="rectangle5617"
          />
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <Button className="border-[1px] border-bluegray_100 border-solid cursor-pointer font-manrope font-semibold min-w-[89px] px-[14px] py-[8px] rounded-[10px] text-[14px] text-center text-gray_900 w-[auto]">
              {props?.business}
            </Button>
            <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
              <Text
                className="font-bold font-manrope leading-[135.00%] md:max-w-[100%] max-w-[384px] text-gray_900 text-left tracking-[-0.48px]"
                as="h5"
                variant="h5"
              >
                {props?.delightfuldin_One}
              </Text>
              <div className="flex flex-row gap-[24px] items-start justify-start pr-[184px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                <div className="flex flex-row gap-[6px] items-center justify-start pr-[2px] pt-[2px] w-[44%]">
                  <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                  <Text
                    className="font-manrope text-gray_600 text-left w-[auto]"
                    variant="body7"
                  >
                    {props?.july202022}
                  </Text>
                </div>
                <div className="flex flex-row gap-[6px] items-center justify-center w-[44%]">
                  <div className="bg-bluegray_100 h-[5px] my-[6px] rounded-[2px] w-[5px]"></div>
                  <Text
                    className="font-manrope mr-[17px] text-gray_600 text-left w-[auto]"
                    variant="body7"
                  >
                    {props?.time}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
          <Text
            className="font-bold font-manrope text-gray_600 text-left w-[auto]"
            variant="body3"
          >
            {props?.active}
          </Text>
          <Img
            src="images/img_arrowright_1.svg"
            className="common-pointer h-[24px] w-[24px]"
            onClick={() => navigate("/blogdetails")}
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

BlogPageColumnactive.defaultProps = {
  business: "Business",
  delightfuldin_One: "10 Delightful Dining Room Decor Trends for Spring",
  july202022: "July 20, 2022",
  time: "7 min read",
  active: "Continue Reading",
};

export default BlogPageColumnactive;
