// pages/products.tsx
import { GetStaticProps } from 'next';
import ProductList from '@/components/ProductList';
import { Product } from '@/utils/interface/product';
import { getProducts } from '@/api/product';

interface ProductsPageProps {
  products: Product[];
}

export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  const products = await getProducts();
  return {
    props: {
      products,
    },
  };
};

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
