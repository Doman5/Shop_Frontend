import { Review } from "./review"

export interface ProductDetails{
    id: number,
    name: string,
    category: string,
    description: string,
    fullDescription: string,
    price: number,
    salePrice: number,
    currency: string
    image: string,
    slug: string
    reviews: Array<Review>
}