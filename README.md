#  ArcGIS API for JavaScript Popup Styling in Angular

This is a simple Angular application that demonstrates a problem with styling location marker popup text with maps created using the [ArcGIS JavaScript API](https://developers.arcgis.com/javascript/latest/) (version 4.22). The application was created as a supporting resource for a [support post on the ArcGIS API for JavaScript support forum](https://community.esri.com/t5/arcgis-api-for-javascript-questions/styling-popup-text-in-angular/td-p/1130630) pertaining to this problem.

---
## Base Code

This code is adapted from [an ESRI repo with a sample ArcGIS JS API Angular application](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-angular-cli) as of January 9, 2022. There are only four files that have different code: `README.md`, `index.html`, `app.component.css`, and `app.component.ts`.

---

## Get Started

run `npm install`

### Development server

Run `ng serve --open` for a dev server that will automatically open a browser window. The app will automatically reload if you change any of the source files.

---
## The Problem

See comments and code in `app.component.css`. There is CSS there that should work at the component level. But it does not work. Move it to `styles.css` and now the CSS works. 
