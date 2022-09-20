import { ExpectedResult } from "../assertions/expected-result/expected-result";

export class AssertionStuff {
  private succeeded!: boolean;

  public checkCondition(condition: boolean): AssertionStuff {
    this.succeeded = condition;

    return this;
  }

  public throwWithResultMessage(result: ExpectedResult) {
    if (!this.succeeded && result.isFailure) {
      throw new Error(result.error).message;
    }
  }
}
