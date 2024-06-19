import { Route, Routes } from "react-router-dom";
import Home from "../../app/pages/Home/Home";
import AboutBrand from "../../app/pages/AboutBrand/AboutBrand";
import Catalog from "../../app/pages/Catalog/Catalog";
import DeliveryGuarantee from "../../app/pages/DeliveryGuarantee/DeliveryGuarantee";
import Stores from '../../app/pages/Stores/Stores'
import ErrorPage from "../ErrorPage/ErrorPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-brand' element={<AboutBrand />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/delivery-and-guarantee' element={<DeliveryGuarantee />} />
      <Route path="/stores" element={<Stores />}/>
      <Route path='*' errorElement={ErrorPage}/>
    </Routes>
  );
}

export default AppRoutes;
