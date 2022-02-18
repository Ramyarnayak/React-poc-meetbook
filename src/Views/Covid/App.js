import './App.css';

import React from "react"
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';
import Header from '../../components/Header/Header';

// Components




import Page from './screens/Page'
// Lazy load components: Code Splitting
// const Home = lazy(() => retry(() => import('screens/Page')));
// const AddInfo = lazy(() => retry(() => import('screens/AddInfo')));
// const About = lazy(() => retry(() => import('screens/About')));
// const Admin = lazy(() => retry(() => import('screens/AdminPage')));

const Covid = () => {
  const darkMode = useDarkMode(false);
  const location = useLocation();

  // const pages = [
  //   {
  //     pageLink: '/',
  //     view: Home,
  //     displayName: 'Home',
  //     showInNavbar: true,
  //   },
  //   {
  //     pageLink: '/addInfo',
  //     view: AddInfo,
  //     displayName: 'Add Info',
  //     showInNavbar: true,
  //   },
  //   {
  //     pageLink: '/about',
  //     view: About,
  //     displayName: 'About',
  //     showInNavbar: true,
  //   },
  //   {
  //     pageLink: '/admin',
  //     view: Admin,
  //     displayName: 'Admin',
  //     showInNavbar: false,
  //   },
  // ];

  return (
  <div>
      {/* <Navbar pages={pages} {...{ darkMode }} /> */}
{/* <About></About> */}<Header>

</Header>
<Page></Page>
      {/* <Suspense fallback={<div />}>
        <Switch location={location}>
          {pages.map((page, index) => (
            <Route
              exact
              path={page.pageLink}
              render={() => <page.view darkMode={darkMode} />}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))}
          <Redirect to='/' />
        </Switch>
      </Suspense> */}
    </div>
  );
};

export default Covid;
