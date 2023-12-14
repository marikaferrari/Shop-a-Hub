import Image from 'next/image';
import prisma from '@/lib/db/prisma';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function Home() {
  // Fetch all the products from database
  const products = await prisma.product.findMany({
    // Products order by id in descending order
    orderBy: {id: "desc"}
  })
  return (
   <div>
    <div className='hero rounded-xl bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
      <Image 
        src='/Shoes.avif' //{products.imageUrl}
        alt={products[0].name}
        width={400}
        height={800}
        className='w-full max-w-sm rounded-lg shadow-2xl'
        priority
        />
        <div>
          <h1 className='text-5xl font-bold'>{products[0].name}</h1>
          <p className='py-6'>{products[0].description}</p>
          <Link href={'/products/' + products[0].id} className='btn-primary btn'>CHECK IT OUT</Link>
        </div>
      </div>
    </div>

    <div className='my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {products.slice(1).map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
   </div>
  )
}

// 2:00:00