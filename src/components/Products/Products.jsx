import { ContentBlock, ContentContainer, FilterAddConteiner } from "common/GiobalStyles";
import UserNameFilter from "components/UserNameFilter/UserNameFilter";
import { productInf } from "../../redux/ePharmacy/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsInf } from "../../redux/ePharmacy/selector";
import { useEffect, useState } from "react";
import ProductsAll from "components/ProductsAll/ProductsAll";
import { Pagination } from "components/Pagination/Pagination";
import { AddProduct, AddProductConteiner } from "./Products.styled";
import PortalModal from "components/PortalModal/PortalModal";
import ProductModals from "components/Modals/ProductModal";
import { AddIcon } from "components/Utils/utils";

export default function Products() {  
  const dispatch = useDispatch();
  const products = useSelector(selectProductsInf);  
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const limitPerPage = 5;
 
  useEffect(() => {
    dispatch(productInf({ page: currentPage, limit: limitPerPage, name: '' || filterName }));
  }, [dispatch, currentPage, limitPerPage, filterName, products.total]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const totalProducts = products.total || 0;
  const totalPages = Math.ceil(totalProducts / limitPerPage);
  
  return (
    <ContentContainer>
      <ContentBlock>
        <FilterAddConteiner>
          <UserNameFilter dataFactory={productInf} plholder="Product Name" setFilterName={setFilterName} setCurrentPage={setCurrentPage}/>
          <AddProductConteiner onClick={() => setOpenModal(true)} >

            <AddIcon />
            <AddProduct>Add a new product</AddProduct>

          </AddProductConteiner>
        </FilterAddConteiner>

        <div>
          <ProductsAll products={products.products} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        
        <PortalModal active={openModal} setActive={setOpenModal}>
          <ProductModals closeModals={() => setOpenModal()} />
        </PortalModal>

      </ContentBlock>
    </ContentContainer>
  );
}