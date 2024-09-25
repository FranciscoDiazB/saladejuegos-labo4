import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"saladejuegos-labo4-frandiaz","appId":"1:749861388845:web:89427c75624ecc91772ea4","storageBucket":"saladejuegos-labo4-frandiaz.appspot.com","apiKey":"AIzaSyAVXcbK60nWO1WYXaE6C6vJhDx8Yggm2S4","authDomain":"saladejuegos-labo4-frandiaz.firebaseapp.com","messagingSenderId":"749861388845"})), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
