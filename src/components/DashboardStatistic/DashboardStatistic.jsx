import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../img/sprite.svg';
import { StatisticConteiner, StatisticItem, StatisticSectionTitle, StatisticSvg, StatisticTitleConteiner, StatisticValue } from './DashboardStatistic.styled';
import { selectDataInf } from '../../redux/ePharmacy/selector';
import { useEffect } from 'react';
import { dashboardInf } from '../../redux/ePharmacy/operations';

export default function DashboardStatistic() {  
  const dispatch = useDispatch();
  const data = useSelector(selectDataInf);
  
  const statistic = [
    { name: "products", icon: "#icon-streamline", value: `${data.productsCount}` },
    { name: "suppliers", icon: "#icon-users", value: `${data.suppliersCount}` },
    { name: "customers", icon: "#icon-users", value: `${data.customersCount}` },
  ];

  useEffect(() => {
    dispatch(dashboardInf());
  }, [dispatch]);

  return (
    <StatisticConteiner>
      {statistic.map(link => (        
        <StatisticItem key={link.name} >
          <StatisticTitleConteiner>
            <StatisticSvg >
              <use href={`${sprite}${link.icon}`} />
            </StatisticSvg>
            <StatisticSectionTitle>All {link.name}</StatisticSectionTitle>
          </StatisticTitleConteiner>
          <StatisticValue>{data.customersCount ? link.value : 0}</StatisticValue>
        </StatisticItem>
      ))}
    </StatisticConteiner>
  );
}