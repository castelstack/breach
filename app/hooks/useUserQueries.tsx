import { useQuery, useQueryClient, useMutation, UseQueryResult } from 'react-query';
import appServices from '../services/appServices';
import { FormProps } from '../types';
import { AxiosResponse } from 'axios';

const useUserInterets = (id: string) => {
  return useQuery(['intersets', id], () => appServices.getUserInterests(id));
};
const useAllBlogs = (categoryId?: string): UseQueryResult<AxiosResponse<any, any>, any> => {
  return useQuery(['blogs', categoryId], () =>
    appServices.getBlogs(categoryId)
  );
};
const useBlogsCategories = (): UseQueryResult<AxiosResponse<any, any>, any> => {
  return useQuery(['categories'], () => appServices.getBlogsCategories());
};

const useRegisterUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (values: FormProps) => {
      return appServices.registerUser(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
};

const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (values: FormProps) => {
      return appServices.loginUser(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
};

const useCreateInterests = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ id, values }: { id: string; values: string[] }) => {
      return appServices.createInterests({ id, values });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories');
      },
    }
  );
};

export {
  useRegisterUser,
  useLoginUser,
  useAllBlogs,
  useBlogsCategories,
  useUserInterets,
  useCreateInterests,
};
