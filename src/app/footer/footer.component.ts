import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _anio: number = new Date().getFullYear();
  

  public get anio(): number {
    return this._anio;
  }
  public set anio(value: number) {
    this._anio = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
