import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui-screen/home/home.component';
import { AboutComponent } from './ui-screen/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SupportComponent } from './ui-screen/support/support.component';
import { CommonService } from './ui-common/services/common.service';
import { RouterModule } from '@angular/router';
import { CargillCarouselModule } from 'cargill-carousel';
import { CargillProgressbarModule } from 'cargill-progressbar';
import { CargillCardsModule } from 'cargill-cards';
import { CargillTilesModule } from 'cargill-tiles';
import { CargillImageCardsModule } from 'cargill-image-cards';
import { CargillCollapseModule } from 'cargill-collapse';
import { CargillAlertModule } from 'cargill-alert';
import { CargillSpinnerModule } from 'cargill-spinner';
import { CargillListGroupModule } from 'cargill-list-group';
import { CargillModalModule } from 'cargill-modal';
import { CargillButtonModule } from 'cargill-button';
import { CargillInputModule } from 'cargill-input';
import { CargillTextareaModule } from 'cargill-textarea';
import { CargillSelectModule } from 'cargill-select';
import { CargillHeadingModule } from 'cargill-heading';
import { CargillSubHeadingModule } from 'cargill-sub-heading';
import { CargillDatepickerModule } from 'cargill-datepicker';
import { CargillCheckboxModule } from 'cargill-checkbox';
import { CargillRadioButtonModule } from 'cargill-radio-button';
import { CargillFileUploadModule } from 'cargill-file-upload';
import { CargillTableModule } from 'cargill-table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SupportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CargillHeadingModule,
    CargillSubHeadingModule,
    CargillButtonModule,
    CargillCarouselModule,
    CargillProgressbarModule,
    CargillCardsModule,
    CargillTilesModule,
    CargillImageCardsModule,
    CargillCollapseModule,
    CargillAlertModule,
    CargillSpinnerModule,
    CargillListGroupModule,
    CargillModalModule,
    CargillInputModule,
    CargillTextareaModule,
    CargillSelectModule,
    CargillDatepickerModule,
    CargillCheckboxModule,
    CargillRadioButtonModule,
    CargillFileUploadModule,
    CargillTableModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
