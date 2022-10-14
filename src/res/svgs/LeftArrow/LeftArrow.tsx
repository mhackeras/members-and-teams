import React from "react";
import Svg, { Path } from "react-native-svg";

const LeftArrow = () => {
  return (
    <Svg width="21" height="14" viewBox="0 0 21 14" fill="none">
      <Path
        d="M6.83333 1L1 6.83333M1 6.83333H19.6667M1 6.83333L6.83333 12.6667"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
