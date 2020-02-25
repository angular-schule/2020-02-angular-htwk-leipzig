export class CustomerX {

    constructor(public id: number) {}

    fooBar() {
        setTimeout(() => {
            console.log('Die ID ist', this.id);
        }, 2000);
    }

}