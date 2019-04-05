import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class ApiService {
    apiURL: string = "https://restcountries.eu/rest/v2";


    constructor(private httpClient: HttpClient) {}

    public getAllCountry(){
        return this.httpClient.get<any[]>(`${this.apiURL}/all`);
    }

    public getByName(value) {
        return this.httpClient.get<any[]>(`${this.apiURL}/name/${value}`);
    }
}