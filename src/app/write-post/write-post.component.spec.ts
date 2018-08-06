import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteAPostComponent } from './write-post.component';

describe('WriteAPostComponent', () => {
  let component: WriteAPostComponent;
  let fixture: ComponentFixture<WriteAPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteAPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
