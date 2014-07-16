declare module Enrouten {
    export interface Router {}
    export interface Request {}
    export interface Response {}
}

declare module "enrouten" {
    interface Router {
        get(name: string, fn: RequestFunction);
    }

    interface RequestFunction {
        (req: Request, res: Response): any;
    }
}
