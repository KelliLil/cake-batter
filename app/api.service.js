import got from "got";

const BASE_URL = "http://localhost:3000/bakery";

export default {
  donuts () {
    return got(BASE_URL).json();
  },
};
