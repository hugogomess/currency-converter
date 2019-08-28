import { BrazilianDatePipe } from './brazilian-date.pipe';

describe('BrazilianDatePipe', () => {
  it('create an instance', () => {
    const pipe = new BrazilianDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('must be transform a international date in brazilian date', () => {
    const pipe = new BrazilianDatePipe();
    expect(pipe.transform('2019-08-28')).toEqual('28/08/2019');
  });
});
