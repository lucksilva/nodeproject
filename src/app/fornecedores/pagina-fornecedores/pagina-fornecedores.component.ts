import { ToastyService } from 'ng2-toasty';
import { FornecedorService } from './../shared/service/fornecedor.service';
import { Fornecedor } from './../shared/model/fornecedor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-fornecedores',
  templateUrl: './pagina-fornecedores.component.html',
  styleUrls: ['./pagina-fornecedores.component.css']
})
export class PaginaFornecedoresComponent implements OnInit {

  public fornecedores: Fornecedor[];
  public novoFornecedor = new Fornecedor();
  public selecionadoFornecedor: Fornecedor;

  public dialogNovoFornecedor: boolean;
  public dialogEditarFornecedor: boolean;

  constructor(
    private fornecedorService: FornecedorService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarFornecedores();
  }

  public carregarFornecedores() {
    this.fornecedorService.listarFornecedores()
    .then(response => this.fornecedores = response)
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar fornecedores!');
    });
  }

  public abrirDialogNovoFornecedor() {
    this.dialogNovoFornecedor = true;
  }

  public abrirDialogEditarFornecedor(fornecedor: Fornecedor) {
    this.dialogEditarFornecedor = true;
    this.selecionadoFornecedor = fornecedor;
  }

  public fechar() {
    this.dialogEditarFornecedor = false;
    this.dialogNovoFornecedor = false;
    this.novoFornecedor = new Fornecedor();
    this.carregarFornecedores();
  }

  public salvarFornecedor() {
    this.fornecedorService.novoFornecedor(this.novoFornecedor)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Fornecedor cadastrado com sucesso!');
      this.fechar();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problema ao cadastrar novo Fornecedor!');
    });

  }
    public atualizaFornecedor() {
        this.fornecedorService.atualizarFornecedor(this.selecionadoFornecedor)
        .then(response => {
          this.toastyService.clearAll();
          this.toastyService.success('Fornecedor Atualizado com Sucesso!');
          this.fechar();
        })
        .catch(erro => {
          this.toastyService.clearAll();
          this.toastyService.error('Problema ao atualizar Fornecedor!');
        });
      }
}
