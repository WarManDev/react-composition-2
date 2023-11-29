import React from "react";
import { List, Item } from "../List";

/**
 * Компонент "Новости"
 * Обеспечивает вывод новостей
 * Получает информацию из массива объектов
 * Выводит через перечисление заголовок новости, ссылку на новость, иконку источника,
 */

export default function News() {
  const categoryNews = [
    {
      news: "Минобороны России показало кадры уничтожения бронетехники ВСУ высокоточными боеприпасами",
      href: "#",
      className: "news-item",
      iconName: "home",
    },
    {
      news: "Пьяные иностранные наемники убили трех военных на блокпосту в Снигиревке",
      href: "#",
      className: "news-item",
      iconName: "done",
    },
  ];
  return (
    <ul className='list-category-news'>
      <List items={categoryNews}>
        {(items) =>
          items.map((item) => {
            return (
              <Item key={item.news} className={item.className}>
                <i className='material-icons'>{item.iconName}</i>
                <a href={item.href}>
                  <span>{item.news}</span>
                </a>
              </Item>
            );
          })
        }
      </List>
    </ul>
  );
}
