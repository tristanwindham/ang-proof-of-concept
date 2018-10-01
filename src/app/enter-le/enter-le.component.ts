import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent  } from 'igniteui-angular';
import axios from 'axios';

@Component({
  selector: 'app-enter-le',
  templateUrl: './enter-le.component.html',
  styleUrls: ['./enter-le.component.css']
})

export class EnterLeComponent{
	public user = {
        dateTime: new Date(),
        email: "",
        firstName: "",
        lastName: "",
        position: "",
        phone: ""
    };

    public position = ["IT", "Management", "Operations", "Education"];

    @ViewChild("combo1", { read: IgxComboComponent })
    private combo1: IgxComboComponent;

    public onDateSelection(value) {
        this.user.dateTime.setDate((value as Date).getDate());
    }

    public onTimeSelection(event) {
        this.user.dateTime.setTime((event.newValue as Date).getTime());
    }

    public onCreateContact(event) {
        console.log(this.user);
        // Take user object -> post -> /api/contact (axios)
    }
}
