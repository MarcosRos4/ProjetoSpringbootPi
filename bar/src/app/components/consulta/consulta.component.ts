import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router'


export interface Produto {
  nome: string;
  preco: number;
  tipo: string;
  position: number;
}

const ELEMENT_DATA: Produto[] = [
  {position: 1, nome: 'Hydrogen', preco: 1.0079, tipo: 'H'},
  {position: 2, nome: 'Helium', preco: 4.0026, tipo: 'He'},
  {position: 3, nome: 'Lithium', preco: 6.941, tipo: 'Li'},
  {position: 4, nome: 'Beryllium', preco: 9.0122, tipo: 'Be'},
  {position: 5, nome: 'Boron', preco: 10.811, tipo: 'B'},
  {position: 6, nome: 'Carbon', preco: 12.0107, tipo: 'C'},
  {position: 7, nome: 'Nitrogen', preco: 14.0067, tipo: 'N'},
  {position: 8, nome: 'Oxygen', preco: 15.9994, tipo: 'O'},
  {position: 9, nome: 'Fluorine', preco: 18.9984, tipo: 'F'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
  {position: 10, nome: 'Neon', preco: 20.1797, tipo: 'Ne'},
];



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  standalone: true,
  imports: [
    MatTableModule, MatIconModule,
    MatPaginatorModule, MatButtonModule,
    MatSortModule
  ],
})


export class ConsultaComponent implements AfterViewInit{
  displayedColumns: string[] = ['position', 'nome', 'preco', 'tipo', 'editar'];
  dataSource = new MatTableDataSource<Produto>(ELEMENT_DATA);
  
  constructor(private _liveAnnouncer: LiveAnnouncer,    private router : Router    ) {}
  
  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  announceSortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  cadastro(){
    this.router.navigateByUrl( '/cadastro' );
  }

}


