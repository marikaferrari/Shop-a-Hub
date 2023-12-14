import { Product } from '@prisma/client';
import Link from 'next/link';
import PriceTag from './PriceTag';
import Image from 'next/image';

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

    // Variable to display a "new" tag close to the product if said product is less than 7 days old
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 *24 * 7;

    return (
        // Get forwarded to product page
        <Link
            href={'/product/' + product.id}
            className="card w-full bg-base-100 hover:shadow-xl transition-shadow">
                <figure>
                    <Image
                    src='/Shoes.avif' //{product.imageUrl}
                    alt={product.name}
                    width={800}
                    height={400}
                    className='h-48 object-cover'
                    />
                </figure>
                <div className="card-body">
                <h2 className='card-title'>
                    {product.name} 
                    {isNew && <div className='badge badge-secondary'>NEW</div>}
                    </h2>
                    <p>{product.description}</p>
                    <PriceTag price={product.price} />
                </div>
        </Link>
    )
}
