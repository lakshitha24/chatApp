import {Component, OnInit, ViewChild} from "@angular/core";
import {ApiService} from "../../app.service";
import {FormGroup, FormControl, AbstractControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: "content",
    styles: [require("./content.component.scss")],
    template: require("./content.component.html"),
})
export class ContentComponent {
    @ViewChild("myModal") myModal;
    public countryList: any = [];
    public country: any = [];
    public profileForm: FormGroup;
    public imageUrl: string ;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.apiService.getAllCountry().subscribe((res) => {
            this.countryList = res;
        }, error => {
            console.log(error);
        });

        this.profileForm = this.formBuilder.group({
            firstName: [""],
            lastName: [""],
            // country: [""],
            alpha2Code: [""],
            phoneNumber: [""],
            Currency: [""],
            timeZone: [""],
        });
    }

    public openDialog() {
        this.myModal.nativeElement.className = "fade show";
    }

    public closeModel() {
        this.myModal.nativeElement.className = "modal hide";
    }

    public onCountryChange(value) {
        this.apiService.getByName(value).subscribe((res) => {
            this.country = res;
            this.setFormValue(this.country);

        }, error => {
            console.log(error);
        });
    }

    public setFormValue(countryValue) {
        this.profileForm.patchValue({
            alpha2Code: countryValue[0].alpha2Code,
            phoneNumber: countryValue[0].callingCodes[0],
            Currency: countryValue[0].capital,
            timeZone: countryValue[0].timezones,
        });
        this.imageUrl = countryValue[0].flag

    }


}