import React, { FC, memo, useEffect, useState } from 'react';
import { Wrapper, FrontFace, BackFace } from "./styled";

export interface CardProps {
  id: number;
  name: string;
  img: string;
  fontImg: string;
  show: boolean;
  onClick: () => void;
  flipped: boolean;
}

const Card: FC<CardProps> = ({ id, name, img, fontImg, show, onClick, flipped }) => {
  return (
    <Wrapper hide={show}>
      <FrontFace fontImg={fontImg} onClick={!flipped ? onClick : undefined} flipped={flipped} />
      <BackFace flipped={flipped} img={img}/>
    </Wrapper>
  );
};

export default memo(Card);
