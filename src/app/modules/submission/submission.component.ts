import { Component, OnInit, ViewChild } from '@angular/core';
import { SubmissionService } from './submission.service';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-submission',
    templateUrl: './submission.component.html',
    styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
    @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
    submissionList: any[] = [];

    formList: any[] = ["Form 1", "Form 2"];
    statusList: any[] = [{ label: "Pending" }, { label: 'Review' }];

    toggleList: any[] = ["Map", "List"]
    toggleSelected: any = "Map";

    mapOptions: google.maps.MapOptions = {
        center: {
            lat: 27.727726978668047,
            lng: 75.72751317666653
        },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    markerOptions: google.maps.MarkerOptions = {
        draggable: false,
        icon: "../../../assets/icons/svg/doc-file-map.svg",
    };

    infoWindowContent: any = null;

    constructor(private submissionService: SubmissionService) {

    }

    ngOnInit(): void {
        this.getSubmissionList();
    }

    getSubmissionList() {
        this.submissionService.getSubmissionList().subscribe({
            next: (res) => {
                this.submissionList = res;
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    onSelectToggle(event: any) {
        console.log(event)
    }

    openInfoWindow(marker: MapMarker, content: any) {
        this.infoWindowContent = content
        this.infoWindow.open(marker);
    }
}
