import React from 'react';

interface ProductCardProps {
    name: string;
    deleted: string;
    price: string;
    image: string;
}

const Card1: React.FC<ProductCardProps> = ({ name, price, deleted, image }) => {
  return (
    <div className=" xl:max-w-[370px] max-w-[370px] my-5">
      <img src={image} alt={name} className="product-image bg-slate-200 px-16 py-4" />
      <div className="flex items-center justify-between">
      <h3 className='text-[#FB2E86] font-bold text-center'>{name}</h3>
      <p className='mr-1'>{ price}</p>
      <p className=' text-[#FB2E86]'>{ price}</p>

      </div>
      
    </div>
  );
};

export default Card1;
