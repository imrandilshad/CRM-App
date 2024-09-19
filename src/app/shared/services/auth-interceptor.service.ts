import { HttpInterceptorFn } from "@angular/common/http";



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let userData = localStorage.getItem("userInfo");
  let data = userData ? JSON.parse(userData) : null;

  if (data && data.token) {
    const cloneReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${data.token}`)
    });

    return next(cloneReq);
  }


  return next(req);
};
