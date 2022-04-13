import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { NewsService } from 'src/app/services/news.service';
// Importo la interfaz
import { NewsResp } from '../../interfaces/index';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // Creo una nueva propiedad, que sera un arreglo de strings 
  public categories: string[] =['business','entertainment','general','health','science','sports','technology'];
  // Creo propiedad selectedCategory y Pongo el valor a 'general'
  public selectedCategory:string = this.categories[2];

  // inyecto servicio NewsService
  constructor(private newsService:NewsService ) {}
  
  ngOnInit(){
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      console.log(articles);
    })
      
  }

  // Funcion que maneja el cambio de segmentos
  segmentChanged( event:any){
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      console.log(articles);
    })
  }
}
