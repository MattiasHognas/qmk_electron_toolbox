import { execFile } from 'child_process';
import * as path from 'path';
import { Shell } from './../types/Shell';

class AvrdudeShell implements Shell {
    execute(
        file: string,
        onData: (chunk: object) => void,
        onError: (error: Error | object) => void,
        onClose: (code: number) => void,
        args?: ReadonlyArray<string>,
    ): void {
        const filePath = path.resolve(__dirname, file);
        const child = execFile(filePath, args, {
            shell: true,
        });
        child.on('error', (error) => {
            onError(error);
        });
        if (child.stdout) {
            child.stdout.setEncoding('utf8');
            child.stdout.on('data', (chunk) => {
                onData(chunk);
            });
        }
        if (child.stderr) {
            child.stderr.setEncoding('utf8');
            child.stderr.on('data', (chunk) => {
                onError(chunk);
            });
        }
        child.on('close', (code) => {
            onClose(code);
        });
    }
}

export const avrdudeShell: Shell = new AvrdudeShell();
