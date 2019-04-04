'use strict'
//init
//const PS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/***
 * solve
 */
function solve(v) {
    var g = v.HorseEnd;
    var hd = v.Horse;
    //nega pos filter
    hd = hd.filter(a => a[0] < 0 === false);
    var times = hd.map(a => (g - a[0]) / a[1]);
    var max = Math.max(...times);
    return g / max;
}
function checkResult(v) {
    return true;
}
// CaseParser
class CaseParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.HorseCount = 0
        this.HorseEnd = 0
        this.Horse = []
        this.h = 0
        this.state = 'init'
    }
    readline(line) {
        switch (this.state) {
            case 'init': {
                var l = line.split(" ").map(a => +a);
                this.HorseCount = l[1];
                this.HorseEnd = l[0];
                this.state = 'rows'
                break;
            }
            case 'rows': {
                this.h += 1;
                var v = line.split(' ').map(a => +a);
                this.Horse.push([v[0], v[1]]);

                //get all case value state change Done
                if (this.h === this.HorseCount) {
                    this.state = 'done'
                }
                break;
            }
        }
    }
    isComplete() {
        return (this.state === 'done')
    }
    getCase() {
        return {
            HorseCount: this.HorseCount,
            HorseEnd: this.HorseEnd,
            Horse: this.Horse
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
        return (this.state === 'done')
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
        this.state = 't'
        //init first Case with number 1
        this.caseParser = new CaseParser(1)
        this.caseResultParser = null
    }
    readline(line) {
        switch (this.state) {
            case 't': {
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