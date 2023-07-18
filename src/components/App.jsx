import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { getUserIsRefresh } from 'redux/auth/selectors';
import { refreshUserData } from 'redux/auth/operation';
import PrivateRout from './PrivateRout';
import PublicRoute from './PublicRoute';
const PageRegister = lazy(() => import('../Page/PageRegister'));
const PageLogin = lazy(() => import('../Page/PageLogin'));
const PageContacts = lazy(() => import('../Page/PageContacts'));
const HomePage = lazy(() => import('../Page/HomePage'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getUserIsRefresh);

  useEffect(() => {
    dispatch(refreshUserData());
  }, [dispatch]);

  return (
    <>
      <Suspense fallback="Завантаження...">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <PublicRoute component={<PageLogin />} redirectTo="/contacts" />
              }
            />
            <Route
              path="register"
              element={<PublicRoute component={<PageRegister />} />}
            />
            <Route
              path="contacts"
              element={
                <PrivateRout component={<PageContacts />} redirectTo="/login" />
              }
            />
          </Route>
        </Routes>
      </Suspense>
      {/* <Section>
        <FormHandler />
      </Section>
      <Section>
        <Filter />
        {loadingStatus && !error && <b>Request in progress...</b>}
        <Contacts title={'Contacts'} />
      </Section> */}
    </>
  );
}
