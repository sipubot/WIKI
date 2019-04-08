'use strict'
/***
 * solve
 */
function solve(v) {
}
var status = 'lo_hi'
function IAprocess(line) {
    if (status === 'lo_hi') {
        lo_hi = line.split(' ');
        head = parseInt(lo_hi[0]) + 1;
        tail = parseInt(lo_hi[1]);
        status = 'num_tries';
    } else if (status === 'num_tries') {
        num_tries = line; // not used.
        expect = 'solve';
        mid = parseInt((head + tail) / 2);
        console.log(mid);
    } else if (status === 'solve') {
        if (line === 'CORRECT') {
            status = 'lo_hi';
            return true;
        } else {
            line === 'TOO_SMALL' ? head = mid + 1 : tail = mid - 1;
            mid = parseInt((head + tail) / 2);
            console.log(mid);
        }
    }
    return false;
}
// CaseParser
class CaseParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.init = 0

        this.state = 'init'
    }
    readline(line) {
        switch (this.state) {
            case 'init': {

                this.init = parseInt(line)

                this.state = 'rows'
                break;
            }
            case 'rows': {
                //get all case value state change Done
                this.state = 'done'
                break;
            }
        }
    }
    isComplete() {
        return (this.state === 'done')
    }
    getCase() {
        return {
            init: this.init
        }
    }
}
// InteractiveResultParser
/***
 * Core Line When fix at Comlex Problem
 */
// ProblemParser OnceCall
class ProblemParser {
    constructor() {
        this.t = 0
        this.currentT = 0
        this.cases = []
        this.casesResult = []
        this.state = 't'
        ////init first Case with number 1
        this.caseParser = new CaseParser(1)
        this.caseResultParser = null
    }
    readline(line) {
        switch (this.state) {
            case 't': {
                this.t = parseInt(line)
                //this.state = 'caseall'
                //this.state = 'casebycase'
                this.state = 'interaction'
                break;
            }
            case 'caseall': {
                this.caseParser.readline(line);
                if (this.caseParser.isComplete()) {
                    //get all case to array
                    this.cases.push(this.caseParser.getCase())
                    this.currentT += 1
                    this.caseParser = new CaseParser(this.currentT + 1)
                }
                break;
            }
            case 'casebycase': {
                this.caseParser.readline(line);
                if (this.caseParser.isComplete()) {
                    //case by case solve
                    this.casesResult.push(solve(this.caseParser.getCase()))
                    this.currentT += 1
                    this.caseParser = new CaseParser(this.currentT + 1)
                }
                break;
            }
            case 'interaction': {
                //case by case interactive
                if (IAprocess(line)) {
                    this.currentT += 1
                }
            }
        }
        if (this.currentT === this.t) {
            this.state += '_done';
        }
    }
    isComplete() {
        return this.state.indexOf('done') > -1
    }
    getResult() {
        return this.casesResult
    }
    getCases() {
        return this.cases
    }
}
// processCases
function printResult(ans) {
    //answer All printing
    for (let index = 0; index < ans.length; index++) {
        console.log(`Case #${index + 1}: ${ans[index]}`)
    }
}
// Main
function main() {
    const readline = require('readline')
    const problemParser = new ProblemParser()

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.on('line', (line) => {
        problemParser.readline(line)
        if (problemParser.isComplete()) {
            rl.close()
        }
    }).on('close', () => {
        switch (problemParser.state) {
            case 'caseall_done': {
                printResult(solve(problemParser.getCases()));
            }
                break;
            case 'casebycase_done': {
                printResult(problemParser.getResult());
            }
                break;
        }
        process.exit(0)
    });
}
if (!module.parent) {
    main();
}
