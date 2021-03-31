export class Routed {
    param = '';

    load(parameters) {
        if (parameters) {
            this.param = parameters[0];
        }
    }
}
