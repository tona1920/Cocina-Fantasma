import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/pago.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.css']
})
export class ItemProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  addToCart():void {
    Swal.fire({
      icon: 'success',
      title: 'Producto Agregado',
      text: 'Se ha añadido '+this.product.name+' al carrito',
      footer: '<a href="/pago">Quieres ver tu carrito?</a>'
    })
    this.messageService.sendMessage(this.product);
  }

}
