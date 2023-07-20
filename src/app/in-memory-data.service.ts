import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'BigChunggus' },
      { id: 13, name: 'Seno Marseno' },
      { id: 14, name: 'Jotaro Kujo' },
      { id: 15, name: 'Dio Brando' },
      { id: 16, name: 'Zongli' }
    ];
    return { heroes };
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
