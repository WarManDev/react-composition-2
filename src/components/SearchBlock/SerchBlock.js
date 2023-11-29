import CategorySearch from "./CategorySearch";
import SearchForm from "./SearchForm";

/**
 * Компонент "Блок поиска"
 * Обеспечивает вывод компонентов данного блока
 * Выводит катрегории поиска через перечисляемый компонента CategorySearch
 * Выводит форму поиска через компонент SearchForm
 * Выводит информаци о популярных запросах
 */

export default function Page() {
  const helpSearch = "фаза луны сегодня";
  return (
    <>
      <CategorySearch />
      <SearchForm />
      <div className='help-search'>
        <span>
          Найдется всею Например, <i className='help-search'>{helpSearch}</i>
        </span>
      </div>
    </>
  );
}
