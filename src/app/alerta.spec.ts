import { alerta } from './alerta';

describe('alerta', () => {
  it('should create an instance', () => {
    expect(new alerta("Prueba", "Prueba", "prueba", 3 )).toBeTruthy();
  });
});
