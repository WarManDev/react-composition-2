import React from "react";
import Widget from "./Widget";
import Weather from "./Weather";
import Visited from "./Visited";
import Cart from "./Cart";
import TVPrograms from "./TVPrograms";
import Live from "./Live";

/**
 * Компонент "Блок дополнительных виджетов"
 * Обеспечивает вывод виджетов в три колонки с помощью компонента Widget
 * Выводит виджет "Погода" с помощью компонента Weather
 * Выводит виджет "Посещаемое" через перечисляемый компонент Visited
 * Выводит виджет "Карта" с помощью компонента Cart
 * Выводит виджет "Телепрограмма" через перечисляемый компонент TVPrograms
 * Выводит виджет "Эфир" через перечисляемый компонент Live
 */
export default function WidgetList() {
  return (
    <>
      <Widget title='Погода'>
        <Weather />
      </Widget>
      <Widget title='Посещаемое'>
        <Visited />
      </Widget>
      <Widget title='Карта Германии'>
        <Cart />
      </Widget>
      <Widget title='Телепрограмма'>
        <TVPrograms />
      </Widget>
      <Widget title='Эфир'>
        <Live />
      </Widget>
    </>
  );
}
