import { Fornecedor } from './../model/fornecedor.model';
import { ToastyService } from 'ng2-toasty';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class FornecedorService {

  private fornecedorURL = 'http://localhost:8080/fornecedores';

  constructor(
    private http: AuthHttp,
    private toastyService: ToastyService) { }

  public listarFornecedores(): Promise<Fornecedor[]> {
    return this.http.get(this.fornecedorURL).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Fornecedores');
      console.log('Erro ao buscar Fornecedores', erro);
    } );
  }

  public buscarFornecedorId(id: number): Promise<Fornecedor> {
    return this.http.get(`${this.fornecedorURL}/${id}`).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Fornecedor');
      console.log('Erro ao buscar Fornecedor', erro);
    });
  }

  public atualizarFornecedor(fornecedor: Fornecedor): Promise<Fornecedor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.fornecedorURL}/${fornecedor.id}`, JSON.stringify(fornecedor), { headers })
    .toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao atualizar Fornecedor');
    });
  }

  public novoFornecedor(fornecedor: Fornecedor): Promise<Fornecedor> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.fornecedorURL}`, JSON.stringify(fornecedor), { headers }).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao cadastrar Fornecedor!');
    });
  }

  public excluirFornecedor(id: number): Promise<Fornecedor> {
    return this.http.delete(`${this.fornecedorURL}/${id}`).toPromise()
    .then(() => null)
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problema ao excluir Fornecedor');
      console.log('Erro ao excluir fornecedor!', erro);
    });
  }

}
