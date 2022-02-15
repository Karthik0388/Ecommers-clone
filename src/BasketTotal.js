export let getBasketTotal = basket =>
  basket.reduce((amount, item) => item.price + amount, 0);
