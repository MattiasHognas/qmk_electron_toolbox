export interface IShell {
    execute: (command: string, onData: (chunk: any) => void, onError: (error: Error | any) => void, onClose: (code: number) => void, args?: ReadonlyArray<string>) => void
}
