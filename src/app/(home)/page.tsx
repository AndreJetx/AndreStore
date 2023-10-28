import Image from 'next/image'
import Categories from './components/categories';
import { priscaCliente } from '@/lib/prisma';
import ProductList from './components/product-list';

export default async function Home() {

  const deals = await priscaCliente.product.findMany({
    where: {
      discountPercentage: {
        gt:0,
      },
    },
  });
  
  return (
    <div>
      <Image src="/banner-home-01.png"
        width={0}
        height={0}
        className='h-auto w-full'
        sizes='100vw'
        alt='Até 55% de desconto esse mês!'
      />

      <div className='mt-8 px-5'>
        <Categories />
      </div>
      <div className='mt-8 px-5'>
        <p className='font-semibold uppercase pl-5 mb-3'>Ofertas</p>
        <ProductList products={deals} />
      </div>
      <Image src="/banner-home-02.png"
        width={0}
        height={0}
        className='h-auto w-full'
        sizes='100vw'
        alt='Até 55% de desconto esse mês!'
      />
    </div>
      
  )
}
