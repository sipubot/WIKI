'use strict'
//init
//const PS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/***
 * solve
 */
function solve(v) {
    let s = v.Stool;
    let m = v.Member;
    let re = s;
    while (m > 1) {
        re = Math.floor(re / 2);
        m--;
    }

    let odd = re % 2 === 1;
    let l = 0;
    let r = 0;
    l = Math.floor(re * 0.5);
    r = Math.floor(re * 0.5);
    if (!odd) {
        r = r > 0 ? r - 1 : r;
    }
    return `${l} ${r}`;
}
//ex> solve({PartyList:[3,1,1,4],PartyMax:4})
function checkResult(v) {
    return true;
}
// CaseParser
class CaseParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.Stool = 0
        this.Member = 0

        this.state = 'rows'
    }
    readline(line) {
        switch (this.state) {
            case 'init': {

                this.state = 'rows'
                break;
            }
            case 'rows': {
                var r = line.split(' ').map(a => +a);
                this.Stool = r[0];
                this.Member = r[1];

                //get all case value state change Done
                this.state = 'done'
                break;
            }
        }
    }
    isComplete() {
        return this.state === 'done'
    }
    getCase() {
        return {
            Stool: this.Stool,
            Member: this.Member
        }
    }
}
// InteractiveResultParser
class IAParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.Result = ""

        this.state = 'onreceive'
    }
    readline(line) {
        switch (this.state) {
            case 'onreceive': {
                this.Result = line;
                //this.state = 'next1'
                this.state = 'done';
                break;
            }
            case 'next1': {
                //get all case value state change Done
                this.state = 'done'
                break;
            }
        }
    }
    isComplete() {
        return this.state === 'done'
    }
    getResult() {
        return {
            Result: this.Result
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
                this.state = 'casebycase'
                //this.state = 'interaction'
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
                this.caseParser.readline(line);
                if (this.caseParser.isComplete()) {
                    console.log(solve(this.caseParser.getCase()));
                    this.state = 'interactionResult';
                    this.caseResultParser = new IAParser(1 + this.currentT);
                }
            }
            case 'interactionResult': {
                //case by case interactive
                this.caseResultParser.readline(line);
                if (this.caseResultParser.isComplete()) {
                    ////add interactive result push
                    //this.casesResult.push(this.caseResultParser.getResult());
                    ////check case pass interaction only
                    if (checkResult(this.caseResultParser.getResult())) {
                        this.currentT += 1;
                    }
                    ////when alway counting Test
                    //this.currentT += 1;
                    this.state = 'interaction';
                    this.caseParser = new CaseParser(this.currentT + 1);
                }
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
