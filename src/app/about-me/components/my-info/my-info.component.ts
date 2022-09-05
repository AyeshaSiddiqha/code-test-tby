import { Component, OnInit } from '@angular/core';
import { Info } from '../../../shared/model/info/info.model';
import { MyinfoRepositoryService } from '../../../services/repositories/myinfo-repository.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss', '../../../shared/shared.scss']
})
export class MyInfoComponent implements OnInit {

  infoForm: FormGroup;
  myInfo: Info = {} as Info;
  private serverResponse = new BehaviorSubject(false);

  constructor(
    private myInfoRepository: MyinfoRepositoryService,
    private fb: FormBuilder
    ) {
      this.createForm();
     }

  ngOnInit(): void {
    this.getInformation();
    this.serverResponse.subscribe(data => {
      if(data)
      {this.initializeForm();}
    });
  }

  initializeForm(): void {

    const {name,gender,place,job,hobbies,description} = this.myInfo ;

    this.infoForm.patchValue({
      name,
      place,
      job,
      description,
      gender
    });

    if (hobbies) {
      for (const hobby of hobbies) {
        this.addHobby(hobby);
      }
    }
  }

  getInformation(): void {

    this.myInfoRepository.getInformation().subscribe(
      (data: Info) => {
        this.myInfo = data;
        this.serverResponse.next(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  createForm(): void {
    this.infoForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')] ],
      place: ['', Validators.required ],
      gender: ['', Validators.required],
      job: ['', Validators.required ],
      hobbies: this.fb.array([]),
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)] ],
    });
  }

  get hobbies(): FormArray {
    return this.infoForm.controls.hobbies as FormArray;
  }

  addHobby(data = ''): void {
    this.hobbies.push(
      this.fb.control(data, [Validators.required, Validators.pattern('[a-zA-Z ]*'),])
    );
  }
}
