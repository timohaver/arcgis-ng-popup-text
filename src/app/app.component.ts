import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Map from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';
import Point from "@arcgis/core/geometry/Point";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public view: any = null;

  // <div> that determines the map placement in the HTML
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const map = new Map ({basemap: "streets-vector"});

    const view = new MapView({
      container,
      map,
      zoom: 12,
      center: [-82.983330, 39.983334] // Columbus, Ohio
    });

    // create a new graphics layer and add it to the map
		 const graphicsLayer = new GraphicsLayer();
		 map.add(graphicsLayer);

      //define the location marker appearance
		 const locationMarker = {
      color: [220, 20, 60],  
      size: "25px", 
      type: "simple-marker"
      };

      // pop up template definition
			const popup_iceCream = {
				title: "{name}",
				content:  "<p>{address}</p>" 
                  + "<p>{phone}</p>" 
                  + "<p>{website}</p></div>",
			};

      // === Grandview Dairy Queen data ===

          // location
          const location_DQ5th = new Point({
            longitude: -83.04644371510122,
            latitude: 39.99255723765556
          });

          // popup content
          const attributes_DQ5th = {
            name: "Grandview Dairy Queen",
            address: "1512 W 5th Ave <br> Columbus, Ohio 43212",
            phone: "614-486-0011",
            website: "dairyqueen.com"
          };

          // create graphic
          const DQ5th = new Graphic({
            attributes: attributes_DQ5th,
            geometry: location_DQ5th,
            popupTemplate: popup_iceCream,
            symbol: locationMarker
          });

      //add DQ to graphics layer
      graphicsLayer.add(DQ5th);

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {
    // initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // the map has been initialized
        console.log('The map is ready.');
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
