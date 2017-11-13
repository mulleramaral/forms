import { Component, OnInit } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);

    console.log(this.usuario);
  }

  aplicaCssErro(campo) {
    const teste = this.verificaValidTouched(campo);
    return {
      'has-error': teste,
      'has-feedback': teste
    };
  }

  verificaValidTouched(campo) {
    return campo.invalid && campo.touched;
  }

  consultaCEP(cep, form) {
    console.log(cep);
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, form) {
    console.log(form);
    form.setValue({
      nome: form.value.nome,
      email: form.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: form.value.endereco.numero,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

}
