import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-primary text-white py-8">
        <div className="section-container text-center">
          <p className="text-white/90">© {new Date().getFullYear()} Luke Slater. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
