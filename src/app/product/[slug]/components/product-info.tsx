"use client";

import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
    product: Pick<
        ProductWithTotalPrice,
        'basePrice'
        | 'discountPercentage'
        | 'description'
        | 'totalPrice'
        | 'name'
    
    >;
}

const ProductInfo = ({product:{basePrice, totalPrice, description, discountPercentage, name}}: ProductInfoProps) => {
        const [quantity, setQuantity] = useState(1);
        const handleDecreaseQuantityClick = () => {
            setQuantity((prev) => (prev === 1 ? prev : prev - 1)) 
        }

        const handleIncreaseQuantityClick = () => {
            setQuantity((prev) => prev + 1) 
        }


    return ( 
        <div className="flex flex-col px-5">
            <h1>{name}</h1>

            <div className="flex items-center gap-1">
                <h1 className=" text-xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 && (
                    <DiscountBadge className="left-3 top-3">
                    {discountPercentage}
                    </DiscountBadge>
                )}
            </div>
            {discountPercentage > 0 && (
                <p className="text-sm line-through opacity-75">
                    R$ {Number(basePrice).toFixed(2)}
                </p>
            )}

            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>

                <span>{quantity}</span>

                <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className=" font-bold">Descriçao</h3>
                <p className="text-sm opacity-60 text-justify">{description}</p>
            </div>

            <Button className=" mt-8 mb-5 uppercase font-bold">
                Adicionar ao carrinho
            </Button>

            <div className=" bg-accent flex items-center px-5 py-2 justify-between rounded-lg">
                <div className="flex items-center gap-3">
                    <TruckIcon />

                    <div className="flex flex-col">
                        <p className="text-xs">Entrega via <span className="font-bold">AJpacket®</span></p>
                        <p className=" text-primary">Envio para <span className="font-bold ">todo Brasil</span></p>
                    </div>

                </div>

                <p className="text-xs font-bold">Frete Gratis</p>
            </div>

        </div>
    );
}

export default ProductInfo;