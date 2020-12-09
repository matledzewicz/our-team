import { Component, OnInit, Input } from '@angular/core';
import { MemberCard } from 'src/app/api/page-content';
import { calculateSrcSet } from './member-card-image.helper';

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

  calculateSrcSet(): string {
    return calculateSrcSet(this.card.imageUrl);
  }

  calculateSizes(): string {
    // TODO: Modify it to something more clean
    return '(max-width: 450px) 200px, (max-width: 700px) 400px, (max-width: 1400px) 200px, (max-width: 3300px) 400px, 1080px';
  }
}
