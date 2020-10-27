import React, { createContext, useContext, useState } from "react";
import {
  ShelfRow,
  Header,
  ContainerRow,
  Slider,
  Mask,
  Item,
  Image,
  SliderHandle,
  TrackContent,
  TrackContentSynopsis,
  TrackContentMeta,
  TrackContentMetaYear,
  TrackContentMetaGenre,
} from "./Shelf.styles";

type IShelfContext = {
  shelfHover: boolean;
  setShelfHover: (param: boolean) => void;
};

type IItemContext = {
  itemHover: boolean;
  setItemHover: (param: boolean) => void;
};

interface IShelfComposition {
  ShelfHeader: React.FC;
  ShelfContainerRow: React.FC;
  ShelfSlider: React.FC;
  ShelfSliderMask: React.FC;
  ShelfItem: React.FC;
  ShelfItemImage: React.FC;
  ShelfItemTrackContent: React.FC;
}

const ShelfContext = createContext<IShelfContext>({});
const ItemContext = createContext<IItemContext>({});

const Shelf: React.FC & IShelfComposition = ({ children, ...props }) => {
  const [shelfHover, setShelfHover] = useState(false);

  return (
    <ShelfContext.Provider value={{ shelfHover, setShelfHover }}>
      <ShelfRow {...props}>{children}</ShelfRow>
    </ShelfContext.Provider>
  );
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
  const [itemHover, setItemHover] = useState(false);
  const { setShelfHover } = useContext(ShelfContext);
  return (
    <ItemContext.Provider value={{ itemHover, setItemHover }}>
      <Item
        itemHover={itemHover}
        onMouseEnter={() => {
          setItemHover(true);
          setShelfHover(true);
        }}
        onMouseLeave={() => {
          setItemHover(false);
          setShelfHover(false);
        }}
        {...props}
      >
        {children}
      </Item>
    </ItemContext.Provider>
  );
};

const ShelfItemImage: React.FC = ({ children, ...props }) => {
  const { setShelfHover } = useContext(ShelfContext);
  return (
    <Image
      onMouseEnter={() => {
        setShelfHover(true);
      }}
      onMouseLeave={() => {
        setShelfHover(false);
      }}
      {...props}
    >
      {children}
    </Image>
  );
};

const ShelfItemTrackContent: React.FC = ({
  children,
  synopsis,
  year,
  genre,
  ...props
}) => {
  const { itemHover, setItemHover } = useContext(ItemContext);
  console.log(itemHover);
  return (
    <TrackContent
      itemHover={itemHover}
      onMouseEnter={() => setItemHover(true)}
      onMouseLeave={() => setItemHover(false)}
      {...props}
    >
      <TrackContentMeta>
        <TrackContentSynopsis>{synopsis}</TrackContentSynopsis>
      </TrackContentMeta>
      <TrackContentMeta>
        <TrackContentMetaYear>{year}</TrackContentMetaYear>
        <TrackContentMetaGenre>{genre}</TrackContentMetaGenre>
      </TrackContentMeta>
    </TrackContent>
  );
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
