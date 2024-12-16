
import React from 'react';

interface ProductCardProps {
    name: string;
    code?: string;
    iconn?: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, code, price, image }) => {
  return (
    <div className=" xl:max-w-[270px] max-w-[300px]">
      <img src={image} alt={name} className="product-image bg-slate-200 p-4" />
      <div className="flex flex-col items-center gap-2 mt-2 active:bg-[#2F1AC4]">
      <h3 className='text-[#FB2E86] font-bold text-center'>{name}</h3>
      
      <p className='text-center'>Code: {code}</p>
      <p className=''>${price}</p>
      </div>
      
    </div>
  );
};

export default ProductCard;
