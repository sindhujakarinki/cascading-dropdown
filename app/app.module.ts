import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectService } from './select.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [SelectService],
})
export class AppModule {}
