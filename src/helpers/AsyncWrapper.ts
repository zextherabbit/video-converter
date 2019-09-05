import { IPromiseResult } from 'promise-helper';
export default class Wrapper {

  public async WrappPromise<T>(promise: Promise<any>): Promise<IPromiseResult<T>> {

    let result = null;
    let error = null;

    try {
      result = await promise;
    } catch (err) {
      error = err;
    }

    return { result, error }
  }

}