import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SkeletonTheme } from 'react-loading-skeleton';
import client from './services/react-query';
import Appsignal from '@appsignal/javascript';
import { ErrorBoundary } from '@appsignal/react';

import actioncable from 'actioncable';

const Cable = {};

const appsignal = new Appsignal({
  key: '73802651-2d80-40e3-84e9-96bfc124dc85'
});
const FallbackComponent = () => <div>Uh oh! There was an error :(</div>;

Cable.cable = actioncable.createConsumer('ws://localhost:3000/cable');

window.actioncable = actioncable.createConsumer('ws://localhost:3000/cable');

export const CableContext = React.createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary
    instance={appsignal}
    tags={{ tag: 'value' }}
    fallback={(error) => <FallbackComponent />}
  >
    <SkeletonTheme baseColor="#dfdfdf" highlightColor="#d6d6d6">
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center space-x-2">
                <div
                  className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
                  role="status"
                ></div>
                <div
                  className="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0"
                  role="status"
                ></div>
              </div>
            }
          >
            <CableContext.Provider value={Cable.cable}>
              <App />
            </CableContext.Provider>
          </Suspense>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </BrowserRouter>
    </SkeletonTheme>
  </ErrorBoundary>
);

appsignal.demo();
