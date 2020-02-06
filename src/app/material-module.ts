import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatToolbarModule, MatListModule]
})
export class MaterialModule {}
