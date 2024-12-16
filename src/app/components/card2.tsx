import React from 'react';

interface ProductCardProps {
    name: string;
    para: string;
    
    image: string;
}

const Card2: React.FC<ProductCardProps> = ({ name, para, image }) => {
  return (
    <div className=" xl:max-w-[270px] h-[320px] w-[270px] flex flex-col justify-center p-7 box-border items-center gap-3">
        
      <img src={image} alt={name} className="product-image" />
     
      <h3 className=' font-bold text-center'>{name}</h3>
      <p className='text-center leading-6 text-base font-bold text-[#1A0B5B4D]'>{para}</p>
      
      
    </div>
  );
};

export default Card2;
