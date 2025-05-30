import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>Logo</div>
      <nav>
        {/* Navigation links */}
      </nav>
      <div>Profile Dropdown</div>
      <button>Theme Toggle</button>
    </header>
  );
};

export default Header;