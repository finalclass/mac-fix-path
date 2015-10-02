'use babel';

import {exec} from 'child_process';

export default class MacFixPath {
    constructor() {
        exec('$SHELL --login -i -c "echo $PATH"', function (error, stdout, stderr) {
            process.env.PATH = stdout;
            if (error !== null) {
                console.log('exec error: ' + error);
            }
            if (stderr) {
                console.log('err', stderr);
            }
        });
    }
}
