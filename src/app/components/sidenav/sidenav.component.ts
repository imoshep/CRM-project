import { Component } from '@angular/core';
import { navItem } from '../../interfaces/navItem';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  navItems: Array<navItem> = [
    {
      title: 'customers',
      icon: 'fas fa-users',
      link: 'customers'
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: 'contacts'
    },
    {
      title: 'leads',
      icon: 'fas fa-hand-point-up',
      link: 'leads'
    },
    {
      title: 'reports',
      icon: 'fas fa-flag',
      link: 'reports'
    },
    {
      title: 'integrations',
      icon: 'fab fa-stack-exchange',
      link: 'integrations'
    },
    {
      title: 'year-end sale',
      icon: 'fas fa-glass-cheers',
      link: 'yearEndSale'
    }
  ]
};
