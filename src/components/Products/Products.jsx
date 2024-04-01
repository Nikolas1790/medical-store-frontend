import { ContentBlock, ContentContainer } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { productsInf } from "../../redux/ePharmacy/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsInf } from "../../redux/ePharmacy/selector";
import { useEffect } from "react";
import ProductsAll from "components/ProductsAll/ProductsAll";

export default function Products() {  
  const dispatch = useDispatch();
  const products = useSelector(selectProductsInf);  
  // console.log(orders)

  useEffect(() => {
    dispatch(productsInf({}));
  }, [dispatch]);
  return (
    <ContentContainer>
      <ContentBlock>

        <UserNameFilter dataFactory={productsInf} plholder="Product  Name"/>
        <ProductsAll products={products} />
        

      </ContentBlock>
    </ContentContainer>
  );
}