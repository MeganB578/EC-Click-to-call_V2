import React from "react";

import { Img, Text } from "components";

const TeamMemberCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.rectangle5596}
          className="h-[282px] md:h-[auto] object-cover rounded-[10px] w-[100%]"
          alt="Rectangle5596"
        />
        <div className="flex flex-col items-start justify-start w-[100%]">
          <Text
            className="font-manrope font-semibold text-gray_900 text-left tracking-[-0.40px] w-[auto]"
            variant="body1"
          >
            {props?.kausarPialOne}
          </Text>
          <Text
            className="font-manrope font-normal not-italic text-gray_700 text-left w-[auto]"
            variant="body3"
          >
            {props?.cEO}
          </Text>
        </div>
      </div>
    </>
  );
};

TeamMemberCard.defaultProps = {
  rectangle5596: "images/img_rectangle5596_282x282.png",
  kausarPialOne: "Kausar Pial",
  cEO: "CEO",
};

export default TeamMemberCard;
