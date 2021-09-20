import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base';
}


//Trabajo con Objetos

//Preparar un programa que permita crear productos, agregarlos a un almacen, modificar la cantidad de productos en el almacen (saldo), tener cuidado con los saldos negativos, trabajar con más de un almacen y mover productos entre almacenes.
//Todo es en consola, la aplicación deberá mostrar los mensajes correspondientes a las acciones de muestra, es decir, si creo un producto y lo agrego al almacen 01, mostrar los productos con sus saldos en el almacen 01.
//No es necesario interacción con la aplicación. Presentación individual. Subir el proyecto a github y presentar la url de github para la revisión del código fuente.


//Objetos--------------------------------------------------------------------------------------------------------------------------------

//Producto

class producto {
  nomProducto: string;
  cantProducto: number;

  constructor() {
    this.nomProducto = '';
    this.cantProducto = 0;
  }

  cantidad(operacion: string, monto: number): boolean{

    let status:boolean = false;

    if (monto <= 0) {
      console.log('---------------------------------------------')
      console.log('ERROR, no se puede ingresar el valor.');
      console.log('---------------------------------------------')
    }
    else {
      switch (operacion) {
        case 'add':
            this.cantProducto += monto; 
            console.log(`Se aumento la cantidad de [${this.nomProducto}] a +${monto}.`);
            return true;
        case 'remove':
          if ((this.cantProducto - monto) < 0) {
            console.log('---------------------------------------------')
            console.log('ERROR, no hay suficientes productos a quitar.');
            console.log('---------------------------------------------')
            return false;
          }
          else {
            this.cantProducto -= monto;
            console.log(`Se redujo la cantidad de [${this.nomProducto}] a -${monto}.`);
            return true;
          }
      }
      console.log(`La cantidad actual del producto [${this.nomProducto}] es de ${this.cantProducto}.`);
      return false;
    }
    return status;
  }
}

//Almacen

class almacen {
  nomAlmacen: string;
  prodAlmacen: producto[];

  constructor() {
    this.nomAlmacen = ''
    this.prodAlmacen = [];
  }
}

//Funciones

function existe(NombreProducto: string, almacen: almacen): boolean{         //Producto
  let status:boolean = false;
  almacen.prodAlmacen.forEach((producto) => {
    if (producto.nomProducto == NombreProducto) {
      status = true;
    }
  });
  return status;
}

function buscar(NombreProducto: string, almacen: almacen){              //Producto
  if (existe(NombreProducto, almacen) == true) {
    return almacen.prodAlmacen.find(producto => producto.nomProducto === NombreProducto);
  }
  return null;
}

function mover(origenAlmacen: almacen, NombreProducto: string, cantidad: number, almacenar: almacen){
  if (existe(NombreProducto,origenAlmacen)== true && existe(NombreProducto,almacenar) == true){
    if (buscar(NombreProducto, origenAlmacen)?.cantidad('remove', cantidad) == true){
      if (buscar(NombreProducto, almacenar)?.cantidad('add', cantidad) == true){
        console.log(`Se han trasladado [${cantidad} ${NombreProducto}] del [${origenAlmacen.nomAlmacen}] al [${almacenar.nomAlmacen}].`)
        console.log('---------------------------------------------')
      }
    }
  }
}

function mostrar(almacen: almacen){                                       //Producto del almacen
  console.log('---------------------------------------------')
  console.log(`Mostrando los productos del [${almacen.nomAlmacen}]`)
  console.log('Cantidad\tNombre Producto')
  almacen.prodAlmacen.forEach((producto) => {
    console.log(`\t${producto.cantProducto}\t\t\t${producto.nomProducto}`);
  });
  console.log('---------------------------------------------')
}

//Valores

const Almacen01 = new almacen(); Almacen01.nomAlmacen = 'Primer Almacen';
  const Producto01 = new producto();
    Producto01.nomProducto = "Aceite"
    Producto01.cantProducto = 100;
  const Producto02 = new producto();
    Producto02.nomProducto = "Avena"
    Producto02.cantProducto = 500;
  const Producto03 = new producto();
    Producto03.nomProducto = "Sal"
    Producto03.cantProducto = 50;
  const Producto04 = new producto();
    Producto04.nomProducto = "Mayonesa"
    Producto04.cantProducto = 200;
  const Producto05 = new producto();
    Producto05.nomProducto = "Huevo"
    Producto05.cantProducto = 60;
  const Producto06 = new producto();
    Producto06.nomProducto = "Jamon"
    Producto06.cantProducto = 6;
    
  Almacen01.prodAlmacen.push(Producto01)
  Almacen01.prodAlmacen.push(Producto02)
  Almacen01.prodAlmacen.push(Producto03)
  Almacen01.prodAlmacen.push(Producto04)
  Almacen01.prodAlmacen.push(Producto05)
  Almacen01.prodAlmacen.push(Producto06)

const Almacen02 = new almacen(); Almacen02.nomAlmacen = 'Segundo Almacen';
const Producto07 = new producto();
  Producto07.nomProducto = "Aceite"
  Producto07.cantProducto = 10;
const Producto08 = new producto();
  Producto08.nomProducto = "Avena"
  Producto08.cantProducto = 0;
const Producto09 = new producto();
  Producto09.nomProducto = "Sal"
  Producto09.cantProducto = 100;
const Producto10 = new producto();
  Producto10.nomProducto = "Mayonesa"
  Producto10.cantProducto = 50;
const Producto11 = new producto();
  Producto11.nomProducto = "Huevo"
  Producto11.cantProducto = 0;
const Producto12 = new producto();
  Producto12.nomProducto = "Jamon"
  Producto12.cantProducto = 20;
  
Almacen02.prodAlmacen.push(Producto07)
Almacen02.prodAlmacen.push(Producto08)
Almacen02.prodAlmacen.push(Producto09)
Almacen02.prodAlmacen.push(Producto10)
Almacen02.prodAlmacen.push(Producto11)
Almacen02.prodAlmacen.push(Producto12)

const Almacen03 = new almacen(); Almacen03.nomAlmacen = 'Tercer Almacen';
const Producto13 = new producto();
  Producto13.nomProducto = "Aceite"
  Producto13.cantProducto = 20;
const Producto14 = new producto();
  Producto14.nomProducto = "Avena"
  Producto14.cantProducto = 100;
const Producto15 = new producto();
  Producto15.nomProducto = "Sal"
  Producto15.cantProducto = 30;
const Producto16 = new producto();
  Producto16.nomProducto = "Mayonesa"
  Producto16.cantProducto = 0;
const Producto17 = new producto();
  Producto17.nomProducto = "Huevo"
  Producto17.cantProducto = 90;
const Producto18 = new producto();
  Producto18.nomProducto = "Jamon"
  Producto18.cantProducto = 40;
  
Almacen03.prodAlmacen.push(Producto13)
Almacen03.prodAlmacen.push(Producto14)
Almacen03.prodAlmacen.push(Producto15)
Almacen03.prodAlmacen.push(Producto16)
Almacen03.prodAlmacen.push(Producto17)
Almacen03.prodAlmacen.push(Producto18)


//Mostrar

mostrar(Almacen01);
mostrar(Almacen02);
mostrar(Almacen03);


mover(Almacen01,'Aceite',40,Almacen02);
mover(Almacen01,'Avena',250,Almacen02);
mover(Almacen01,'Huevo',20,Almacen02);
mover(Almacen02,'Mayonesa',40,Almacen03);


mostrar(Almacen01);
mostrar(Almacen02);
mostrar(Almacen03);