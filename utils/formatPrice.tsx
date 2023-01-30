export function formatPrice(price: any) {
  const productPrice = price?.toFixed(2);
  return numberWithCommas(productPrice);
}

export function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
