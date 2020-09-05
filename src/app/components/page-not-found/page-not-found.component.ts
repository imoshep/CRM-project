import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-page-header
      title="error"
      description="page not found"
      icon="fas fa-exclamation-circle"
      ></app-page-header>
  `,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent  {}
