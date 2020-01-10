import React from 'react';
import ListFilters from "./ListFilters";

export default {
  title: 'Dropdown',
  component: ListFilters,
  decorators: [storyFn => <div style={{ maxWidth: 391 }}>{storyFn()}</div>],
  excludeStories: /.*Data$/,
};

export const dropdownData = {
  title: 'Platform',
  options: [
    {
      value: 'android',
      name: 'Android',
    },
    {
      value: 'ios',
      name: 'iOS',
    },
    {
      value: 'nintendo',
      name: 'Nintendo',
    },
    {
      value: 'pc',
      name: 'PC',
    },
    {
      value: 'ps3',
      name: 'PS3',
    },
  ],
};

export const DropdownStandard = () => <ListFilters {...dropdownData} />;
