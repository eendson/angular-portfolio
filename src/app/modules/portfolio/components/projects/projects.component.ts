import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjectsInterface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import {EDialogPanelClass} from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>
  ([
      {
        src:'assets/img/projects/lista-de-tarefas.png',
        alt:'Projeto ToDo-list',
        title: 'Projeto ToDo-list',
        width: '100px',
        height: '51px',
        description: '<p>Projeto de lista de tarefas desenvolvido em Angular</p>',
        links:[
          {
            name: 'Clique e conheça o projeto',
            href: 'https://eendson.github.io/to-do-list/',
          }
        ]
      },
      {
        src:'assets/img/projects/dark_theme.png',
        alt:'Projeto Dark Theme',
        title: 'Projeto Dark Theme',
        width: '100px',
        height: '51px',
        description: '<p>Projeto Dark Theme desenvolvido em Angular</p>',
        links:[
          {
            name: 'Clique e conheça o projeto',
            href: 'https://eendson.github.io/angular-dark-theme/',
          }
        ]
      },


      {
        src:'assets/img/projects/pokemon.png',
        alt:'Projeto Pokedex',
        title: 'Projeto Pokedex',
        width: '100px',
        height: '51px',
        description: '<p>Projeto Pokedex desenvolvido em Angular</p>',
        links:[
          {
            name: 'Clique e conheça o projeto',
            href: 'https://eendson.github.io/angular-pokedex/',
          }
        ]
      },
    ]);

    public openDialog(data: IProjects) {
      this.#dialog.open(DialogProjectsComponent, {
        data,
        panelClass: EDialogPanelClass.PROJECTS,
      });
    }
}
