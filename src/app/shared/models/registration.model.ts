export interface Registration {
 username:string;
 email:string;
 password:string;
}


export interface User {
  userId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  mobileNo: string;
  emailId: string;
  altMobileNo: string;
  password: string;
  userAddress: {
    city: string;
    state: string;
    pincode: string;
    addressLine: string;
  };
  userSocialDetails: {
    facebookProfileUrl: string;
    linkdinProfileUrl: string;
    instagramHandle: string;
    twitterHandle: string;
  };
}
