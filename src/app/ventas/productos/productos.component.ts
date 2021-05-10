import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


let nuevo = []
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Output() produ: EventEmitter<any[]> = new EventEmitter<any[]>();

  productos: any[] = [
    {
      imagen: 'https://lh3.googleusercontent.com/proxy/oDg31tV-5d3r0S65OgUhL6CFAGXe0KKXdSb8NsYEdogWEg6GsRwSZnVfZqr2PBKdYk2dbmfyFjN69VKlwCi4zz3iIq_3nunC3wzOFhCFP47UM5rqTwYPxQ',
      nombre: 'Manzana',
      descripcion: 'Rica manzana roja con un precio increible',
      costo: 30,
      cantidad: 1
    },
    {
      imagen: 'https://agrichem.mx/wp-content/uploads/2018/09/Durazno-1024x768.jpg',
      nombre: 'Durazno',
      descripcion: 'Poderosisimo Durazno, te hara volar de la emocion con este maginifico precio',
      costo: 45,
      cantidad: 1
    },
    {
      imagen: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-86304874-1536765306.jpg?crop=1xw:0.627831715210356xh;center,top&resize=480:*',
      nombre: 'Platano',
      descripcion: 'Platano recien traido de Madagascar, se dice que tiene propiedades curativas y a un precio inimaginable!',
      costo: 60,
      cantidad: 1
    },
  ];

  nuevo: any[] = [];
  cost: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  agregar(product: any){
    
    if(this.nuevo.includes(product)){
      for (let i = 0; i < this.nuevo.length; i++) {
          if (this.nuevo[i] === product){
            this.cost = product.costo;
            this.nuevo[i].cantidad +=  1;
            this.nuevo[i].costo *= this.nuevo[i].cantidad
            product.costo = this.cost;
          }
        
      }
    }
    else{
      this.nuevo.push(product)
    }
    
    this.produ.emit(this.nuevo)
  }

 



}
