import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HOME_PAGE_PATH, PRODUCTS_PAGE_PATH, PRODUCT_PAGE_PATH } from '@/constants';
import HomePage from '@/components/pages/HomePage';
import ProductsPage from '@/components/pages/ProductsPage';
import ProductPage from '@/components/pages/ProductPage';

export default () => (
  <Switch>
    <Route path={HOME_PAGE_PATH} exact component={HomePage} />
    <Route path={PRODUCTS_PAGE_PATH} component={ProductsPage} />
    <Route path={PRODUCT_PAGE_PATH} component={ProductPage} />
  </Switch>
);
