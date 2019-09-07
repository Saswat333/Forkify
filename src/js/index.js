/* Global state of the app
- Search object(contains all search related data i.e. query, result)
- Current recipe object
- Shopping list object
- Liked recipes
 */

import Search from "./models/Search";
import { elements, renderLoader, clearLoader } from "./views/base";
import * as searchView from "./views/searchView";

//state object
const state = {};

const controlSearch = async () => {
  //1. Get query from view
  const query = searchView.getInput();
  console.log(query);

  if (query) {
    //2. New search object added to state
    state.search = new Search(query);
    //3. Prepare UI for result (by showing loading)
    searchView.clearInput();
    searchView.clearResult();
    renderLoader(elements.searchRes);
    //4. Search for receipe
    await state.search.getResult();

    //5. render results in UI
    clearLoader();
    console.log(state.search.results);
    searchView.renderResults(state.search.results);
    //console.log(state.search.results);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
