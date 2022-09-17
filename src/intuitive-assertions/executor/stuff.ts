export class AssertionStuff {
  private succeeded!: boolean;

  public checkCondition(condition: boolean): AssertionStuff {
    this.succeeded = condition;

    return this;
  }

  public throwWithMessage(message: string) {
    if (!this.succeeded?.valueOf()) {
      throw new Error(message).message;
    }
  }
}
