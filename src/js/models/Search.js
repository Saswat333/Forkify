//API KEY: 754d4aee566aae8e322e7b60b7ae963b
//SEARCH CALL : https://www.food2fork.com/api/search

import axios from "axios";
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    const key = "754d4aee566aae8e322e7b60b7ae963b";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.results = res.data.recipes;
      //console.log(this.results);
    } catch (error) {
      alert(error);
    }
  }
}
