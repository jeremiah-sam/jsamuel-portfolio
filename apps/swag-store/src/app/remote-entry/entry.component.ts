import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from "../app.module";

@Component({
  standalone: true,
  imports: [CommonModule, AppModule],
  selector: 'app-swag-store-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
