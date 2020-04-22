import { spawn } from 'child_process';
import { Shell } from './../types/Shell';

class EchoShell implements Shell {
    execute(
        command: string,
        onData: (chunk: object) => void,
        onError: (error: Error | object) => void,
        onClose: (code: number) => void,
        args?: ReadonlyArray<string>,
    ): void {
        const child = spawn(command, args, {
            shell: true,
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
}

export const echoShell: Shell = new EchoShell();
