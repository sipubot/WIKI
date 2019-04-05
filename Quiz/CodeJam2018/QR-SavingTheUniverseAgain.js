'use strict';
//init
//const PS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
/***
 * solve
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function solve(v) {
    var d = v.D;
    var w = v.W;
    w = w.length > 30 ? w.slice(0, 30) : w;
    var maxsum = Math.pow(10, 9);
    w = w.split('');

    function check() {
        //chk power
        var p = 1; var sum = 0;
        for (var i = 0; i < w.length; i++) {
            if (w[i] === 'S') {
                sum += p;
                if (sum > maxsum) {
                    sum = maxsum;
                }
            } else {
                p *= 2;
            }
        }
        if (sum <= d) {
            return true;
        } else {
            return false;
        }
    }

    var ccount = 0;
    var scount = w.filter(function (a) {
        return a === 'S';
    }).length;
    if (scount > d) {
        return 'IMPOSSIBLE';
    }
    if (check()) {
        return ccount;
    }
    var checker = true;
    while (checker) {
        checker = false;
        for (var i = w.length - 1; i > 0; i--) {
            if (w[i - 1] === 'C' && w[i] === 'S') {
                checker = true;
                w[i - 1] = 'S';
                w[i] = 'C';
                ccount++;
                if (check()) {
                    return ccount;
                }
                break;
            }
        }
    }

    return 'IMPOSSIBLE';
}
//ex> solve({PartyList:[3,1,1,4],PartyMax:4})
function checkResult(v) {
    return true;
}
// CaseParser

var CaseParser = function () {
    function CaseParser(caseNumber) {
        _classCallCheck(this, CaseParser);

        this.caseNo = caseNumber;

        this.D = 0;
        this.W = '';

        this.state = 'rows';
    }

    _createClass(CaseParser, [{
        key: 'readline',
        value: function readline(line) {
            switch (this.state) {
                case 'init':
                    {

                        this.state = 'rows';
                        break;
                    }
                case 'rows':
                    {
                        var r = line.split(' ');
                        this.D = +r[0];
                        this.W = r[1];

                        //get all case value state change Done
                        this.state = 'done';
                        break;
                    }
            }
        }
    }, {
        key: 'isComplete',
        value: function isComplete() {
            return this.state === 'done';
        }
    }, {
        key: 'getCase',
        value: function getCase() {
            return {
                D: this.D,
                W: this.W
            };
        }
    }]);

    return CaseParser;
}();
// InteractiveResultParser


var IAParser = function () {
    function IAParser(caseNumber) {
        _classCallCheck(this, IAParser);

        this.caseNo = caseNumber;

        this.Result = "";

        this.state = 'onreceive';
    }

    _createClass(IAParser, [{
        key: 'readline',
        value: function readline(line) {
            switch (this.state) {
                case 'onreceive':
                    {
                        this.Result = line;
                        //this.state = 'next1'
                        this.state = 'done';
                        break;
                    }
                case 'next1':
                    {
                        //get all case value state change Done
                        this.state = 'done';
                        break;
                    }
            }
        }
    }, {
        key: 'isComplete',
        value: function isComplete() {
            return this.state === 'done';
        }
    }, {
        key: 'getResult',
        value: function getResult() {
            return {
                Result: this.Result
            };
        }
    }]);

    return IAParser;
}();
/***
 * Core Line When fix at Comlex Problem
 */
// ProblemParser OnceCall


var ProblemParser = function () {
    function ProblemParser() {
        _classCallCheck(this, ProblemParser);

        this.t = 0;
        this.currentT = 0;
        this.cases = [];
        this.casesResult = [];
        this.state = 'type';
        //init first Case with number 1
        this.caseParser = new CaseParser(1);
        this.caseResultParser = null;
    }

    _createClass(ProblemParser, [{
        key: 'readline',
        value: function readline(line) {
            switch (this.state) {
                case 'type':
                    {
                        this.t = parseInt(line);
                        //this.state = 'caseall'
                        this.state = 'casebycase';
                        //this.state = 'interaction'
                        break;
                    }
                case 'caseall':
                    {
                        this.caseParser.readline(line);
                        if (this.caseParser.isComplete()) {
                            //get all case to array
                            this.cases.push(this.caseParser.getCase());
                            this.currentT += 1;
                            this.caseParser = new CaseParser(this.currentT + 1);
                        }
                        break;
                    }
                case 'casebycase':
                    {
                        this.caseParser.readline(line);
                        if (this.caseParser.isComplete()) {
                            //case by case solve
                            this.casesResult.push(solve(this.caseParser.getCase()));
                            this.currentT += 1;
                            this.caseParser = new CaseParser(this.currentT + 1);
                        }
                        break;
                    }
                case 'interaction':
                    {
                        //case by case interactive
                        this.caseParser.readline(line);
                        if (this.caseParser.isComplete()) {
                            console.log(solve(this.caseParser.getCase()));
                            this.state = 'interactionResult';
                            this.caseResultParser = new IAParser(1 + this.currentT);
                        }
                    }
                case 'interactionResult':
                    {
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
                this.state = 'done';
            }
        }
    }, {
        key: 'isComplete',
        value: function isComplete() {
            return this.state === 'done';
        }
    }, {
        key: 'getResult',
        value: function getResult() {
            return this.casesResult;
        }
    }, {
        key: 'getCases',
        value: function getCases() {
            return this.cases;
        }
    }]);

    return ProblemParser;
}();
// processCases


function printResult(ans) {
    //answer All printing
    for (var index = 0; index < ans.length; index++) {
        console.log('Case #' + (index + 1) + ': ' + ans[index]);
    }
}
// Main
function main() {
    var readline = require('readline');
    var problemParser = new ProblemParser();

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('line', function (line) {
        problemParser.readline(line);
        if (problemParser.isComplete()) {
            rl.close();
        }
    }).on('close', function () {
        ////processing all case
        //printResult(solve(problemParser.getCases()));
        ////just printing Result
        printResult(problemParser.getResult());
        process.exit(0);
    });
}
if (!module.parent) {
    main();
}
