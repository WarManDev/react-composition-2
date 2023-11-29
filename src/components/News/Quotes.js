import React from "react";
import { List, Item } from "../List";

/**
 * Компонент "Котировки"
 * Обеспечивает вывод информации о котировках
 * Получает информацию из массива объектов
 * Выводит через перечисление название, значение, индекс изминения
 */

export default function Quotes() {
  const categoryQuotes = [
    {
      nameQuotes: "USD MOEX",
      value: "75",
      className: "quotes-item",
      index: "+0,15",
    },
    {
      nameQuotes: "НЕФТЬ",
      value: "75",
      className: "quotes-item",
      index: "+0,15",
    },
  ];
  return (
    <ul className='quotes'>
      <List items={categoryQuotes}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.nameQuotes} className={item.className}>
                <span className='nameQuotes'>{item.nameQuotes}</span>
                <span className='valueQuotes'>{item.value}</span>
                <span className='indeQuotes'>{item.index}</span>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}
