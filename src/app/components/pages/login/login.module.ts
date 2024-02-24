import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { InputModule } from "../../components/input/input.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        InputModule,
        RouterModule,
    ],
    exports: []
})
export class LoginModule { }
  