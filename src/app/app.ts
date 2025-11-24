import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProducto } from './card-producto/card-producto';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CardProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Dell XPS 13',
      precio: 1299.99,
      imagen: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
      enOferta: true
    },
    {
      id: 2,
      nombre: 'Mouse Logitech MX Master 3',
      precio: 99.99,
      imagen: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400',
      enOferta: false
    },
    {
      id: 3,
      nombre: 'Teclado Mecánico Keychron K2',
      precio: 89.99,
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      enOferta: true
    },
    {
      id: 4,
      nombre: 'Monitor Samsung 27" 4K',
      precio: 449.99,
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
      enOferta: false
    },
    {
      id: 5,
      nombre: 'Audífonos Sony WH-1000XM4',
      precio: 349.99,
      imagen: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
      enOferta: true
    },
    {
      id: 6,
      nombre: 'WebCam Logitech C920',
      precio: 79.99,
      imagen: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400',
      enOferta: false
    }
  ];
}
