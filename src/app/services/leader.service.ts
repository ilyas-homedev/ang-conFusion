import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  
  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return new Promise ((resolve) => {
      setTimeout(() => resolve(LEADERS), 1500);
    });
  }

  getFeaturedLeader(): Promise<Leader>{
    return new Promise((resolve) => {
      setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 1500);
    });
  }
}
