import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SxJsonViewerComponent } from './sx-json-viewer.component';

describe('SxJsonViewerComponent', () => {
  let component: SxJsonViewerComponent;
  let fixture: ComponentFixture<SxJsonViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SxJsonViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SxJsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
