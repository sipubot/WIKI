/**
 * [js 파일을 선언할때 기본 틀]
 * @param  {[감싼함수, 제이쿼리, ]} function (SIPU,        $, undefined [동명의 오브젝트가 있을 경우정의되지 않게 만듬]
 * @return {[오브젝트]}          [파일하나를 오브젝트로 만들게 되므로 스트릭트 모드와 함께 사용할 경우 내부 함수가 안전해진다.
 *                               마지막 정의부에서 윈도우 최상단 오브젝트에 대입시켜서 간섭의 영향이 없다. (동명의 오브젝트가 있을경우 생성되지 않음)]
 *
var SIPU = (function (SIPU, $, undefined) {
   	"use strict";
     //내부호출만 가능
     function AAA(){

     }

   	//외부호출가능한 정의
   	SIPU.run = function () {
   	};
   	return SIPU;
   })(window.SIPU || {}, jQuery);
   SIPU.run();
 */

var WIKI = (function (WIKI, $, undefined) {
	"use strict";
	//네임스페이스 트리 만들기. attribute 값을 이용한다.

	function getNode(dataName) {
		var temp = {};
		var node = document.getElementsByTagName("*");
		var datatag = dataName;
		var attrValue = "None";
		for (var i = 0; i < node.length; i++) {
			if (node[i].hasAttribute(datatag) || node[i].getAttribute(datatag) !== null) {
				if (node[i].getAttribute(datatag).length > 0) {
					attrValue = node[i].getAttribute(datatag);
				}
				if (!temp[attrValue]) {
					temp[attrValue] = [];
				}
				temp[attrValue].push(node[i]);
			}
		}
		return temp;
	}
	//특수문자변환
	function escapeHtml(text) {
		var map = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		};
		return text.replace(/[&<>"']/g, function (m) {
			return map[m];
		});
	}

	//외부호출가능한 정의
	WIKI.run = function () {
		var a = checksheep(1692);
		console.log(a);
	};
	return WIKI;
})(window.WIKI || {}, jQuery);
WIKI.run();
