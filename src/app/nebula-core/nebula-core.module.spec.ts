import { NebulaCoreModule } from './nebula-core.module';

describe('NebulaCoreModule', () => {
  let nebulaCoreModule: NebulaCoreModule;

  beforeEach(() => {
    nebulaCoreModule = new NebulaCoreModule();
  });

  it('should create an instance', () => {
    expect(nebulaCoreModule).toBeTruthy();
  });
});
