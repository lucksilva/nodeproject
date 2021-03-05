import { ClienteService } from './../shared/service/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Cliente } from '../shared/model/modelo';

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientesComponent implements OnInit {

  public clientes: Cliente[];

  constructor(
    private clienteService: ClienteService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarClientes();
  }

  public carregarClientes(): void {
    this.clienteService.listarClientes()
    .then(response => {
      this.clientes = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao gerar relatório de Clientes! Tente novamente...');
    });
  }
}
