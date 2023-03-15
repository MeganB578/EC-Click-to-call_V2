import React from "react";

import { List, Button, Img, Text } from "components";

const NumberCount = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-[100px] md:gap-[40px] items-start justify-start w-[100%]">
          <List
            className="md:flex-1 sm:flex-col flex-row gap-[100px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[73%]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
              <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-[14px] rounded-[50%] shadow-bs w-[60px]">
                <Img
                  src="images/img_clock.svg"
                  className="h-[32px]"
                  alt="clock"
                />
              </Button>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-manrope text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  {props?.price}
                </Text>
                <Text
                  className="font-manrope font-semibold leading-[140.00%] text-bluegray_600 text-left tracking-[-0.40px]"
                  variant="body1"
                >
                  {props?.ownedfromPropertys}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
              <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-[14px] rounded-[50%] shadow-bs w-[60px]">
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[32px]"
                  alt="arrowdown Three"
                />
              </Button>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-manrope text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  {props?._25K}
                </Text>
                <Text
                  className="font-manrope font-semibold leading-[140.00%] md:max-w-[100%] max-w-[225px] text-bluegray_600 text-left tracking-[-0.40px]"
                  variant="body1"
                >
                  {props?.propertysforBuy}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
              <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-[14px] rounded-[50%] shadow-bs w-[60px]">
                <Img
                  src="images/img_reply.svg"
                  className="h-[32px]"
                  alt="reply"
                />
              </Button>
              <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                <Text
                  className="font-manrope text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  {props?.fiveHundred}
                </Text>
                <Text
                  className="font-manrope font-semibold leading-[140.00%] md:max-w-[100%] max-w-[225px] text-bluegray_600 text-left tracking-[-0.40px]"
                  variant="body1"
                >
                  {props?.dailycompleted}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-[100%]">
            <Button className="bg-white_A700 flex h-[60px] items-center justify-center p-[14px] rounded-[50%] shadow-bs w-[60px]">
              <Img
                src="images/img_search_orange_A700.svg"
                className="h-[32px]"
                alt="checkmark"
              />
            </Button>
            <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
              <Text
                className="font-manrope text-gray_900 text-left tracking-[-0.92px] w-[auto]"
                as="h2"
                variant="h2"
              >
                {props?.sixHundred}
              </Text>
              <Text
                className="font-manrope font-semibold text-bluegray_600 text-left tracking-[-0.40px] w-[auto]"
                variant="body1"
              >
                {props?.reagularClientsOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NumberCount.defaultProps = {
  price: "$15.4M",
  ownedfromPropertys: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
  _25K: "25K+",
  propertysforBuy: "Properties for Buy & sell Successfully",
  fiveHundred: "500",
  dailycompleted: "Daily completed transactions",
  sixHundred: "600+",
  reagularClientsOne: "Reagular Clients",
};

export default NumberCount;
