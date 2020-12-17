import { Component } from "@angular/core";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  // template: `
  //   <h2>test template instead of templateUrl</h2>
  // `,
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  teacherList = [
    { name: 'Oscar Cambieri', subject: 'Web & JavaScript', gender: 'M' },
    { name: 'Roberto Mana', subject: 'Computer Science', gender: 'M' },
    { name: 'Diego Belliardo', subject: 'Hardware', gender: 'M' },
    { name: 'Marcello Rossi', subject: 'Web & JavaScript', gender: 'M' },
    { name: 'Germano Pagliero', subject: 'Web & JavaScript', gender: 'M' },
    { name: 'Pieraldo Rolfo', subject: 'Computer Science', gender: 'M' },
    { name: 'Gianpaolo Maggiore', subject: 'Hardware', gender: 'M' },
    { name: 'Carla Burdisso', subject: 'Web & JavaScript', gender: 'F' },
    { name: 'Elena Meinero', subject: 'Computer Science', gender: 'F' },
    { name: 'Paolo Piovano', subject: 'Web & JavaScript', gender: 'M' },
    { name: 'Marco Paschetta', subject: 'Hardware', gender: 'M' }
  ];

  subjectList = [
    'Computer Science',
    'Hardware',
    'Web & JavaScript'
  ]

  teacher:any = { };

  constructor() {
    let num = Math.floor(Math.random() * this.teacherList.length);
    this.teacher = this.teacherList[num];
  }

}
