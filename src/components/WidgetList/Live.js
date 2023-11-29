import React from "react";
import { List, Item } from "../List";

export default function Live() {
  const categoryNews = [
    {
      name: "Управление как искусство",
      href: "#",
      chanel: "Первый",
    },
    {
      name: "Привет пока",
      href: "#",
      chanel: "Второй",
    },
  ];
  return (
    <ul className='list-category-live'>
      <List items={categoryNews}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.news} className='item-category-live'>
                <span>
                  <i className='material-icons'>done</i>
                  <i className='name-category-live'>{item.name}</i>
                  <a href={item.href}>{item.chanel}</a>
                </span>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}
