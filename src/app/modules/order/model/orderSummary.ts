import { Payment } from "./payment";

export interface OrderSummary {
    id: number,
    placeDate: Date,
    orderStatus: string,
    grossValue: number,
    payment: Payment
}