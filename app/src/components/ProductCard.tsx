import { Product } from '@prisma/client';
import Link from 'next/link';

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        // Get forwarded to product page
        <Link
            href={'/product/' + product.id}
            className="card w-full bg-base-100 hover:shadow-xl transition-shadow">
                <div className="card-body">
                    <h2 className='card-title'>{product.name}</h2>
                    <p>{product.description}</p>
                    
                </div>
        </Link>
    )
}