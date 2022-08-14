import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import styled, { keyframes, css } from "styled-components";
import Item from "../molecules/Item";
// interface itemProps{
//   category:number,
//   description: string,
//   imageUrl? : string,
//   imageUrls : string[],
//   title : string,
//   _id : string,
// }
// interface itemProps{
//   [key : string ]: string | boolean | number | number[] ;

// }

interface flexProps {
  opacity?: number;
  transition?: string;
  mount?: boolean;
}
const FlexBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  opacity: 0;
  &::-webkit-scrollbar {
    width: 30%;
    height: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #ccc;
  }
  transition: all 0.5s linear;
  opacity: ${({ mount }: flexProps) => (mount ? "1" : "0")};
  pointer-events: ${({ mount }: flexProps) => (mount ? "auto" : "none")};
  cursor: pointer;
`;

const AnimationItemList = ({ items, lastIndexRef, aniMode }: any) => {
  const [mount, setMount] = useState(false);
  const [visible, setVisible] = useState(true);
  const flexBoxRef = useRef<HTMLDivElement>();
  const lastIndex = items.length - 1;

  useEffect(() => {
    if (aniMode) {

      setMount(true);
    }
    if (!aniMode) {
      setMount(false);
    }
  }, [aniMode]);
 
  const renderItems = (mount) => (
    <FlexBox ref={flexBoxRef} mount={mount}>
      {items.map((item, index) => (
        <React.Fragment key={item.title || item.name}>
          <Item
            lastIndexRef={index === lastIndex ? lastIndexRef : null}
            item={item}
          />
        </React.Fragment>
      ))}
    </FlexBox>
  );

  return <>{renderItems(mount)}</>;
};

export default AnimationItemList;
