import { PageNav, SidebarConteiner } from "./Sidebar.styled";
import sprite from '../../img/sprite.svg';

const navLinks = [
  { path: "/dashboard", icon: "#icon-dashboard" },
  { path: "/orders", icon: "#icon-orders" },
  { path: "/products", icon: "#icon-products" },
  { path: "/suppliers", icon: "#icon-suppliers" },
  { path: "/customers", icon: "#icon-customers" },
];

export default function Sidebar() {
  return (
    <SidebarConteiner>
      {navLinks.map(link => (
        <PageNav key={link.path} to={link.path}>
          <svg width={16} height={16}>
            <use href={`${sprite}${link.icon}`} />
          </svg>
        </PageNav>
      ))}
    </SidebarConteiner>
  )
};