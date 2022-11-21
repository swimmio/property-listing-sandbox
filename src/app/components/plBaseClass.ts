import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from '../model/property';
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';
import { DataSharingService } from '../services/data-sharing.service';
import { LocationService } from '../services/location.service';
import { PropertyService } from '../services/property.service';

export class ListingsComponent implements PlBaseClass {
    propName: string = '';
    stars: string[]=[];
  
    constructor(public locationService: LocationService,
      public categoryService: CategoryService,
      public propService: PropertyService,
      public dataSharing: DataSharingService,
      public auth: AuthService,
      public route: ActivatedRoute,
      public router: Router) {
    }
}