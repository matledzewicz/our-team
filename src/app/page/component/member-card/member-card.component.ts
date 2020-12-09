import { Component, OnInit, Input } from '@angular/core';
import { MemberCard } from 'src/app/api/page-content';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() card: MemberCard;
  constructor() { }

  ngOnInit(): void {
  }

}
