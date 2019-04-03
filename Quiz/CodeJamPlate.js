'use strict'
//init
const PS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/***
 * solve
 */
function solve(v) {
    const arr = v.PartyList;
    const max = v.PartyMax;
    var re = '';
    for (var i = max; i > 0; i--) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] >= i) {
                re += PS[j];
            }
        }
    }
    if (re.length % 2 == 1) {
        var a = [];
        a.push(re[0]);
        re = re.substr(1, re.length - 1)
        a = a.concat(re.match(/.{1,2}/g));
        return a.join(' ');
    } else {
        return re.match(/.{1,2}/g).join(' ');
    }
}
//solve({PartyList:[3,1,1,4],PartyMax:4})

// CaseParser
class CaseParser {
    constructor(caseNumber) {
        this.caseNo = caseNumber

        this.PartyCount = 0
        this.PartyList = []
        this.PartyMax = 0

        this.state = 'party'
    }

    readline(line) {
        switch (this.state) {
            case 'party': {

                this.PartyCount = parseInt(line)
                this.state = 'rows'
                break;
            }

            case 'rows': {

                this.PartyList = line.split(' ').map(a => +a);
                this.PartyMax = Math.max(...this.PartyList);

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
            PartyList: this.PartyList,
            PartyMax: this.PartyMax
        }
    }
}
// ProblemParser
class ProblemParser {
    constructor() {
        this.t = 0
        this.currentT = 0
        this.casesResult = []
        this.caseParser = new CaseParser(1)
        this.state = 't'
    }

    readline(line) {
        switch (this.state) {
            case 't': {
                this.t = parseInt(line)
                this.state = 'case'
                break;
            }

            case 'case': {
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
            this.state = 'done'
        }
    }

    isComplete() {
        return (this.state === 'done')
    }

    getResult() {
        return this.casesResult
    }
}
// processCases
function processCases(ans) {
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
        processCases(problemParser.getResult());
        process.exit(0)
    });
}
if (!module.parent) {
    main();
}
module.exports = {
    solve,
    CaseParser
};
