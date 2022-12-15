import _ from 'lodash';

export default class R {
  public data: any;
  public httpCode: number;
  public page: any;

  constructor({ data = null, page = null, httpCode = 200 }) {
    this.data = data;
    this.httpCode = httpCode;
    this.page = page;

    if (this.httpCode === 200) {
      if (_.isEmpty(data)) {
        this.httpCode = 404;
      }
    }
  }
}
