import apiService from "./api.service.js";
import { donutName, toppingsCount } from "./lib.js";

const bakeryData = await apiService.donuts();

console.log(donutName(bakeryData));

console.log(toppingsCount(donutName));
