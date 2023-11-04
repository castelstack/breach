import BackButton from '@/app/components/BackButton';
import Header from '@/app/components/Header';
import Link from 'next/link';
import SignupForm from './SignupForm';

export default function SignUp() {
  return (
    <main>
      <Header />
      <section className='md:px-1 px-4 max-w-[1053px] mx-auto w-full mt-9'>
        <BackButton />
        <div className='grid place-content-center mt-12 w-full md:max-w-[448px] mx-auto'>
          <h2 className='text-2 text-center'>Join Breach</h2>
          <h4 className='text-5 text-center mb-[48px]'>
            Break through the noise and discover content that matters to you in
            under 3 minutes.
          </h4>
          <SignupForm />
          <p className='text-sm text-center mt-6'>
            Already have an account?{' '}
            <Link href={'/login'} className='underline'>
              Log in
            </Link>
          </p>
          <p className='text-sm text-center mt-[126px]'>
            By signing up, you agree to Breach&apos;s{' '}
            <Link href={'/terms'} className='text-primary'>
              Terms
            </Link>{' '}
            &{' '}
            <Link href={'/terms'} className='text-primary'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
