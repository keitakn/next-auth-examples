import type { NextPage } from 'next';
import { GoogleLoginButton } from './_components';

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
