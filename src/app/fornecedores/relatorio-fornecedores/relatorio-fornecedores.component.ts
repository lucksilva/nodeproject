import { FornecedorService } from './../shared/service/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Fornecedor } from '../shared/model/fornecedor.model';

@Component({
  selector: 'app-relatorio-fornecedores',
  templateUrl: './relatorio-fornecedores.component.html',
  styleUrls: ['./relatorio-fornecedores.component.css']
})
export class RelatorioFornecedoresComponent implements OnInit {

  public fornecedores: Fornecedor[];
  constructor(
    private fornecedorService: FornecedorService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarFornecedores();
  }

  public carregarFornecedores(): void {
    this.fornecedorService.listarFornecedores()
    .then(response => {
      this.fornecedores = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao carregar fornecedores! Tente novamente...');
    });
  }

}
