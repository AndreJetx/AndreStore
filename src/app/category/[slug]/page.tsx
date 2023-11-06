import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { priscaCliente } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any ) => {
    const category = await priscaCliente.category.findFirst({

        where : {
            slug: params.slug,
        },

        include:{
            product: true,
        }

        });

    if (!category) {
        return null;
    }
    

    return ( 
        <div className='p-5 flex flex-col gap-8'>
            <Badge className='w-fit gap-1 text-base uppercase border-primary px-2 py-[0.375rem] p-1' variant={'outline'}>
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </Badge>
        

            <div className="grid grid-cols-2 gap-8">
                {category.product.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>)}
            </div>
        </div>

    );
}

export default CategoryProducts;