import React from 'react';

interface ProductCardProps {
    name: string;
    deleted: string;
    price: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, deleted, price, image }) => {
  return (
    <div className=" xl:max-w-[270px] max-w-[300px]">
      <img src={image} alt={name} className="product-image bg-slate-200 p-4" />
      <div className="flex flex-col items-center gap-2 mt-2 active:bg-[#2F1AC4]">
      <h3 className='text-[#2F1AC4] font-bold text-center'>{name}</h3>
      <div className='flex text-center gap-3'>
      <p className='text-[#2F1AC4]'>{price}</p>
      <p className='text-center text-[#1518754D]'> {deleted}</p>
      </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
