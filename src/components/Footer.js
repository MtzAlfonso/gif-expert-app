import React from 'react';

export const Footer = () => {
  return (
    <footer>
      <span className="name">
        &copy; {new Date().getFullYear()} J. Alfonso Mtz
      </span>
      <img src="/logo192.png" alt="React" />
      <span className="powered">powered by React </span>
    </footer>
  );
};
