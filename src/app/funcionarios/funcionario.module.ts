import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { FuncionarioService } from './shared/service/funcionario.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaFuncionarioComponent } from './pagina-funcionario/pagina-funcionario.component';
import { RelatorioFuncionariosComponent } from './relatorio-funcionarios/relatorio-funcionarios.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTableModule,
    ButtonModule,
    DialogModule,
    InputMaskModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  declarations: [PaginaFuncionarioComponent, RelatorioFuncionariosComponent],
  providers: [FuncionarioService],
  exports: [PaginaFuncionarioComponent, RelatorioFuncionariosComponent]
})
export class FuncionarioModule { }
