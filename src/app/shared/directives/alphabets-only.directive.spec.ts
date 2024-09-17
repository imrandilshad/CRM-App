import { AlphabetsOnlyDirective } from "./alphabets-only.directive";
import { ElementRef } from "@angular/core";

describe("AlphabetsOnlyDirective", () => {
  let directive: AlphabetsOnlyDirective;
  let elementRefMock: ElementRef;

  beforeEach(() => {
    elementRefMock = {
      nativeElement: document.createElement("input"),
    };
    directive = new AlphabetsOnlyDirective(elementRefMock);
  });

  it("should create an instance", () => {
    expect(directive).toBeTruthy();
  });

  it("should allow special keys like Backspace", () => {
    const event = new KeyboardEvent("keydown", { key: "Backspace" });
    spyOn(event, "preventDefault");

    directive.onKeyDown(event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it("should prevent non-alphabetic characters", () => {
    const event = new KeyboardEvent("keydown", { key: "1" });
    spyOn(event, "preventDefault");

    directive.onKeyDown(event);

    expect(event.preventDefault).toHaveBeenCalled();
  });

  it("should allow alphabetic characters", () => {
    const event = new KeyboardEvent("keydown", { key: "a" });
    spyOn(event, "preventDefault");

    directive.onKeyDown(event);

    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
