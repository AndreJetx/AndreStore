import { Badge } from '@/components/ui/badge';
import { priscaCliente } from '@/lib/prisma';
import { ListOrderedIcon } from 'lucide-react';
import CategoryItem from './components/category-item';


const CatalogPage = async () => {
    const categories = await priscaCliente.category.findMany({})
    
    return  (
        <div className='p-5 flex flex-col gap-8'>
            <Badge className='w-fit gap-1 text-base uppercase border-primary px-2 py-[0.375rem] p-1' variant={'outline'}>
                <ListOrderedIcon size={16}/>
                CATÁLOGO
            </Badge>

            <div className='grid grid-cols-2 gap-8'>
                {categories.map( category => 
                    <CategoryItem key={category.id} category={category} />
                )}
            </div>

        </div>
    );
}

export default CatalogPage;