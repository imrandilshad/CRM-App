import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthGuard } from "./auth.guard";

class MockRouter {
  navigate(path: string[]) {}
}

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let router: MockRouter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useClass: MockRouter }],
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router) as unknown as MockRouter;
  });

  it("should allow activation if the user is logged in", () => {
    const userInfo = JSON.stringify({ token: "dummyToken" });
    spyOn(localStorage, "getItem").and.returnValue(userInfo);

    const result = guard.canActivate();
    expect(result).toBeTrue();
  });

  it("should redirect to login if the user is not logged in", () => {
    spyOn(localStorage, "getItem").and.returnValue(null);

    spyOn(router, "navigate");

    const result = guard.canActivate();
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(["/login"]);
  });

  it("should redirect to login if the token is missing", () => {
    const userInfo = JSON.stringify({});
    spyOn(localStorage, "getItem").and.returnValue(userInfo);

    spyOn(router, "navigate");

    const result = guard.canActivate();
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(["/login"]);
  });
});
