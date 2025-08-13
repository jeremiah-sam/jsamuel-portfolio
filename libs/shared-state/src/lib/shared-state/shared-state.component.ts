import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-shared-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-state.component.html',
  styleUrl: './shared-state.component.css',
})
export class SharedStateComponent {}
