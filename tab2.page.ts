import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  senhaPrioritaria: string = '';

  constructor(public alertController: AlertController) {}

  async enviarSenha() {
    if (this.senhaPrioritaria.trim() !== '') {
      await this.mostrarAlerta();
      this.senhaPrioritaria = '';
    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Aguarde sua vez...',
      message: 'Você está na fila. Aguarde até que sua senha seja chamada.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
