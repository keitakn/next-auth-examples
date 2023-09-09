import { GoogleLoginButton } from '@/app/google/_components';
import type { NextPage } from 'next';

const GoogleLoginPage: NextPage = () => {
  return (
    <>
      <div className="max-w-sm px-6 sm:px-0">
        <GoogleLoginButton />
      </div>
    </>
  );
};

export default GoogleLoginPage;
