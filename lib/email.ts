import { sendTrainingEmailService } from './trainingMailService';

export const sendTrainingEmail = async (params: {
  type: 'INITIATED' | 'SUCCESS' | 'CANCELLED';
  customerEmail: string;
  customerName: string;
  amount: string;
  currency: string;
}) => {
  return sendTrainingEmailService(params);
};
