import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "hooks/useAyth";
import Loader from "./Loader/Loader";
import { refreshUser } from "../redux/auth/operationsAuth";
import { selectToken } from "../redux/auth/selectorAuth";

const Login = lazy(() => import("../pages/LoginPage"));
const Dashboard = lazy(() => import("../pages/DashboardPage"));
const Orders = lazy(() => import("../pages/OrdersPage"));
const Products = lazy(() => import("../pages/ProductsPage"));
const Suppliers = lazy(() => import("../pages/SuppliersPage"));
const Customers = lazy(() => import("../pages/CustomersPage"));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector(selectToken);

  useEffect(() => {
      if (token) {
        dispatch(refreshUser());
      }
  }, [dispatch, token ]);

  return isRefreshing ? (
    <Loader />
  ) : (
      <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/dashboard" component={<Login />} />} />
          <Route path="/dashboard" element={<PrivateRoute redirectTo="/dashboard" component={<Dashboard />} />} />
          <Route path="/orders" element={<PrivateRoute redirectTo="/orders" component={<Orders />} />} />
          <Route path="/products" element={<PrivateRoute redirectTo="/products" component={<Products />} />} />
          <Route path="/suppliers" element={<PrivateRoute redirectTo="/suppliers" component={<Suppliers />} />} />
          <Route path="/customers" element={<PrivateRoute redirectTo="/customers" component={<Customers />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1500} />
    </div>
  );
};
