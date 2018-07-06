import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    const styledMapType = new google.maps.StyledMapType(
      [
        {
          elementType: 'geometry',
          stylers: [{ color: '#1d2c4d' }]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{ color: '#8ec3b9' }]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#1a3646' }]
        },
        {
          elementType: 'geometry.stroke',
          featureType: 'administrative.country',
          stylers: [{ color: '#4b6878' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'administrative.land_parcel',
          stylers: [{ color: '#64779e' }]
        },
        {
          elementType: 'geometry.stroke',
          featureType: 'administrative.province',
          stylers: [{ color: '#4b6878' }]
        },
        {
          elementType: 'geometry.stroke',
          featureType: 'landscape.man_made',
          stylers: [{ color: '#334e87' }]
        },
        {
          elementType: 'geometry',
          featureType: 'landscape.natural',
          stylers: [{ color: '#023e58' }]
        },
        {
          elementType: 'geometry',
          featureType: 'poi',
          stylers: [{ color: '#283d6a' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'poi',
          stylers: [{ color: '#6f9ba5' }]
        },
        {
          elementType: 'labels.text.stroke',
          featureType: 'poi',
          stylers: [{ color: '#1d2c4d' }]
        },
        {
          elementType: 'geometry.fill',
          featureType: 'poi.park',
          stylers: [{ color: '#023e58' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'poi.park',
          stylers: [{ color: '#3C7680' }]
        },
        {
          elementType: 'geometry',
          featureType: 'road',
          stylers: [{ color: '#304a7d' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'road',
          stylers: [{ color: '#98a5be' }]
        },
        {
          elementType: 'labels.text.stroke',
          featureType: 'road',
          stylers: [{ color: '#1d2c4d' }]
        },
        {
          elementType: 'geometry',
          featureType: 'road.highway',
          stylers: [{ color: '#2c6675' }]
        },
        {
          elementType: 'geometry.stroke',
          featureType: 'road.highway',
          stylers: [{ color: '#255763' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'road.highway',
          stylers: [{ color: '#b0d5ce' }]
        },
        {
          elementType: 'labels.text.stroke',
          featureType: 'road.highway',
          stylers: [{ color: '#023e58' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'transit',
          stylers: [{ color: '#98a5be' }]
        },
        {
          elementType: 'labels.text.stroke',
          featureType: 'transit',
          stylers: [{ color: '#1d2c4d' }]
        },
        {
          elementType: 'geometry.fill',
          featureType: 'transit.line',
          stylers: [{ color: '#283d6a' }]
        },
        {
          elementType: 'geometry',
          featureType: 'transit.station',
          stylers: [{ color: '#3a4762' }]
        },
        {
          elementType: 'geometry',
          featureType: 'water',
          stylers: [{ color: '#0e1626' }]
        },
        {
          elementType: 'labels.text.fill',
          featureType: 'water',
          stylers: [{ color: '#4e6d70' }]
        }
      ],
      { name: 'Styled Map' });

    const mapProp = {
      center: new google.maps.LatLng(39.69243591319713, -105.35755360000002),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    // Associate the styled map with the MapTypeId and set it to display
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
  }
}
