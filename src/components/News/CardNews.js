import Card from "../Card";

/**
 * Компонент "Рекламы"
 * Обеспечивает вывод рекламы с использование компонента "Card"
 * Выводит картинку, заголовок, описание
 */

export default function CardNews() {
  return (
    <>
      <Card img='https://wikiparazit.ru/wp-content/uploads/2020/08/evropeyskaya-koshka-dikiy-kot1.jpg'>
        <h5 className='card-title'>Работа над ошибками</h5>
        <p className='card-text'>Смотри и запоминай</p>
      </Card>
    </>
  );
}
