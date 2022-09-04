import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Info } from '../../shared/model/info/info.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const info: Info = {
        id: 1,
        name: 'Ayesha Siddiqha',
        gender: 'Female',
        place: 'Hyderabad',
        job: 'Developer',
        hobbies: ['Playing Badminton', 'Programming', 'Reading/Learning', 'Watching Sports'],
        description: 'CS graduate with 1.5 years of software development experience in Java & Angular primarily.'
      };
    return {info};
  }

}
