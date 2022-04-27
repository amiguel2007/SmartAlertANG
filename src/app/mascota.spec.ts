import { Mascota } from './mascota';

describe('Mascota', () => {
  it('should create an instance', () => {
    expect(new Mascota("Prueba", "Prueba", 3 )).toBeTruthy();
  });
});
