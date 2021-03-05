import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/service/cliente.service';
import { ToastyService } from 'ng2-toasty';
import { Cliente } from '../shared/model/modelo';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[];
  public cliente: Cliente;
  public dialogNovoCliente: boolean;
  public dialogEditarCliente: boolean;
  public clienteSelecionado: Cliente;
  public novoCliente = new Cliente();
  public senhaCli: string;

  constructor(
    private clienteService: ClienteService,
    private toastyService: ToastyService) { }

  ngOnInit() {
    this.buscarCliente();
  }

  public buscarCliente() {
    this.clienteService.listarClientes().then(response => {
      this.clientes = response;
    }) .catch( error => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Clientes');
    });
  }

  public buscarPeloId(id: number) {
    this.clienteService.buscarClienteId(id).then(response => {
      this.cliente = response;
    }).catch( error => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Cliente selecionado!');
    });
  }

  public abrirDialogNovoCliente() {
    this.dialogNovoCliente = true;
  }

  public abrirDialogEditarCliente(cliente: Cliente) {
    this.dialogEditarCliente = true;
    this.clienteSelecionado = cliente;
  }

  public fechar() {
    this.dialogEditarCliente = false;
    this.dialogNovoCliente = false;
    this.novoCliente = new Cliente();
    this.buscarCliente();
  }

  public salvarCliente() {
    if (this.novoCliente.senha === this.senhaCli) {
      this.clienteService.novoCliente(this.novoCliente)
      .then(response => {
        this.toastyService.clearAll();
        this.toastyService.success('Cliente cadastrado com sucesso!');
        this.fechar();
      })
      .catch(erro => {
        this.toastyService.clearAll();
        this.toastyService.error('Problema ao cadastrar novo Cliente!');
      });
    } else {
      this.toastyService.clearAll();
      this.toastyService.warning('As senhas não conferem, por favor tente novamente!');
    }

  }
    public atualizaCliente() {
        this.clienteService.atualizarCliente(this.clienteSelecionado)
        .then(response => {
          this.toastyService.clearAll();
          this.toastyService.success('Cliente Atualizado com Sucesso!');
          this.fechar();
        })
        .catch(erro => {
          this.toastyService.clearAll();
          this.toastyService.error('Problema ao atualizar Cliente!');
        });
      }
}
