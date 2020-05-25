import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivListComponent } from './univ-list.component';

describe('UnivListComponent', () => {
  let component: UnivListComponent;
  let fixture: ComponentFixture<UnivListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
