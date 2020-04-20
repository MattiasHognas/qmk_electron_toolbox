import { spawn } from 'child_process';

export function executeShell(command: string, onData: (chunk: any) => void, onError: (error: Error | any) => void, onClose: (code: number) => void, args?: ReadonlyArray<string>) {
    var child = spawn(command, args, {
        shell: true
    });
    child.on('error', (error) => {
        onError(error);
    });
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (chunk) => {
        onData(chunk);
    });
    child.stderr.setEncoding('utf8');
    child.stderr.on('data', (chunk) => {
        onError(chunk);
    });
    child.on('close', (code) => {
        onClose(code);
    });
}