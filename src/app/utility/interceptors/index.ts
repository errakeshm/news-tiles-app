import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './log-interceptor';


export const HTTP_INTERCEPTOR_PROVIDERS = [
    { provide : HTTP_INTERCEPTORS, useClass:LogInterceptor, multi:true}
]