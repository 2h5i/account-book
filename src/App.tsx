import React, { useMemo } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages';
import Header from './pages/Header';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/Menu3';

function App() {
  const menus = useMemo(
    () => [
      {
        name: '메뉴1',
        component: Home,
        path: '/',
      },
      {
        name: '메뉴2',
        component: Menu2,
        path: '/2',
      },
      {
        name: '메뉴3',
        component: Menu3,
        path: '/3',
      },
    ],
    []
  );

  return (
    <div className="App">
      <Header menus={menus} />
      {menus.map((m) => (
        <>
          <Route path={m.path} component={m.component} exact />
        </>
      ))}
    </div>
  );
}

export default App;
