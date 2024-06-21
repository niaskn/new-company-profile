import { Product } from "@/utils/interface/product";
import Image from "next/image";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold justify-center mt-20 my-10 flex text-pink-900">
        Products List
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div className="flex-wrap rounded overflow-hidden shadow-lg p-2" key={index}>
            <ul>
              <li className="justify-center flex text-xl font-bold text-pink-900 mt-5">
                {product.name}
              </li>
              <Image
                src={product.image}
                width={300}
                height={300}
                alt={product.name}
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
