import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatSortModule,
    MatButtonToggleModule
  ]
})
export class MaterialModule {}
