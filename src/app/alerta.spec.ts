import { alerta } from './alerta';

describe('alerta', () => {
  it('should create an instance', () => {
    expect(new alerta("Prueba", "Prueba", 3 )).toBeTruthy();
  });
});
