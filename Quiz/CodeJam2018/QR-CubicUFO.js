'use strict'
//init
//const PS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/***
 * solve
 */
function solve(v) {
    let f = v.face;
    let re = "\n";
    let rearr = [];
    let S = Math.sqrt(2);
    let RATIO = 1 / S;

    if (f <= 1.4142135623730951) {
        //one answer copy three
        //f = 1.3 //test
        let mL = f * RATIO;
        let an = Math.acos(mL) * (1 / Math.PI) + 0.25;
        rearr.push([an, 0, 0]);
        rearr.push([0, an, 0]);
        rearr.push([0, 0, an]);
    } else {
        let remain = f - 1.4142135623730951;
        let mL = remain / (S * RATIO);
        let an = Math.acos(mL) * (1 / Math.PI) + 0.25;
        let an1 = 0.5;
        rearr.push([an1, an, 0]);
        rearr.push([0, an1, an]);
        rearr.push([an, 0, an1]);
    }

    return re + rearr.map(a => a.join(' ')).join('\n');
}
// CaseParser
class CaseParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.face = 0

        this.state = 'rows'
    }
    readline(line) {
        switch (this.state) {
            case 'init': {
                this.state = 'rows';
                break;
            }
            case 'rows': {
                this.face = +line;
                //get all case value state change Done
                this.state = 'done';
                break;
            }
        }
    }
    isComplete() {

        return this.state === 'done'
    }
    getCase() {
        return {
            face: this.face
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
    }
    readline(line) {
        switch (this.state) {
            case 'type': {
                this.t = parseInt(line)
                //this.state = 'caseall'
                this.state = 'casebycase'
                //this.state = 'etc'
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
                    this.casesResult.push(solve(this.caseParser.getCase()));
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
                    //interactive handle to parse
                    this.currentT += 1
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
