export const getCategories = () => {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const fetchedItems = fetch(url)
    .then((response) => response.json())
    .then((data) => data);

  return fetchedItems;
};

export function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  // endpoint 1 (category) ou endpoint 2 (termo)

  // if (input).includes(MLB) urlCategory, else urlQuery
  // const urlCategory = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  // const urlQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const urlBoth = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  // const fetchCategory = fetch(urlCategory)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.results));

  // const fetchQuery = fetch(urlQuery)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data.results));

  const fetchBoth = fetch(urlBoth)
    .then((response) => response.json())
    .then((data) => data);

  return fetchBoth;
}
