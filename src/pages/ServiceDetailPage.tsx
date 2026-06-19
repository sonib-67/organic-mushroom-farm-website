import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DetailView from '../components/DetailView';
import { SERVICES_DATA } from '../data/services';
import SEO from '../components/SEO';

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO 
        title={`${service.title} - Commercial Farming Services`}
        description={service.description || `Read detailed specifications and professional setup procedures for our ${service.title} mushroom services.`}
        url={`/services/${id}`}
      />
      <DetailView data={service} />
    </>
  );
};

export default ServiceDetailPage;
