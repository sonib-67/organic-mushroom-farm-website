import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DetailView from '../components/DetailView';
import { PROCESS_DATA } from '../data/processes';
import SEO from '../components/SEO';

const ProcessDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const process = PROCESS_DATA.find(p => p.id === id);

  if (!process) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO 
        title={`${process.title} - Step-by-Step Cultivation Process`}
        description={process.description || `Read our certified step-by-step master guide for ${process.title} in commercial mushroom cultivation.`}
        url={`/process/${id}`}
      />
      <DetailView data={process} />
    </>
  );
};

export default ProcessDetailPage;
