import React from "react"
import { WishListItem } from "../../../pages/WishList/WishList"
import classNames from "classnames";
import "./DefaultListItem.css";

type DefaultListItem = {
  item: WishListItem;
}
// я утром забуду, но короче слева такая большая крутая надпись на 2/3 сверху и с паддингом небольшим, справа в конце строки - пичка
// пока что не планирую каких-то подробных карточек делать, потому что зачем? поэтому при клике можно переадресовывать по url
// если есть url, то надо добавлять стиль типа clickable, а также собственно вызывать переадресацию
export const DefaultListItem: React.FC<DefaultListItem> = ({item}) => {
  return (
    <div className={classNames(
      "default-list__item",
      item.sourceUrl && "clickable"
    )}>
      {item.title} 
    </div>
  )
}