'use client';

import { useLoginUser } from '@/app/hooks/useUserQueries';
import { useUserStore } from '@/app/store/store';
import { AxiosResponse } from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import Notiflix from 'notiflix';
import * as Yup from 'yup';

export default function LoginForm() {
  const route = useRouter();
  const { mutate: loginUser } = useLoginUser();
  const setUserId = useUserStore((state) => state.setUserId);
  return (
    <Formik
      initialValues={{ password: '', email: '' }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, 'Password must be 8 characters or more')
          .required(),
        email: Yup.string().email('Invalid email address').required(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        loginUser(values, {
          onSuccess(response: AxiosResponse<any, any>) {
            Notiflix.Notify.success('Successfully logged!');
            sessionStorage.setItem('auth-token', response.data.token);
            setUserId(response.data.userId);
            route.push('/welcome');
            setSubmitting(false);
          },
          onError(error: any) {
            console.log(error);
            if (error.response.status === 409) {
              Notiflix.Notify.warning(error.response.data.message);
            } else {
              Notiflix.Notify.failure(error.response.data.message);
            }
            setSubmitting(false);
          },
        });
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className=' w-full grid grid-cols-1 gap-5'
        >
          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <span className='error-text'>{formik.errors.email}</span>
            ) : null}
          </div>

          <div className='flex flex-col gap-1'>
            <label htmlFor='password'>Password</label>
            <input
              id='password'
              type='password'
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className='error-text'>{formik.errors.password}</span>
            ) : null}
          </div>

          <button
            type='submit'
            className='btn-dark mt-10'
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}
