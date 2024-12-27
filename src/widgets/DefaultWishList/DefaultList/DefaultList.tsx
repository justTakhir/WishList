import React from "react";
import { WishListItem } from "../../../pages/WishList/WishList";
import { DefaultListItem } from "../DefaultListItem/DefaultListItem";

type DefaultListProps = {
  items: WishListItem[]; 
}

export const DefaultList: React.FC<DefaultListProps> = ({items}) => {
  return (
    <div className="default-list__wrapper">
      {items.map(item => (
        <DefaultListItem item={item}  />
      ))}
    </div>
  )
}