"use client";

import { Card } from "./card";
import { Button } from "./button";
import { MenuIcon,
        ShoppingCartIcon,
        LogInIcon,
        PercentIcon,
        HomeIcon,
        ListOrderedIcon,
        LogOutIcon
        } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";


const Header = () => {
    const {status, data} = useSession();

    const handleLoginClick = async () => {
        await signIn();
    }

    const handleLogoutClick = async () => {
        await signOut();
    }

    return (
        <Card className="flex justify-between p-[1.875rem] items-center">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                        <MenuIcon />
                    </Button>
                </SheetTrigger>

                <SheetContent side={"left"}>
                    <SheetHeader className="text-left text-lg font-semibold">
                        MENU
                    </SheetHeader>

                    
                    {status === "authenticated" && data?.user &&(
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 py-4">
                            <Avatar>
                                <AvatarFallback>
                                    {data?.user?.name?.[0].toLocaleUpperCase()}
                                </AvatarFallback>
                                {data.user.image && <AvatarImage src={data.user.image}></AvatarImage>}
                            </Avatar>

                            <p className="font-medium">{data.user.name}</p>
                            
                        </div>
                        <Separator />
                        </div>  
                    )}
                    

                    <div className="mt-4 flex flex-col gap-2">
                        {status ==="unauthenticated" &&(
                        <Button onClick={handleLoginClick} variant={"outline"} className="w-full justify-start gap-2">
                            <LogInIcon size={16} />
                            Fazer Login 
                        </Button>
                        )}

                        {status ==="authenticated" &&(
                        <Button onClick={handleLogoutClick} variant={"outline"} className="w-full justify-start gap-2">
                            <LogOutIcon size={16} />
                            Fazer Logout 
                        </Button>
                        )}

                        <Button variant={"outline"} className="w-full justify-start gap-2">
                            <HomeIcon size={16} />
                            Inicio 
                        </Button>

                        <Button variant={"outline"} className="w-full justify-start gap-2">
                            <PercentIcon size={16} />
                            Ofertas 
                        </Button>

                        <Button variant={"outline"} className="w-full justify-start gap-2">
                            <ListOrderedIcon size={16} />
                            Catalogo
                        </Button>
                    </div>

                </SheetContent>
            </Sheet>

            <h1 className="font-semibold text-lg"><span className="text-primary">AJ</span> Store</h1>

            <Button size="icon" variant="outline">
                <ShoppingCartIcon />
            </Button>
        </Card>
    );
};

export default Header;