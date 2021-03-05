import { LoginService } from './../../login/shared/service/login.service';
import { ToastyService } from 'ng2-toasty';
import { Cliente } from './../shared/model/modelo';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/service/cliente.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  public clienteSelecionado: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private toastyService: ToastyService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.buscarDados();
  }

  public buscarDados(): void {
      this.clienteService.buscarClienteId(this.loginService.jwtPayLoad.idCli)
      .then(response => {
        this.clienteSelecionado = response;
      }).catch( error => {
        this.toastyService.clearAll();
        this.toastyService.error('Erro ao buscar Cliente Logado!');
      });
    }

    public atualizaCliente() {
      this.clienteService.atualizarCliente(this.clienteSelecionado)
      .then(response => {
        this.toastyService.clearAll();
        this.toastyService.success('Cliente Atualizado com Sucesso!');
        this.buscarDados();
      })
      .catch(erro => {
        this.toastyService.clearAll();
        this.toastyService.error('Problema ao atualizar Cliente!');
      });
    }
}
