class MyUtilityClass {
  /**
   * You should declare a field for storing singleton instance
   */
  private static _instance: MyUtilityClass

  /**
   * The constructor must be private for preventing initialization
   * of the class itself. Also you can try to throw an exception
   * in case of initialization of the class through plain JavaScript
   */
  private constructor () {}

  /**
   * The static getter for singleton instance. You may wanna use
   * static method instead for initializing the class with some params
   */
  public static get Instance (): MyUtilityClass {
    if (this._instance === undefined) {
      this._instance = new this()
    }

    return this._instance
  }

  /**
   * Lastly, you should define some helper functions
   */
  private _counter: number = 0

  public myUtilityMethod (): void {
    console.log(`Current value of counter is ${this._counter++}`)
  }
}

function someFunctionality (): void {
  const instance1: MyUtilityClass = MyUtilityClass.Instance
  const instance2: MyUtilityClass = MyUtilityClass.Instance

  console.log('')
  instance1.myUtilityMethod()
  instance2.myUtilityMethod()
  console.log('')

  console.log(`Singleton ${instance1 === instance2 ? 'works' : 'fails'}`)
}

someFunctionality()
