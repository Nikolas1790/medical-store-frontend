import color from 'common/GlobalColers';
import sprite from '../../img/sprite.svg';

export const AVAILABLE_CATEGORIES = [
  'Medicine', 'Head', 'Hand', 'Dental Care', 'Skin Care', 'Eye Care', 'Vitamins & Supplements', 'Orthopedic Products', 'Baby Care'
];

export const AVAILABLE_STATUS = [
  'Active', 'Deactive'
];

export const getPageName = (pathname) => {
  switch(pathname) {
    case '/dashboard':
      return 'Dashboard';
    case '/orders':
      return 'All orders';
    case '/products':
      return 'All products';
    case '/suppliers':
      return 'All suppliers';
    case '/customers':
      return 'All customers';
    default:
      return 'Page'; 
  }
};

export const getPageTitle =(icon) => {
  switch (icon) {
    case "#icon-dashboard":
      return "Dashboard";
    case "#icon-orders":
      return "Orders";
    case "#icon-products":
      return "Products";
    case "#icon-suppliers":
      return "Suppliers";
    case "#icon-customers":
      return "Customers";
    default:
      return "";
  }
}

export const getColor = (type) => {
  switch (type) {
    case 'Expense':
      return color.red;
    case 'Income':
      return color.greenLight;
    case 'Error':
      return color.blackPrimary;
    default:
      return color.blackPrimary;
  }
};

export const getBackgroundColor = (type) => {
  switch (type) {
    case 'Expense':
      return color.redSecondary;
    case 'Income':
      return color.greenSecondary;
    case 'Error':
      return color.blackPrimarySecondary;
    default:
      return color.blackPrimarySecondary;
  }
};

export const getStatusColor = (type) => {
  switch (type) {
    case 'Completed':
      return color.greenLight;
    case 'Confirmed':
      return color.violet;
    case 'Pending':
      return color.orange;
    case 'Cancelled':
      return color.red;
    case 'Processing':
      return color.blue;
    case 'Shipped':
      return color.orange;
    case 'Delivered':
      return color.greenDarker;
    default:
      return color.blackPrimary;
  }
};

export const getBackgroundStatusColor = (type) => {
  switch (type) {
    case 'Completed':
      return color.greenSecondary;
    case 'Confirmed':
      return color.violetSecondary;
    case 'Pending':
      return color.orangeSecondary;
    case 'Cancelled':
      return color.redSecondary;
    case 'Processing':
      return color.blueSecondary;
    case 'Shipped':
      return color.orangeSecondary;
    case 'Delivered':
      return color.greenSecondary;
    default:
      return color.blackPrimarySecondary;
  }
};


export const getActiveColor = (type) => {
  switch (type) {
    case 'Active':
      return color.greenLight;
    case 'Deactive':
      return color.red;
    default:
      return color.blackPrimary;
  }
};

export const getBackgroundActiveColor = (type) => {
  switch (type) {
    case 'Active':
      return color.greenSecondary;
    case 'Deactive':
      return color.redSecondary;
    default:
      return color.blackPrimarySecondary;
  }
};

export const FilterIcon = () => (
  <svg width="14" height="14">
      <use href={`${sprite}#icon-filter`} />
  </svg>
);

export const AddIcon = () => (
  <svg width="42" height="42" viewBox="0 0 42 42"  xmlns="http://www.w3.org/2000/svg">
    <rect width="42" height="42" rx="21" />
    <path d="M27 21H15M21 15V27V15Z"  />
  </svg>
);
