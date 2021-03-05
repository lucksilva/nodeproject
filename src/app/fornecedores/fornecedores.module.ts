import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { HttpModule } from '@angular/http';
import { FornecedorService } from './shared/service/fornecedor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaFornecedoresComponent } from './pagina-fornecedores/pagina-fornecedores.component';
import { RelatorioFornecedoresComponent } from './relatorio-fornecedores/relatorio-fornecedores.component';

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
  declarations: [PaginaFornecedoresComponent, RelatorioFornecedoresComponent],
  providers: [FornecedorService],
  exports: [PaginaFornecedoresComponent]
})
export class FornecedoresModule { }
