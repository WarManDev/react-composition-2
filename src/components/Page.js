import React from "react";
import NewsHeader from "./News/NewsHeader";
import News from "./News/News";
import Quotes from "./News/Quotes";
import CardNews from "./News/CardNews";
import SearchBlock from "./SearchBlock/SerchBlock";
import Banner from "./Banner/Banner";
import WidgetList from "./WidgetList/WidgetList";

/**
 * Компонент "Страница"
 * Обеспечивает разметку и отображение информации страницы на основе вложенных компонентов
 */

export default function Page() {
  return (
    <div className='containier'>
      <header className='header'>
        <div className='news'>
          <NewsHeader />
          <News />
          <Quotes />
        </div>
        <div className='cadr-news'>
          <CardNews />
        </div>
      </header>
      <div className='search-block'>
        <SearchBlock />
      </div>
      <div className='banner'>
        <Banner />
      </div>
      <section className='block-widget'>
        <WidgetList />
      </section>
    </div>
  );
}
