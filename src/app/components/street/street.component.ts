import { Component ,OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import * as L from 'leaflet';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit{



  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

map!: L.Map;
latitude: number = 0 ;
longitude: number = 0;
marker: L.Marker | undefined;
locationName: string = '';
name : string = '';
showFiller = false;
constructor(private snackBar: MatSnackBar) {}

ngOnInit() {
  this.map = L.map('map').setView([0, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(this.map);
}




getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        this.showLocationOnMap();
        this.showError('Location found: wallstreet status : 200');
      },
      (error) => {
        this.showError('Error getting location: ' + error.message);
      }
    );
  } else {
    this.showError('Geolocation is not supported by this browser.');
  }
}

async showLocationOnMap() {
  if (this.map && this.latitude && this.longitude) {
    try{
      //reverse geocoding using nominatim
 const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${this.latitude}&lon=${this.longitude}`);
const data = await response.json();


   this.marker = L.marker([this.latitude, this.longitude]).addTo(this.map)
      .bindPopup('Wallstreet trader located')
      .openPopup();
  
    this.map.setView([this.latitude, this.longitude], 15);
    //location found event
    const notify = this.map.locate({ setView: true, maxZoom: 22 });
     if(notify){
      this.locationName = data.display_name;
      this.name = data.name;
    //  console.log('Location found: Geo-Location App working correctly');
    //  console.log('Location Name: ' + this.locationName);
    }
  }catch(Error){
    console.log('Error getting location Name from the User:' );
  }
}
}

clearLocation() {
  if (this.marker) {
    this.latitude = 0; // Clear latitude
    this.longitude = 0; // Clear longitude
    this.locationName = ''; // Clear location name
    this.map.closePopup(this.marker.getPopup());
    this.map.removeLayer(this.marker); // Remove existing marker
    this.map.setView([0, 0], 2); // Set map zoom to 2
  }
}



}
