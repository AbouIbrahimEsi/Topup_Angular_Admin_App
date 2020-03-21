import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Profil',
    group: true,
  },
  {
    title: 'Mon profil',
    icon: 'person-outline',
    link: '/pages/profile',
    home: true,
  },
  {
    title: 'Opérations',
    group: true,
  },
  {
    title: 'Activation',
    icon: 'star-outline',
    link: '/pages/activation',
    home: true,
  },
  {
    title: 'Rechargement',
    icon: 'npm-outline',
    link: '/pages/topup',
  },

  {
    title: 'Gestion des puces',
    group: true,
  },
  {
    title: 'Etats',
    icon: 'shield-outline',
    link: '/pages/chips-status',
  },
  {
    title: 'SIMS',
    icon: 'file-text-outline',
    link: '/pages/chips',
  },
  {
    title: 'Stock',
    icon: 'clipboard-outline',
    link: '/pages/chips-stock',
  },
  {
    title: 'Alerts',
    icon: 'alert-circle-outline',
    link: '/pages/chips-alerts',
  },
  {
    title: 'Réponses',
    icon: 'award-outline',
    link: '/pages/chips-responses',
  },

  {
    title: 'Gestions des offres',
    group: true,
  },
  {
    title: 'Offres',
    icon: 'calendar-outline',
    link: '/pages/offers',
  },
  {
    title: 'Alerts sur prix des offres',
    icon: 'alert-triangle-outline',
    link: '/pages/offers-alerts',
  },

  {
    title: 'Transactions',
    group: true,
  },
  {
    title: 'Commandes statiques',
    icon: 'hash-outline',
    link: '/pages/transactions-commands',
  },
  {
    title: 'Historique',
    icon: 'book-open-outline',
    link: '/pages/transactions-history',
  },

  {
    title: 'Gestion des utilisateurs',
    group: true,
  },
  {
    title: 'Utilisateurs',
    icon: 'people-outline',
    link: '/pages/users',
  },
  {
    title: 'Roles',
    icon: 'person-done-outline',
    link: '/pages/roles',
  },
];
