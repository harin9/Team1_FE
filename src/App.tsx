import Header from 'components/organisms/HeaderNB';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNB from 'components/organisms/HeaderNB';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <HeaderNB />
      <ErrorBoundary fallback={<p>에러...</p>}>
        <Suspense fallback={<p>로딩...</p>}>
          <Routes>
            <Route path={'/'} element={<div>메인...</div>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
