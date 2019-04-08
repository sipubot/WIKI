'use strict'
/*** isolate interative */
function IAmain() {
}
/***
 * solve
 */
function solve(v) {
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
    //IAmain();
}
