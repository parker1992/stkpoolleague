import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from '@/App.tsx';
import '@/index.css';
import { Teams } from '@/components/Teams.tsx';
import { Rulebook } from '@/components/Rulebook.tsx';
import { Locations } from '@/components/Locations.tsx';
import { Schedule } from '@/components/Schedule.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/rulebook" element={<Rulebook />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
