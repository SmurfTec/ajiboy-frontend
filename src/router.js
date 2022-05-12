import React, { useContext, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Loading from 'components/common/Loading';

const CommonLayout = lazy(() => import('components/layouts/CommonLayout'));

const Auth = lazy(() => import('components/Auth'));
const Dashboard = lazy(() => import('components/Dashboard'));
const HomePage = lazy(() => import('components/Home'));
const Post = lazy(() => import('components/Post'));
const About = lazy(() => import('components/static/About'));
const Working = lazy(() => import('components/static/HowitWorks'));
const Faq = lazy(() => import('components/static/Faq'));
const Contact = lazy(() => import('components/static/Contact'));
const Privacy = lazy(() => import('components/static/PrivacyPolicy'));
const Disclaimer = lazy(() => import('components/static/Disclaimer'));
const Conditions = lazy(() => import('components/static/TermCondition'));

const ForgotPassword = lazy(() => import('components/Auth/ForgotPassword'));
const ResetPassword = lazy(() => import('components/Auth/ResetPassword'));
const ConfirmMail = lazy(() => import('components/Auth/ConfirmMail'));

const Router = () => {
  const { user, authenticating } = useSelector((st) => st.auth);
  if (authenticating) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/' element={<CommonLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='working' element={<Working />} />
          <Route path='faq' element={<Faq />} />
          <Route path='posts/:id' element={<Post />} />
          <Route path='disclaimer' element={<Disclaimer />} />
          <Route path='privacy' element={<Privacy />} />
          <Route path='conditions' element={<Conditions />} />
          <Route path='contact' element={<Contact />} />
          {user && (
            <>
              <Route path='dashboard/' element={<Dashboard />} />
              <Route path='dashboard/:tab' element={<Dashboard />} />
            </>
          )}
          <Route path='forgotPassword' element={<ForgotPassword />} />
          <Route path='resetPassword/:token' element={<ResetPassword />} />
          <Route path='confirmMail/:token' element={<ConfirmMail />} />
          <Route path='auth' element={<Auth />} />
          <Route path='auth/:tab' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
