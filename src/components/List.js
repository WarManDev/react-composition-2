import React from "react";

/**
 * Компонент "Лист"
 * Предназначен для отображение информации на основе props с использование функции из children
 */

export function List({ items, children }) {
  return <>{children(items)}</>;
}

export function Item({ children }) {
  return <li>{children}</li>;
}
