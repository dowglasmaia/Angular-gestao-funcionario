import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { CargoComponent } from './cargo/cargo.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { DepartamentoListaComponent } from './departamento/departamento-lista/departamento-lista.component';
import { CargoListaComponent } from './cargo/cargo-lista/cargo-lista.component';
import { FuncionarioListaComponent } from './funcionario/funcionario-lista/funcionario-lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'departamento/lista', component: DepartamentoListaComponent },
  { path: 'cargo', component:CargoComponent },
  { path: 'cargo/lista', component: CargoListaComponent },
  { path: 'funcionario', component: FuncionarioComponent },
  { path: 'funcionario/lista', component: FuncionarioListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
