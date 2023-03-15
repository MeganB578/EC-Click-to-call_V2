import React from "react";

import { Img, Text } from "components";

const ArticleCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src={props?.thumbnail}
          className="h-[100%] md:h-[350px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
          alt="image Thirteen"
        />
        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
          <Text
            className="font-bold font-manrope leading-[135.00%] md:max-w-[100%] max-w-[384px] text-left text-white_A700 tracking-[-0.48px]"
            as="h5"
            variant="h5"
          >
            {props?.title}
          </Text>
          <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[384px]">
            <Text
              className="font-bold font-manrope text-deep_orange_400 text-left w-[auto]"
              variant="body3"
            >
              Read the Article
            </Text>
            <Img
              src="images/img_arrowright_24X24.svg"
              className="h-[24px] w-[24px]"
              alt="arrowright One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ArticleCard.defaultProps = {
  thumbnail: "images/img_image_350x384.png",
  title: "9 Easy-to-Ambitious DIY Projects to Improve Your Home",
};

export default ArticleCard;
