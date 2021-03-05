import { ClienteService } from './shared/service/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente/cliente.component';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';
import {PasswordModule} from 'primeng/components/password/password';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTableModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    InputMaskModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    PasswordModule
  ],
  declarations: [ClienteComponent, RelatorioClientesComponent, MeusDadosComponent],
  providers: [ClienteService],
  exports: [ClienteComponent, RelatorioClientesComponent, MeusDadosComponent]
})
export class ClienteModule { }
