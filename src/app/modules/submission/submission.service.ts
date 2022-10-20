import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class SubmissionService {

    constructor(private http: HttpClient) {
    }

    getSubmissionList() {
        let data: any[] = [];
        let obj: any = {
            title: "Work Flow: Requires Location",
            from: 'denisgordiyenya@gmail.com',
            to: 'denisgordiyenya@gmail.com',
            due_date: "06 December",
            status: 'Uncomplete',
            position: {
                lat: 27.717726978668047,
                lng: 75.72751317666653
            }
        }
        let statusList = ["Uncomplete", "Low Risk", "Uncomplete", "Needs Review", "Low Risk"];
        let latList = [27.717726978668047, 27.717736978668047, 27.717746978668047, 27.727726978668047, 27.727736978668047];
        let lngList = [75.72751317666653, 75.73751337666653, 75.71751317666653, 75.72752317666653, 75.73752317666653];
        for (var i = 0; i < 5; i++) {
            let position = {
                lat: latList[i],
                lng: lngList[i]
            }
            let title = obj["title"] + " " + (i + 1);
            let status = statusList[i];
            data.push({ ...obj, title, status, position });
        }
        return of(data);
    }
}