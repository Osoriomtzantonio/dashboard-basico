import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-card-producto',
  imports: [CommonModule],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css',
})
export class CardProducto {
  @Input() producto!: Producto;
}
