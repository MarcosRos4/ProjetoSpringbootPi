import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/entities/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit{
  ativo=0
  
  list: Aluno[] = []
  
  constructor(private service: AlunoService) {}
  
  ngOnInit(): void{
    this.findAll()
  }

  contarAtivos(): void{
    for (let aluno of this.list) {
      if (aluno.ativo) {
        this.ativo++
      }
    }
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta
      this.contarAtivos()
    })
  }
}
