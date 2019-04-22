import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
const gameService: GameService = TestBed.get(GameService);
describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  
  it('should be created', () => {
    expect(gameService).toBeTruthy();
  });
  
  it('should have a function called calculateWinner', () => {
    expect(typeof GameService.prototype['calculateWinner']).toEqual('function');
  });
});
