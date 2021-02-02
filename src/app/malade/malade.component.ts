import { Ville } from './../modal/ville';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-malade',
  templateUrl: './malade.component.html',
  styleUrls: ['./malade.component.css']
})
export class MaladeComponent implements OnInit {
  private _url: string = "/assets/data/villes.json";

  public villes = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getVilles().subscribe(data => (this.villes = data));
  }

  getVilles():Observable<Ville[]> {
    return this.http.get<Ville[]>(this._url);
  }

}
