import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CardDashboard from '../../components/CardDashboard';
import EmptyState from '../../components/EmptyState/EmptyState';
import useDashboardService from '../../hooks/useDashboardService';
import style from './style';
import messages from './messages';

const ListDashboard = () => {
  const classes = style();
  const dashboardService = useDashboardService();

  const [dashboardList, setDashboardList] = useState([]);

  useEffect(() => {
    try {
      dashboardService.listAll().then(list => {
        setDashboardList(list);
      });
    } catch (error) {
      toast.error(messages.listError.defaultMessage);
    }
  }, []);

  return (
    dashboardList?.length ?
      (
        <div className={classes.container} >
          { dashboardList.map((item, index) => <CardDashboard key={index} item={{ ...item, id: index }} />)}
        </div >
      ) : <EmptyState />
  );
};

export default ListDashboard;
