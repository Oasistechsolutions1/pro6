import React from 'react';

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
}

const Blogcard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className=" 2xl:max-w-[370px] max-w-[370px] flex items-center justify-between flex-col gap-5">
      <img src={image} alt={name} className="product-image bg-slate-200 px-4 py-4 rounded-full" />
      
      <div className="flex items-center flex-col gap-2 justify-between">
      <h3 className='text-[#FB2E86] font-bold text-center'>{name}</h3>
      <p>{ price}</p>
      </div>
      
    </div>
  );
};

export default Blogcard;


