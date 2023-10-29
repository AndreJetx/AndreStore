import { ComponentProps } from "react";

const SectionTitle = ({children}: ComponentProps<"p">) => {
    return ( <p className='font-semibold uppercase pl-5 mb-3'>{children}</p> );
}

export default SectionTitle;