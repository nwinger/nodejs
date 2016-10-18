class Test {
    constructor(message: string, timeout: number) {
        this.init(message, 1000);
        console.log("Hello ");
    }

    private init(message: string, timeout: number)  {
        setTimeout(() => {
            console.log(message);
        }, timeout);
    }
}

export default Test;