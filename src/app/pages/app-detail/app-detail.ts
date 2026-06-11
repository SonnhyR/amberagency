import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface AppInfo {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  earnings: string;
  benefits: string[];
  os: ('ios' | 'android')[];
  userFlow: string[];
  withdrawalMethods: string[];
  paymentTiming: string[];
  cutoffs: string[];
  accountCreationLink: string;
  tutorialLink: string;
  entryLink: string;
}

@Component({
  selector: 'app-app-detail',
  imports: [RouterLink],
  templateUrl: './app-detail.html',
  styleUrl: './app-detail.scss',
})
export class AppDetail implements OnInit {
  appId: string = '';
  appData: AppInfo | null = null;
  readonly whatsappLink = 'https://wa.me/4142688777';

  private appsData: Record<string, AppInfo> = {
    hily: {
      id: 'hily',
      name: 'Hily',
      description: 'Aplicación de videollamadas y Lives. De fácil acceso.',
      requirements: ['Smartphone (IPhone o Android)', 'Internet estable', 'Al menos cinco (5) horas de conexión diarias'],
      earnings: '$ por minuto',
      benefits: ['Bonos diarios', 'Sueldo base por metas', 'Regalos adicionales vía: videollamadas y mensajes'],
      os: ['ios', 'android'],
      userFlow: ['ALTO'],
      withdrawalMethods: ['Auto-retiro = Billetera virtual', 'vía: Binance'],
      paymentTiming: ['Semanalmente'],
      cutoffs: ['Diario: 12PM (mediodía, hora Venezuela)', 'Semanal: Domingo 12PM (mediodía, hora Venezuela)'],
      accountCreationLink: 'https://t.me/estecanalnoexiste1',
      tutorialLink: 'https://www.youtube.com/watch?v=nonexistent_video_1',
      entryLink: 'https://wa.me/4142688777'
    },
    meyo: {
      id: 'meyo',
      name: 'Meyo',
      description: 'Aplicación de videollamadas, llamadas de voz y Lives. De muy fácil acceso.',
      requirements: ['Smartphone (IPhone o Android)', 'Internet estable', 'Al menos cinco (5) horas de conexión diarias'],
      earnings: '$0? por minuto',
      benefits: ['Bono de bienvenida', 'Sueldo base por metas', 'Regalos adicionales'],
      os: ['ios', 'android'],
      userFlow: ['MEDIO'],
      withdrawalMethods: ['Auto-retiro = Billetera virtual', 'vía: Digifinex (USDT) > Binance (TRC-20)'],
      paymentTiming: ['Semanalmente'],
      cutoffs: ['Diario: 11AM (hora Venezuela)', 'Semanal: Sábado 8PM (hora Venezuela)'],
      accountCreationLink: 'https://t.me/estecanalnoexiste2',
      tutorialLink: 'https://www.youtube.com/watch?v=nonexistent_video_2',
      entryLink: 'https://wa.me/4142688777'
    },
    welive: {
      id: 'welive',
      name: 'Welive',
      description: 'Aplicación de videollamadas, llamadas de voz y lives. De muy fácil acceso.',
      requirements: ['Smartphone', 'Internet estable', 'Al menos siete (7) horas de conexión diarias'],
      earnings: '$0.70 por minuto',
      benefits: ['Bono de bienvenida', 'Sueldo base por metas', 'Regalos adicionales'],
      os: ['ios', 'android'],
      userFlow: ['MEDIO'],
      withdrawalMethods: ['??', '??'],
      paymentTiming: ['Semanalmente'],
      cutoffs: ['Diario: ? (hora Venezuela)', 'Semanal: ??(hora Venezuela)'],
      accountCreationLink: 'https://t.me/estecanalnoexiste3',
      tutorialLink: 'https://www.youtube.com/watch?v=nonexistent_video_3',
      entryLink: 'https://wa.me/4142688777'
    },
    livchat: {
      id: 'livchat',
      name: 'Livchat',
      description: 'Aplicación de videollamadas, llamadas match y lives. De difícil acceso.',
      requirements: ['Smartphone (IPhone o Android)', 'Internet muy estable', 'Al menos cinco (5) horas de conexión diarias', 'Fotos Profesionales de Alta Calidad'],
      earnings: '$0.80 por minuto',
      benefits: ['Bonos diarios', 'Altas ganancias por minuto', 'Regalos adicionales vía: Videollamadas', 'Bonos de recarga de usuarios'],
      os: ['ios', 'android'],
      userFlow: ['ALTO'],
      withdrawalMethods: ['Binance', 'Transferencia bancaria', 'Pago móvil', 'Nequi/Bancolombia', 'PayPal', 'Zelle'],
      paymentTiming: ['Semanalmente'],
      cutoffs: ['Diario: 8PM (hora Venezuela)', 'Semanal: Domingo 8PM (hora Venezuela)'],
      accountCreationLink: 'https://t.me/estecanalnoexiste4',
      tutorialLink: 'https://www.youtube.com/watch?v=nonexistent_video_4',
      entryLink: 'https://forms.gle/Cw5hMm5gNeiKqkb58'
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.appId = params.get('id') || '';
      this.appData = this.appsData[this.appId] || null;
    });
  }
}
