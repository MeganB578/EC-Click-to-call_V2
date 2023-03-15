import React from "react";

import { Text, Input, Button } from "components";

const SubscriptionCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start px-[200px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
            <Text
              className="font-manrope text-center text-gray_900 tracking-[-0.56px] w-[auto]"
              as="h4"
              variant="h4"
            >
              {props?.forRecentUpdateOne}
            </Text>
            <Text
              className="font-manrope font-normal leading-[180.00%] md:max-w-[100%] max-w-[600px] not-italic text-center text-gray_900"
              variant="body3"
            >
              {props?.wehelpsbusinessesOne}
            </Text>
          </div>
          <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start w-[100%]">
            <Input
              wrapClassName="bg-gray_52 flex-1 sm:flex-1 px-[16px] py-[13px] rounded-[10px] sm:w-[100%] w-[78%]"
              className="font-manrope font-semibold p-[0] placeholder:text-gray_700 text-[14px] text-gray_700 text-left w-[100%]"
              type="email"
              name="input"
              placeholder="Enter your Email"
            ></Input>
            <Button className="bg-gray_900 cursor-pointer sm:flex-1 font-manrope font-semibold min-w-[126px] sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-white_A700 sm:w-[100%] w-[auto]">
              {props?.subscribe}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

SubscriptionCard.defaultProps = {
  forRecentUpdateOne: "For Recent Update, News.",
  wehelpsbusinessesOne:
    "We helps businesses customize, automate and scale up their ad production and delivery.",
  subscribe: "Subscribe",
};

export default SubscriptionCard;
