import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Suspense, lazy } from 'react';

// store
import store from './redux/store';
import { Provider } from 'react-redux';

// components

import Header from './components/container/Header';
import Spinner from './utils/Spinner';

const ProductDetail = lazy(() =>
  import('./components/container/ProductDetail')
);
const ProductListing = lazy(() =>
  import('./components/container/ProductListing')
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Suspense fallback={<Spinner />}>
                <ProductListing />
              </Suspense>
            </Route>
            <Route path="/product/:productId" exact>
              <Suspense fallback={<Spinner />}>
                <ProductDetail />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
