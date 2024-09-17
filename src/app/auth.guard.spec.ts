import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthGuard } from "./auth.guard";

// Create a mock Router class
class MockRouter {
  navigate(path: string[]) {}
}

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let router: MockRouter;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useClass: MockRouter }, // Provide the mock Router
      ],
    });

    // Inject the guard and the mock Router
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router) as unknown as MockRouter;
  });

  it("should allow activation if the user is logged in", () => {
    guard.islogin = true; // Simulate a logged-in state
    const result = guard.canActivate();
    expect(result).toBeTrue();
  });

  it("should redirect to login if the user is not logged in", () => {
    spyOn(router, "navigate"); // Spy on the navigate method of the mock Router
    guard.islogin = false; // Simulate a not-logged-in state
    const result = guard.canActivate();
    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(["/login"]);
  });
});
