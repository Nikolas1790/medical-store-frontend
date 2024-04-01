import color from 'common/GlobalColers';
import sprite from '../../img/sprite.svg';

export const FilterIcon = () => (
  <svg width="14" height="14">
      <use href={`${sprite}#icon-filter`} />
  </svg>
);

export const getColor = (type) => {
  switch (type) {
    case 'Income':
      return color.red;
    case 'Expense':
      return color.greenLight;
    case 'Error':
      return color.blackPrimary;
    default:
      return 'black';
  }
};

export const getBackgroundColor = (type) => {
  switch (type) {
    case 'Income':
      return color.redSecondary;
    case 'Expense':
      return color.greenSecondary;
    case 'Error':
      return color.blackPrimarySecondary;
    default:
      return 'black';
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
      return 'black';
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
      return 'black';
  }
};