import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledgeInterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  
  public arrayKnowledge = signal<IKnowledge[]>
  (
    [
      {
        src: 'assets/icons/knowledge/html5.svg',
        alt: 'Ícone do Html5'
      },
      {
        src: 'assets/icons/knowledge/css3.svg',
        alt: 'Ícone do Css3'
      },
      {
        src: 'assets/icons/knowledge/sass.svg',
        alt: 'Ícone do Sass'
      },
      {
        src: 'assets/icons/knowledge/javascript.svg',
        alt: 'Ícone do JavaScript'
      },
      {
        src: 'assets/icons/knowledge/typescript.svg',
        alt: 'Ícone do TypeScript'
      },
      {
        src: 'assets/icons/knowledge/angular.svg',
        alt: 'Ícone do Angular'
      },
      {
        src: 'assets/icons/knowledge/nodejs.svg',
        alt: 'Ícone do Node Js'
      },
      {
        src: 'assets/icons/knowledge/java.svg',
        alt: 'Ícone do Java'
      },
      {
        src: 'assets/icons/knowledge/postgresql.svg',
        alt: 'Ícone do Postgree'
      },
      {
        src: 'assets/icons/knowledge/mysql.svg',
        alt: 'Ícone do MySql'
      },
    ]
  )
}
