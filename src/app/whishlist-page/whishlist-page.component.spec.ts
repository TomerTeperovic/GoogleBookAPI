import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistPageComponent } from './whishlist-page.component';

describe('WhishlistPageComponent', () => {
  let component: WhishlistPageComponent;
  let fixture: ComponentFixture<WhishlistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishlistPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhishlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
