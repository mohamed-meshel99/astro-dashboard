import axios from 'axios';
import type { VitalSignRecord } from '../types';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

export const healthService = {
  getAstronautVitals: async (astronautId: string): Promise<VitalSignRecord[]> => {
    const response = await apiClient.get(`/astronauts/${astronautId}/vitals`);
    return response.data;
  }
};

export default apiClient;