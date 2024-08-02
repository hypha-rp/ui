export interface Product {
  id: string;
  fullName: string;
  shortName: string;
  contactEmail: string;
}

export interface Integration {
  id: string;
  productID1: string;
  productID2: string;
  Product1: Product;
  Product2: Product;
}
