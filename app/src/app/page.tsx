import Image from 'next/image';
import { prisma } from '@/lib/db/prisma';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import PaginationBar from '@/components/PaginationBar';

interface HomeProps {
  searchParams: { page: string }
}

// Define Home component as async function
  // Highlight newest product at the top
  // Use ProductCard component to render remaining products
export default async function Home({searchParams : { page = "1" } }: HomeProps) {

  const currentPage = parseInt(page);

  const pageSize = 6;

  // Big picture at the top
  const heroItemCount = 1;

  // Count the number of total pages
  const totalItemCount = await prisma.product.count();
  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize)

  // Fetch all the products from database
  const products = await prisma.product.findMany({
    // Products order by id in descending order
    orderBy: {id: "desc"},
    skip: (currentPage - 1) * pageSize + (currentPage === 1 ? 0 : heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount : 0),
  })
  return (
   <div className='flex flex-col items-center'>
    {currentPage === 1 && (
    <div className='hero rounded-xl bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
      <Image 
        src={products[0].imageUrl}
        alt={products[0].name}
        width={400}
        height={800}
        className='w-full max-w-sm rounded-lg shadow-2xl'
        priority
        />
        <div>
          <h1 className='text-5xl font-bold'>{products[0].name}</h1>
          <p className='py-6'>{products[0].description}</p>
            {/* Link to the detailed page of the first product */}
          <Link href={'/products/' + products[0].id} className='btn-primary btn'>CHECK IT OUT</Link>
        </div>
      </div>
    </div>
    )}
  {/* Display a grid of product cards for the remaining products */}
    <div className='my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {(currentPage === 1 ? products.slice(1) : products).map(product => (
        // ProductCard component
          // 'Key' attribute is a required prop when rendering lists of elements
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
        {totalPages > 1 && 
    <PaginationBar currentPage={currentPage} totalPages={totalPages} />
        }
   </div>
  )
}