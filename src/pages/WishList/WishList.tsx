import React, { useEffect, useState } from "react";
import { TierList } from "../../widgets/TierWishList/TierList/TierList";
import { DefaultList } from "../../widgets/DefaultWishList/DefaultList/DefaultList";

enum WishListMode {
  TierList, DefaultList
}

// type TierListRow = {

// };


/** Желаемыми могут быть как абстрактные предметы, так и более конкретные, вплоть до прикрепления ссылки на лот интернет-магазине */
export type WishListItem = {
  title?: string;
  description?: string;
  image?: React.ReactElement; // ? maybe this must be something other
  /** Ссылка н */
  sourceUrl?: string;
}

export type TierListItem = WishListItem & {
  tier: string;
  image: React.ReactElement; // ? maybe this must be something other
}

export type WishListProps = {
  mode?: WishListMode;
  // items: TierListItem[] | WishListItem[]
};


const getMockItems = () => {
  return [
    {
      title: "Паблик тахирдоса",
      sourceUrl: "vk.com/taxnrdos"
    },
    {
      title: "Кофеварка"
    },
    {
      title: "Клавиатура"
    }
  ]
}


export const WishList: React.FC<WishListProps> = ({mode = WishListMode.DefaultList}) => {
  const [items, setItems] = useState<TierListItem[] | WishListItem[]>([]);

  useEffect(() => {
    const mockItems = getMockItems();
    setItems(mockItems);
    // getDataFromServer()
  },[])

  return (
    <div className="wish-list__wrapper">
      {mode === WishListMode.DefaultList
        ? <DefaultList items={items}/>
        : <TierList />}
    </div>
  )
}