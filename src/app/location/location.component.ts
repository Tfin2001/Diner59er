
import { Component, Input, OnInit, ViewChild } from '@angular/core';


import {  } from 'googlemaps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  title = 'My first AGM project';
  lat = 41.1432;
  lng = -81.8552;
  zoom: number = 15;


  constructor() { }

  ngOnInit(): void {

 }



}
