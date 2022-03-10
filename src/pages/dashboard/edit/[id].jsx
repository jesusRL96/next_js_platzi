import FormProduct from '@components/FormProduct';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
  const [product, setProduct] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;
    async function getProduct() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data);
    }
    getProduct();
  }, [router?.isReady]);
  return <FormProduct product={product} />;
}
