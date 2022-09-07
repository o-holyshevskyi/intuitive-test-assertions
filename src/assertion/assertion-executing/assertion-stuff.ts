export class AssertionStuff {
    private succeeded: Boolean;

    public checkCondition(condition: any): AssertionStuff {
        this.succeeded = new Boolean(condition);

        return this;
    }

    public throwWithMessage(message: string) {
        if (!this.succeeded.valueOf()) {
            throw new Error(message);
        }
    }
}
