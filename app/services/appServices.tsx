import { FormProps } from '../types';
import axiosInstance from './axiosConfig';

class AppServices {
  getUserInterests(id: string) {
    return axiosInstance.get(`users/${id}/interests`);
  }

  getBlogs(categoryId?: string) {
    return axiosInstance.get(`blog/posts${categoryId ? `?categoryId=${categoryId}` : ''}`);
  }
  getBlogsCategories() {
    return axiosInstance.get(`blog/categories`);
  }

  async registerUser(values: FormProps) {
    const res = await axiosInstance.post(`auth/register`, {
      ...values,
    });
    return res;
  }

  async loginUser(values: FormProps) {
    const res = await axiosInstance.post(`auth/login`, {
      ...values,
    });
    return res;
  }

  async createInterests({ id, values }: { id: string; values: string[] }) {
    const res = await axiosInstance.post(`users/${id}/interests`, {
      interests: values,
    });
    return res;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AppServices();
