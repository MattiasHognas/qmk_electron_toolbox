export interface Shell {
    execute: (
        file: string,
        onData: (chunk: object) => void,
        onError: (error: Error | object) => void,
        onClose: (code: number) => void,
        args?: ReadonlyArray<string>,
    ) => void;
}
