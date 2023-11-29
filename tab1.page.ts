import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  senhaPrioritaria: string = '';
  ordemSenhas: string[] = [];

  enviarSenha() {
    if (this.senhaPrioritaria.trim() !== '') {
      this.ordemSenhas.push(this.senhaPrioritaria);
      this.senhaPrioritaria = '';
    }
  }
}
