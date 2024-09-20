import { TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { AuthGuardService } from "@app/shared/services/auth.guard.service";
import { of } from "rxjs";

class MockRouter {
  navigate(path: string[]) {}
}

class MockAuthGuardService {
  isLoggedIn() {
    return of(false);
  }
}

describe("AuthGuard", () => {
  let guard: AuthGuard;
  let router: Router;
  let authService: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useClass: MockRouter },
        { provide: AuthGuardService, useClass: MockAuthGuardService },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthGuardService);
  });
});
