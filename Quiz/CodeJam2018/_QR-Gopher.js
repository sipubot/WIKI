'use strict'
//init
//const PS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/***
 * solve
 */
function solve(v) {

}
function loada(v) {
    if (v === 200) {
        //time set 20
        return ''
    } else {
        //time set 60
        return ''
    }
}

// CaseParser
class CaseParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.a = 0
        this.nums = []
        this.casechecker = 0

        this.state = 'init'
    }
    readline(line) {
        switch (this.state) {
            case 'init': {
                this.a = +line
                //
                this.state = 'rows'
                console.log(loada(this.a));
                break;
            }
            case 'rows': {
                this.nums = line.split(' ').map(a => +a);
                console.log(solve(this.nums));
                //get all case value state change Done
                if (casechecker > 20) {
                    this.state = 'done'
                }
                break;
            }
        }
    }
    isComplete() {

        return this.state === 'done'
    }
    getCase() {
        return {
            a: this.a
        }
    }
}

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
        this.state = 'type'
        //init first Case with number 1
        this.caseParser = new CaseParser(1)
        this.caseResultParser = null
    }
    readline(line) {
        switch (this.state) {
            case 'type': {
                this.t = parseInt(line)
                //this.state = 'caseall'
                //this.state = 'casebycase'
                this.state = 'etc'
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
            //
            case 'etc': {
                //case by case interactive
                this.caseParser.readline(line);
                if (this.caseParser.isComplete()) {


                }
                this.caseParser = new CaseParser(this.currentT + 1)
            }
        }
        if (this.currentT === this.t) {
            this.state = 'done'
        }
    }
    isComplete() {
        return (this.state === 'done')
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
        ////processing all case
        //printResult(solve(problemParser.getCases()));
        ////just printing Result
        printResult(problemParser.getResult());
        process.exit(0)
    });
}
if (!module.parent) {
    main();
}
