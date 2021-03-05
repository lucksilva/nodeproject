import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Funcionario } from './../shared/model/funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-funcionario',
  templateUrl: './pagina-funcionario.component.html',
  styleUrls: ['./pagina-funcionario.component.css']
})
export class PaginaFuncionarioComponent implements OnInit {

  public funcionarios: Funcionario[];
  public novoFuncionario = new Funcionario();
  public selecionadoFuncionario: Funcionario;

  public dialogNovoFuncionario: boolean;
  public dialogEditarfuncionario: boolean;

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService,
    private confirmacaoService: ConfirmationService
  ) { }

  ngOnInit() {
    this.carregarFuncionarios();
  }

  public carregarFuncionarios() {
    this.funcionarioService.listarFuncionarios()
    .then(response => this.funcionarios = response)
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar funcionários!');
    });
  }

  public abrirDialogNovoFuncionario() {
    this.dialogNovoFuncionario = true;
  }

  public abrirDialogEditarFuncionario(funcionario: Funcionario) {
    this.dialogEditarfuncionario = true;
    this.selecionadoFuncionario = funcionario;
  }

  public fechar() {
    this.dialogEditarfuncionario = false;
    this.dialogNovoFuncionario = false;
    this.novoFuncionario = new Funcionario();
    this.carregarFuncionarios();
  }

  public salvarFuncionario() {
    this.funcionarioService.novoFuncionario(this.novoFuncionario)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Funcionário cadastrado com sucesso!');
      this.fechar();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problema ao cadastrar novo Funcionário!');
    });

  }
    public atualizaFuncionario() {
        this.funcionarioService.atualizarFuncionario(this.selecionadoFuncionario)
        .then(response => {
          this.toastyService.clearAll();
          this.toastyService.success('Funcionário Atualizado com Sucesso!');
          this.fechar();
        })
        .catch(erro => {
          this.toastyService.clearAll();
          this.toastyService.error('Problema ao atualizar Funcionário!');
        });
      }

      confirmarExclusao(id: number) {
        this.confirmacaoService.confirm({
          message: 'Tem certeza que deseja excluir?',
          accept: () => {
            this.excluirFuncionario(id);
          }
        });
      }

      excluirFuncionario(id: number) {
        this.funcionarioService.excluirfuncionario(id).then(() => {
          this.toastyService.clearAll();
          this.toastyService.success('Funcionário excluído com sucesso!'),
          this.carregarFuncionarios();
        })
        .catch(erro => {
          this.toastyService.clearAll();
          this.toastyService.error('Não foi possível excluir este Funcionário!');
        });
      }
}
