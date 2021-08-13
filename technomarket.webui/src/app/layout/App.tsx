import React from 'react';
import Navbar from './Navbar/Navbar';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import CreateProductPage from '../../pages/admin/CreateProductPage'
import { Container } from 'semantic-ui-react';
import ProductDetails from '../../components/Products/details/ProductDetails'

const App = () => {

  return (
    <>
      <Navbar />
      <Route path='/' component={HomePage} exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Container>
              <Switch>
                  <Route path='/products/:id' component={ProductDetails} />
                  <Route path='/createproduct' component={CreateProductPage} />
              </Switch>
            </Container>
          </>
        )}

      />
    </>
  );
}

export default observer(App);
