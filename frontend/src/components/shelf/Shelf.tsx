import React from "react";
import {
  ShelfRow,
  Header,
  ContainerRow,
  Slider,
  Mask,
  Item,
  Image,
  SliderHandle,
} from "./Shelf.styles";

interface IShelfComposition {
  ShelfHeader: React.FC;
  ShelfContainerRow: React.FC;
  ShelfSlider: React.FC;
  ShelfSliderMask: React.FC;
  ShelfItem: React.FC;
  ShelfItemImage: React.FC;
  ShelfItemTrackContent: React.FC;
}

const Shelf: React.FC & IShelfComposition = ({ children, ...props }) => {
  return <ShelfRow {...props}>{children}</ShelfRow>;
};

const ShelfHeader: React.FC = ({ children, ...props }) => {
  return <Header {...props}>{children}</Header>;
};

const ShelfContainerRow: React.FC = ({ children, ...props }) => {
  return <ContainerRow {...props}>{children}</ContainerRow>;
};

const ShelfSlider: React.FC = ({ children, ...props }) => {
  return (
    <>
      <Slider {...props}>{children}</Slider>
      <SliderHandle />
    </>
  );
};

const ShelfSliderMask: React.FC = ({ children, ...props }) => {
  return <Mask {...props}>{children}</Mask>;
};

const ShelfItem: React.FC = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>;
};

const ShelfItemImage: React.FC = ({ children, ...props }) => {
  return <Image {...props}>{children}</Image>;
};

const ShelfItemTrackContent: React.FC = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

// const ShelfSliderHandle: React.FC = ({ children, ...props }) => {
//   return <div {...props}>{children}</div>;
// };

Shelf.ShelfHeader = ShelfHeader;
Shelf.ShelfContainerRow = ShelfContainerRow;
Shelf.ShelfSlider = ShelfSlider;
Shelf.ShelfSliderMask = ShelfSliderMask;
Shelf.ShelfItem = ShelfItem;
Shelf.ShelfItemImage = ShelfItemImage;
Shelf.ShelfItemTrackContent = ShelfItemTrackContent;
// Shelf.ShelfSliderHandle = ShelfItemTrackContent;

export default Shelf;
