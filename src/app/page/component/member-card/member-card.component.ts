import { Component, OnInit, Input } from '@angular/core';
import { calculateSrcSet } from './member-card-image.helper';
import { MemberCard } from 'src/app/infrastructure/page-content';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent {
  @Input() card: MemberCard;

  calculateSrcSet(): string {
    return calculateSrcSet(this.card.imageUrl);
  }
}
