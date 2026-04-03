import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizeFeed } from './personalize-feed';

describe('PersonalizeFeed', () => {
  let component: PersonalizeFeed;
  let fixture: ComponentFixture<PersonalizeFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalizeFeed],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalizeFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
