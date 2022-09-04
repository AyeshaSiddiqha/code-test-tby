import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { MyInfoComponent } from './components/my-info/my-info.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [MyInfoComponent],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule
  ]
})
export class AboutMeModule { }
