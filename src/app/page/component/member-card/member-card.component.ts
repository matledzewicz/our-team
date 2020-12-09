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

  calculateSrcSet(): string {
    // TODO: Calculate it base on MemberCard imageUrl property
    return `${this.card.imageUrl.w1080} 1080w, ${this.card.imageUrl.w400} 400w, ${this.card.imageUrl.w200} 200w`;
  }

  calculateSizes(): string {
    // TODO: Calculate it base on MemberCard imageUrl property
    return '(max-width: 700px) 400px, (max-width: 1250px) 200px, (max-width: 3300px) 400px, 1080px';
  }

}
