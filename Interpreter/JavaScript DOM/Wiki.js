/**
 * [js 파일을 선언할때 기본 틀]
 * @param  {[감싼함수, 제이쿼리, ]} function (SIPU,        $, undefined [동명의 오브젝트가 있을 경우정의되지 않게 만듬]
 * @return {[오브젝트]}          [파일하나를 오브젝트로 만들게 되므로 스트릭트 모드와 함께 사용할 경우 내부 함수가 안전해진다.
 *                               마지막 정의부에서 윈도우 최상단 오브젝트에 대입시켜서 간섭의 영향이 없다. (동명의 오브젝트가 있을경우 생성되지 않음)]
 *
var SIPU = (function (SIPU, $, undefined) {
   	"use strict";
    //내부접근 변수
    var CloseValue = "inner"

    //내부호출만 가능
    function AAA(){

    }
   	//외부호출가능한 정의
   	SIPU.run = function () {
      //내부변수 접근 가능하게 메서드 만들기.
      CloseValue = "new Value"
   	};
   	return SIPU;
   })(window.SIPU || {}, jQuery);
   SIPU.run();
 */