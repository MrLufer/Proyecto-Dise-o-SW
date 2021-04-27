import axios from "axios";
import API_PEDIDOS from "../config/api.pedidos";
import user from "../config/user";

export const createPurchaseOrder = async (newOrder) => {
  let res = await axios.post(`${API_PEDIDOS}/purchase-order`, newOrder);
  return res;
};

export const getPurchaseOrders = async () => {
  let res = await axios.get(`${API_PEDIDOS}/purchase-orders`);
  return res;
};

export const createProduct = async (newProduct) => {
  let res = await axios.post(`${API_PEDIDOS}/product`, newProduct);

  return res;
};

export const listProducts = async () => {
  let res = await axios.get(`${API_PEDIDOS}/products`);
  return res;
};

export const listProductsActives = async () => {
  let res = await axios.get(`${API_PEDIDOS}/products-active`);
  return res;
};

export const createSupplier = async (newSupplier) => {
  let res = await axios.post(`${API_PEDIDOS}/supplier`, newSupplier);
  return res;
};

export const listSupplier = async () => {
  let res = await axios.get(`${API_PEDIDOS}/suppliers`);
  return res;
};

export const updateSupplier = async (supplierId, edit) => {
  let res = await axios.put(`${API_PEDIDOS}/supplier/${supplierId}`, edit);
  return res;
};

export const listSupplierAtives = async () => {
  let res = await axios.get(`${API_PEDIDOS}/suppliers-active`);
  return res;
};

export const login = async (params) => {
  let res = await axios.post(`${API_PEDIDOS}/login`, params);
  return res;
};

export const getEmployees = async () => {
  let res = await axios.get(`${API_PEDIDOS}/get-employees`);
  return res;
};

export const addEmployee = async (params) => {
  let res = await axios.post(`${API_PEDIDOS}/create-employee`, params);
  return res;
};

export const addOrder = async (params) => {
  let res = await axios.post(`${API_PEDIDOS}/create-order`, params);
  return res;
};

export const getOrders = async () => {
  let res = await axios.get(`${API_PEDIDOS}/get-orders`);
  return res;
};

export const updateOrder = async (params) => {
  let res = await axios.put(`${API_PEDIDOS}/update-purchase/${params.id}`, {
    status: params.status,
  });
  return res;
};

export const userDetails = async (employee) => {
  let res = await axios.get(`${API_PEDIDOS}/user-details/${employee}`);
  return res;
};

export default {
  login,
  updateOrder,
  addOrder,
  userDetails,
  getOrders,
  getEmployees,
  addEmployee,
  createPurchaseOrder,
  getPurchaseOrders,
  createProduct,
  listProducts,
  listProductsActives,
  createSupplier,
  listSupplier,
  listSupplierAtives,
  updateSupplier,
};
