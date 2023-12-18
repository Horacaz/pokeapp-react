export default class FailedToFetch extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FailedToFetch";
  }
}
