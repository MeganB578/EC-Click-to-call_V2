import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const AgentCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.rectangle5615}
          className="h-[282px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
          alt="Rectangle5615"
        />
        <div className="bg-white_A700 border-[1px] border-bluegray_100 border-solid flex items-start justify-start px-[20px] py-[14px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <Text
              className="font-manrope font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
              variant="body1"
            >
              {props?.brunoFernandes}
            </Text>
            <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
              <div className="flex flex-row items-center justify-evenly w-[40%]">
                <Img
                  src="images/img_star_gray_900.svg"
                  className="h-[16px] w-[16px]"
                  alt="star"
                />
                <Img
                  src="images/img_star_gray_900.svg"
                  className="h-[16px] w-[16px]"
                  alt="star One"
                />
                <Img
                  src="images/img_star_gray_900.svg"
                  className="h-[16px] w-[16px]"
                  alt="star Two"
                />
                <Img
                  src="images/img_star_gray_900.svg"
                  className="h-[16px] w-[16px]"
                  alt="star Three"
                />
                <Img
                  src="images/img_star_gray_600.svg"
                  className="h-[16px] w-[16px]"
                  alt="star Four"
                />
              </div>
              <Text
                className="flex-1 font-manrope font-semibold text-gray_900 text-left w-[auto]"
                variant="body4"
              >
                {props?.reviewCounter}
              </Text>
            </div>
            <Button
              className="common-pointer border-[1px] border-bluegray_100 border-solid cursor-pointer font-manrope font-semibold sm:px-[20px] px-[24px] py-[16px] rounded-[10px] text-[16px] text-center text-gray_900 w-[100%]"
              onClick={() => navigate("/agentprofile")}
            >
              {props?.viewprofile}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

AgentCard.defaultProps = {
  rectangle5615: "images/img_rectangle5615_282x282.png",
  brunoFernandes: "Bruno Fernandes",
  reviewCounter: "4.5 review",
  viewprofile: "View Profile",
};

export default AgentCard;
