import { Product } from "./product";

export interface CartSummaryItem {
    id: number,
    quantity: number,
    product: Product,
    lineValue: number
}