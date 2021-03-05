import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Funcionario } from './../shared/model/funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-funcionarios',
  templateUrl: './relatorio-funcionarios.component.html',
  styleUrls: ['./relatorio-funcionarios.component.css']
})
export class RelatorioFuncionariosComponent implements OnInit {

  public funcionarios: Funcionario[];

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarFuncionarios();
  }

  public carregarFuncionarios(): void {
    this.funcionarioService.listarFuncionarios()
    .then(response => {
      this.funcionarios = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao gerar relatório de Funcionários! Tente novamente...');
    });
  }
}
