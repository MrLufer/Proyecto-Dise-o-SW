import { OrdenesCompra, Pedidos, Productos, Proveedores } from "./pages";

const routes = [
  {
    path: '/pedidos',
    exact: true,
    listRoles: ["student", "teacher", "admin", "superadmin"],
    component: Pedidos,
    isPrivate: false,
    name: 'Pedidos',
  },
  {
    path: '/productos',
    exact: true,
    listRoles: ["admin", "superadmin"],
    component: Productos,
    isPrivate: true,
    name: "Productos",
  },
  {
    path: "/reclamos",
    exact: true,
    listRoles: ["admin", "superadmin"],
    component: OrdenesCompra,
    isPrivate: true,
    name: 'Ordenes de compra',
  },
  {
    path: '/proveedores',
    exact: true,
    listRoles: ["admin", "superadmin"],
    component: Proveedores,
    isPrivate: true,
    name: "Proveedores",
  },
];

export default routes;
