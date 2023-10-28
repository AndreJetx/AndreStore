import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, Badge } from "lucide-react";
import Image from 'next/image';
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return (
        <div className="flex flex-col gap-4 max-w-[156px]">
            <div className="relative bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
                <Image
                    src={product.imageUrls[0]}
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-[90px] w-auto max-w-[80%]"
                    style={{
                        objectFit: "contain",
                    }}
                    alt={product.name}
                />
                
                {product.discountPercentage > 0 && (
                    <DiscountBadge className="absolute left-3 top-3">
                        {product.discountPercentage}
                    </DiscountBadge>
                )}
            </div>

            
            <div className="flex flex-col gap-1">
                <p className="overflow-hidden whitespace-nowrap text-sm text-ellipsis">
                    {product.name}
                </p>
            
                <div className="flex items-center gap-2">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="font-semibold">
                                R$ {product.totalPrice.toFixed(2)}
                            </p>

                            <p className="text-xs line-through opacity-75">
                                R$ {Number(product.basePrice).toFixed(2)}
                            </p>
                        </>
                    ) : (

                    <p className="text-sm font-semibold">
                        R$ {product.basePrice.toFixed(2)}
                    </p>
                    )}
                </div>
            </div>
        </div>
    );
        
}

export default ProductItem;
