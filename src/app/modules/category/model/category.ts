import { CartProduct } from "../../common/model/cartProduct";

export interface Category {
    name: string,
    description: string,
    slug: string,
    products: Array<CartProduct>
}