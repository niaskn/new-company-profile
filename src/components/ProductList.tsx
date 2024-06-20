/* eslint-disable react/no-unescaped-entities */

import { Product } from "@/utils/interface/product";
import { getProducts } from "@/api/product";
import Image from "next/image";

export const getStaticProps = async () => {
  const products: Product[] = await getProducts();
  return {
    props: {
      products,
    },
  };
};

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  console.log("products : ", products);
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold justify-center mt-20 my-10 flex text-pink-900">
        Products List
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product: Product, index: number) => (
          <div className="flex-wrap rounded overflow-hidden shadow-lg p-2" key={index}>
            <ul>
              <li className="justify-center flex text-xl font-bold text-pink-900 mt-5">
                {product.name}
              </li>
              <Image
                src={product.image}
                width={300}
                height={300}
                alt="Picture"
                className="w-52 h-52 mx-auto p-5"
              />
              <li className="w-52 h-52 mx-auto p-5 text-brown-100 text-base">
                {product.description}
              </li>
              <li className="w-52 mx-auto p-5 font-semibold">
                Price: Rp{product.price}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
