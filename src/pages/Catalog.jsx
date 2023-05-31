import React from 'react';
import { Outlet } from 'react-router-dom';

function Catalog() {
  return (
    <main className="mt-16">
      <Outlet />
    </main>
  );
}

export default Catalog;
