import apiService from "./api.service.js";
import { donutName } from "./lib.js";

const bakeryData = await apiService.donuts();

console.log(donutName(bakeryData));
