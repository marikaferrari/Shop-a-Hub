import Image from 'next/image';
import prisma from '@/lib/db/prisma';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  //fetch all the products from database
  const products = await prisma.product.findMany({
    // products order by id in descending order
    orderBy: {id: "desc"}
  })
  return (
   <div>
    <ProductCard product={products[0]} />
   </div>
  )
}
