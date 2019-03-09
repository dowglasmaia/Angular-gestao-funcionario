import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


/* === PrimeNG === */
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { GrowlModule } from 'primeng/growl';
import {TableModule} from 'primeng/table';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputMaskModule} from 'primeng/inputmask';
import { ObjectUtils } from 'primeng/components/utils/objectutils';
import {SidebarModule} from 'primeng/sidebar';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';


/* ========== Sistema =========== */
import { CargoComponent } from './cargo/cargo.component';

import { DepartamentoListaComponent } from './departamento/departamento-lista/departamento-lista.component';
import { CargoListaComponent } from './cargo/cargo-lista/cargo-lista.component';
import { FuncionarioListaComponent } from './funcionario/funcionario-lista/funcionario-lista.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepartamentoComponent,
    CargoComponent,
    FuncionarioComponent,
    DepartamentoListaComponent,
    CargoListaComponent,
    FuncionarioListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    PanelModule,
    InputTextModule,
    GrowlModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    AutoCompleteModule,
    CalendarModule,
    MultiSelectModule,
    InputMaskModule,
    SidebarModule,
    DialogModule,
    CardModule
    
  ],
  providers: [
    ObjectUtils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
