import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css'],
})
export class CajeroComponent{

  produ: any[] = [];
  total: number  = 0;
  acum: number  = 0;
  cambio: number = 0;
  mostrar: boolean = false;
  monto: any;
  array: any = [];
  mensaje: any;
  concat: any = '';

  productos: any[] = [
    {
      imagen: 'https://i1.wp.com/www.buenmercadoacasa.com/blog/wp-content/uploads/2018/05/variedades-de-manzanas-buenmercadoacasa-portada.jpg?fit=2880%2C1800&ssl=1',
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


  dinero: any = 
    {
    p1 : {
      valor: 1,
      cantidad: 50
    },
    p2 : {
      valor: 2,
      cantidad: 50
    },
    p5 : {
      valor: 5,
      cantidad: 30
    },
    p10 : {
      valor: 10,
      cantidad: 20
    },
    p20 : {
      valor: 20,
      cantidad: 20
    },
    p50 : {
      valor: 50,
      cantidad: 10
    },
    p100 : {
      valor: 100,
      cantidad: 5
    }
    }
  

  nuevo: any[] = [];
  cost: any;

  constructor() {
   }

  pasarProductos(respuesta: any[]) {
    this.produ = respuesta
    
   }

   comprar(){
    this.mostrar = true;
    this.cambio = this.monto-this.acum;
    let change = 0;

    for (let i = 0; i <= this.cambio; i++) {
      if(this.dinero.p100.cantidad > 0 && change+100 <= this.cambio){
        change +=100;
        this.dinero.p100.cantidad -= 1;
        this.array.push(100)
      }else{
        if(this.dinero.p50.cantidad > 0 && change+50 <= this.cambio){
          change +=50;
          this.dinero.p50.cantidad -= 1;
          this.array.push(50)
        }else{
          if(this.dinero.p20.cantidad > 0 && change+20 <= this.cambio){
            change +=20;
            this.dinero.p20.cantidad -= 1;
            this.array.push(20)
          }else{
            if(this.dinero.p10.cantidad > 0 && change+10 <= this.cambio){
              change +=10;
              this.dinero.p10.cantidad -= 1;
              this.array.push(10)
            }else{
              if(this.dinero.p5.cantidad > 0 && change+5 <= this.cambio){
                change +=5;
                this.dinero.p5.cantidad -= 1;
                this.array.push(5)
              }else{
                if(this.dinero.p2.cantidad > 0 && change+2 <= this.cambio){
                  change +=2;
                  this.dinero.p2.cantidad -= 1;
                  this.array.push(2)
                }else{
                  if(this.dinero.p1.cantidad > 0 && change+1 <= this.cambio){
                    change +=1;
                    this.dinero.p1.cantidad -= 1;
                    this.array.push(1)
                  }
                  else{
                    this.mensaje = 'Ya no hay cambio o no se completa'
                    break;
                  }
                }
              }
            }
          }
        }
      }
      i = change     
    }
    for (let i = 0; i < this.array.length; i++) { 
        this.concat += ' Se le entrego billete o moneda con valor de: '+this.array[i]
    }
    this.mensaje = this.concat;
   }

   nuevaVenta(){
    this.mostrar = false;
    this.produ = [];
    this.nuevo = [];
    this.productos = [
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
    this.acum = 0;
    this.monto = 0;

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
      this.acum += product.costo;
      
    }
    else{
      this.nuevo.push(product)
      this.acum += product.costo;
    }
    
    this.pasarProductos(this.nuevo)
  }


}
