import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DetailView from '../components/DetailView';
import { SERVICES_DATA } from '../data/services';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <DetailView data={service} />;
};

export default ServiceDetailPage;
