export const donutName = (bakery) => bakery.map((donut) => donut.name);

export const toppingsCount = ({ bakery, topping, name }) => {
  const donutType = donutName(bakery, name);
  const arrayTop = donutType.bakery.toppings.map(topping);
  return arrayTop([]);
};
