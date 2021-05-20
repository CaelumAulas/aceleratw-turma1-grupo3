import React, { useState, useContext, useEffect } from 'react';
import CardDashboard from '../../components/CardDashboard';
import style from './style';
import HttpContext from '../../contexts/HttpContext';
import DashboardRepository from '../../api/services/Dashboard/DashboardRepository';
import DashboardService from '../../api/services/Dashboard/DashboardService';

const ListDashboard = () => {
  const classes = style();
  const httpClient = useContext(HttpContext);
  const dashboardRepository = DashboardRepository(httpClient);
  const dashboardService = DashboardService(dashboardRepository);
  
  const [dashboardList, setDashboardList] = useState([]);

  useEffect(() => {
    dashboardService.listAll().then(list => {
      setDashboardList(list);
    });
  }, []);

  return (
    <div className={classes.container}>
      {dashboardList.map((item, index) => <CardDashboard key={index} item={{...item, id: index}} />)}
    </div>
  );
};

export default ListDashboard;
