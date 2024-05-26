
interface IResponseData<T> {
    success: boolean;
    data: T | null;
    message: string;
    error: string | null;
  }
  
  class ResponseData<T> implements IResponseData<T> {
    constructor(
      public success: boolean,
      public data: T | null = null,
      public message: string = '',
      public error: string | null = null
    ) {}
  
    // response success
    static success<T>(data: T, message: string = 'Operation successful'): IResponseData<T> {
      return new ResponseData(true, data, message, null);
    }
  
    // response error
    static error<T>(error: string, message: string = 'Operation failed'): IResponseData<T> {
      return new ResponseData(false, null, message, error);
    }
  }
  
  export default ResponseData;
  