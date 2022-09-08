export class AssertionStuff {
  private succeeded!: boolean;

  public checkCondition(condition: any): AssertionStuff {
    this.succeeded = new Boolean(condition).valueOf();

    return this;
  }

  public throwWithMessage(message: string) {
    if (!this.succeeded?.valueOf()) {
      throw new Error(message).message;
    }
  }
}
