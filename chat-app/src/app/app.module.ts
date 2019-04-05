import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NavigationComponent} from "./components/naviagation/navigation.component";
import {ContentComponent} from "./components/main/content.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports:      [BrowserModule, FormsModule , AngularFontAwesomeModule, HttpClientModule, ReactiveFormsModule ],
    bootstrap:    [AppComponent],
    providers:    [SidebarComponent, NavigationComponent, ContentComponent],
    declarations: [AppComponent, SidebarComponent, NavigationComponent, ContentComponent],
})
export class AppModule {}