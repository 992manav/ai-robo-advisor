import axios from 'axios';
import type { AdvisorRequest, AdvisorResult, LLMModel } from '@/types';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const advisorApi = {
  getAvailableModels: async (): Promise<LLMModel[]> => {
    const response = await api.get<LLMModel[]>('/models');
    return response.data;
  },

  runAnalysis: async (request: AdvisorRequest): Promise<AdvisorResult> => {
    const response = await api.post<AdvisorResult>('/analyze', request);
    return response.data;
  },

  checkHealth: async (): Promise<{ status: string }> => {
    const response = await api.get<{ status: string }>('/health');
    return response.data;
  },
};

export default api;
