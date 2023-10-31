import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'aperture',
    route: '/dashboard/dashboard-view',
  },
  {
    displayName: 'Users',
    iconName: 'brand-ctemplar',
    route: 'apps/employee',
  },
  {
    displayName: 'Roles',
    iconName: 'lock-access',
    route: 'apps/roles-users',
  },
  {
    displayName: 'Settings',
    iconName: 'tool',

    children: [
      {
        displayName: 'Regional Settings',

        children: [
          {
            displayName: 'Currencies',
            route: 'apps/currencies',
          },

          {
            displayName: 'VAT rate',
            route: 'apps/vat-rate',
          },

          {
            displayName: 'Units',
            route: 'apps/units',
          },
        ],
      },
      {
        displayName: 'General Settings',

        route: 'apps/general-settings',
      },
      {
        displayName: 'Machines/Operations',

        route: 'apps/machines-operations',
      },
      {
        displayName: 'Additional Fields',

        route: 'apps/additional-fields',
      },
      {
        displayName: 'Tags',

        route: 'apps/tags',
      },
      {
        displayName: 'API Key',

        route: 'apps/api-keys',
      },
    ],
  },
];
