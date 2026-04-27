import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DetailView from '../components/DetailView';
import { PROCESS_DATA } from '../data/processes';

const ProcessDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const process = PROCESS_DATA.find(p => p.id === id);

  if (!process) {
    return <Navigate to="/" replace />;
  }

  return <DetailView data={process} />;
};

export default ProcessDetailPage;
