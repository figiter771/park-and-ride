import { Component, OnInit } from '@angular/core';


import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  map:Map;
  videos$: {
    src: string,
    type: string,
  }[];
  objects$:{id: number}[];
  ngOnInit(){
    this.videos$=[];
    this.objects$=[];
    this.objects$.push({id: 1});
    this.objects$.push({id: 4});
    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([7.0785, 51.4614]),
        zoom: 5
      })
    });

    this.createVideos();
  }

  createVideos():void{
    // this.videos$.push({src: '/assets/video/5_valmieras_puikas.mp4', type: 'video/mp4'});
    this.objects$.forEach(element => {
      console.log('/assets/video/' + element.id + '.mp4');
      this.videos$.push({src: '/assets/video/' + element.id + '.mp4', type: 'video/mp4'});
    });
  }
  
}
