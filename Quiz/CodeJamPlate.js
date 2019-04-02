'use strict'
//addin polyfill

//
// solve
//
function solve(v) {

}


//
// processCases
//
function processCases(probs) {
    for (let index = 0; index < probs.length; index++) {
        const result = solve(probs[index])
        console.log(`Case #${index + 1}: ${result}`)
    }
}

//
// CaseParser
//
class CaseParser {
    constructor(caseNumber) {
        //init property
        this.caseNo = caseNumber
        this.state = '1'
        this.N = 0
        this.L = 0
        //this line on 
        //this.MemberP = "initV"; 
    }

    readline(line) {
        switch (this.state) {
            case '1': {
                //get first line has all property infomaition
                const firstLine = line.split(' ')
                this.N = parseInt(firstLine[0])
                this.L = parseInt(firstLine[1])
                this.state = 'rows'
                break
            }

            case 'rows': {
                //set line property using readline
                //const linev = line.split('');
                const linev = line.split(' ');
                //this.MemberP = linev[0];

                this.state = 'done'
                break
            }
        }
    }

    isComplete() {
        return (this.state === 'done')
    }

    getCase() {
        return {
            //return case
            N: this.N,
            L: this.L
            //MemberP : this.MemberP
        }
    }
}

//
// ProblemParser
//
class ProblemParser {
    constructor() {
        this.t = 0
        this.currentT = 0
        this.cases = []
        this.caseParser = new CaseParser(1)
        this.state = 't'
    }

    readline(line) {
        switch (this.state) {
            case 't': {
                this.t = parseInt(line)
                this.state = 'case'
                break
            }

            case 'case': {
                this.caseParser.readline(line)

                if (this.caseParser.isComplete()) {
                    this.cases.push(this.caseParser.getCase())
                    this.currentT += 1
                    this.caseParser = new CaseParser(this.currentT + 1)
                }

                break
            }
        }

        if (this.currentT === this.t) {
            this.state = 'done'
        }
    }

    isComplete() {
        return (this.state === 'done')
    }

    getCases() {
        return this.cases
    }
}

//
// Main
//
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
        processCases(problemParser.getCases())
        process.exit(0)
    }
    )
}

if (!module.parent) {
    main()
}

module.exports = {
    solve,
    CaseParser
}
