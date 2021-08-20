import React from 'react';
import Navbar from './Navbar/Navbar';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/HomePage'
import CreateProductPage from '../../pages/admin/CreateProductPage'
import CreateCategoryPage from '../../pages/admin/CreateCategoryPage'
import { Container } from 'semantic-ui-react';
import ProductDetails from '../../components/Products/details/ProductDetails'
import { ToastContainer } from 'react-toastify'
import Footer from './Footer/Footer'
import AdminProductDashboard from '../../components/Products/admin/AdminProductDashboard'
import AdminProductEdit from '../../components/Products/admin/AdminProductEdit'

const App = () => {

  return (
    <>
      <ToastContainer position='bottom-left' autoClose={3000} />
      <Navbar />
      <Route path='/' component={HomePage} exact />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Container style={{marginTop:'50px'}}>
              <Switch>
                  <Route path='/products/:id' component={ProductDetails} />
                  <Route path='/admin/products' exact component={AdminProductDashboard} />
                  <Route path='/admin/products/:id' exact component={AdminProductEdit} />
                  <Route path='/admin/createproduct' component={CreateProductPage} />
                  <Route path='/admin/createcategory' component={CreateCategoryPage} />
              </Switch>
            </Container>
          </>
        )}

      />
      <Footer />
    </>
  );
}

export default observer(App);
