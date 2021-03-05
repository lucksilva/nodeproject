import { ToastyService } from 'ng2-toasty';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/modelo';
import 'rxjs//add/operator/toPromise';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ClienteService {

  private clientesURL = 'http://localhost:8080/clientes';

  constructor(
    private http: AuthHttp,
    private toastyService: ToastyService) { }

  public listarClientes(): Promise<Cliente[]> {
    return this.http.get(this.clientesURL).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Clientes');
      console.log('Erro ao buscar Clientes', erro);
    } );
  }

  public buscarClienteId(id: number): Promise<Cliente> {
    return this.http.get(`${this.clientesURL}/${id}`).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Cliente');
      console.log('Erro ao buscar Cliente', erro);
    });
  }

  public atualizarCliente(cliente: Cliente): Promise<Cliente> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.clientesURL}/${cliente.id}`, JSON.stringify(cliente), { headers })
    .toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao atualizar Cliente');
    });
  }

  public novoCliente(cliente: Cliente): Promise<Cliente> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.clientesURL}`, JSON.stringify(cliente), { headers }).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao cadastrar Cliente!');
    });
  }

}
