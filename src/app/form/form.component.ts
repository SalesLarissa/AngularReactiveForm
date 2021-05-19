import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl } from '@angular/forms'
import { Cadastro } from '../cadastro';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formCadastro!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm(new Cadastro());
  }

  createForm( cadastro:Cadastro){
    this.formCadastro = new FormGroup({
      nome: new FormControl (cadastro.nome),
      sobrenome: new FormControl (cadastro.sobrenome),
      nascimento: new FormControl (cadastro.nascimento),
      telefone: new FormControl (cadastro.telefone),
      email: new FormControl (cadastro.email),
      estado: new FormControl(cadastro.estado),
      bairro: new FormControl (cadastro.bairro),
      cnh: new FormControl (cadastro.cnh),
      def: new FormControl (cadastro.def)
    })
  }

  onSubmit(){
    console.log(this.formCadastro.value)
  }
}
