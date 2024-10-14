import Image from 'next/image';
import React from 'react';
import MenuItem from '../menu/MenuItem';

export default function HomeMenu() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}
