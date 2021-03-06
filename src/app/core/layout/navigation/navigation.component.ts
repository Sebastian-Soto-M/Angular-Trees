import { Component, Inject, OnInit } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  showTeamMembers(): void {
    this.dialog.open(MembersDialog, {
      width: '250px',
    });
  }
}

@Component({
  selector: 'app-dialog-team-members',
  templateUrl: './dialog.component.html',
})
export class MembersDialog {
  constructor(
    public dialogRef: MatDialogRef<MembersDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {}
}
