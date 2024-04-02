import { Component, signal } from '@angular/core';
import { IExperience } from '../../interfaces/IExperiencesInterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperience[]>
  (
    [
      {
        summary: {
          strong:'Desenvolvedor Full Stack - ',
          p: 'GlobalWeb | Março 2021 - Janeiro 2024'
        },
        text: `<p>
                  Durante minha jornada na GlobalWeb, atuei como desenvolvedor full stack em uma equipe de sustentação e 
                  inovação em projetos de softwares de uma grande empresa do ramo de telefonia.<br>
                  Além das minhas atividades como desenvolvedor, por um longo tempo, durante os ciclos de sprint, também acumulei e exerci 
                  de forma interina as atividades de Scrum Master, sendo responsável pela condução dos processos e práticas ágeis 
                  do framework scrum, tal como as cerimônias como planning, daily, review e retrospectiva e atualização de ferramentas de gestão ágil (Mantis e Mantis Kanban).
              </p>`
      },
      {
        summary: {
          strong:'Desenvolvedor Full Stack - ',
          p: 'Impulse Soluções e Consultoria | Fevereiro 2022 - Agosto 2022'
        },
        text: `<p>
                  <strong> Prestação de serviço PJ de desenvolvimento de software.<br>
                  CNPJ: 45.327.341/0001-04 ;<br>
                  NOME FANTASIA: Algoritmo Soluções Tecnológicas; </strong><br><br>
                
                  Integrava o time de desenvolvimento e manutenção das seguintes soluções de varejo da empresa <strong>LINX(Grupo Stone):</strong>
                  <br>
                  1. ITEC-SUITE, front-end AngularJS desenvolvido para gerenciamento de produtos em e-commerce.
                  <br>
                  2. WEBCONVENIO-SERVICE, back-end desenvolvido em Java Spring Boot para gerenciamento de produtos em e-commerce.
              </p>`
      },
    ]
  )

}
