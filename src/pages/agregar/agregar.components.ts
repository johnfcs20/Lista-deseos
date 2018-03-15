import {Component, OnInit} from '@angular/core';
import {Lista, ListaItem} from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
@Component({

  selector: 'app-agregar',
  templateUrl: 'agregar.components.html',

})

export class AgregarComponent implements OnInit {
  nombreLista: string ="";
  nombreItem: string ="";

  items : ListaItem[] = [];

  constructor(

    public alertCtrl :AlertController,
    public navCtrl :NavController,
   public _listaDeseos: ListaDeseosService

  ){}
  ngOnInit(){}
  agregar(){
    if(this.nombreItem.length==0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push(item);
    this.nombreLista="";
    console.log(this.items);

  }

  borrar(idx:number){
    this.items.splice(idx,1);
    console.log(idx);
  }

  guardarLista(){

    if(this.nombreLista.length==0){
      let alert = this.alertCtrl.create({
        title: 'Nombre vacio',
        subTitle: 'Nombre obligatorio',
        buttons: ['OK']
      });
      alert.present();
      return;
            }

            let lista = new Lista(this.nombreLista);
            lista.items = this.items;

            //this._listaDeseos.listas.push(lista);
            this._listaDeseos.agregarLista(lista);
            this.navCtrl.pop()



}
}
