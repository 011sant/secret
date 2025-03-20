interface ApiResponse<T> {
  data: T;
  error?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.spectersoftware.com';

export const api = {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      const data = await response.json();
      return { data };
    } catch (error) {
      return {
        data: {} as T,
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      };
    }
  },

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return { data };
    } catch (error) {
      return {
        data: {} as T,
        error: error instanceof Error ? error.message : 'Erro desconhecido'
      };
    }
  }
};

export const productService = {
  getProducts: () => api.get('/products'),
  getProductDetails: (id: string) => api.get(`/products/${id}`),
  // ... outros métodos
};

export const analyticsService = {
  getDashboardData: () => api.get('/analytics/dashboard'),
  getReports: () => api.get('/analytics/reports'),
  // ... outros métodos
};
