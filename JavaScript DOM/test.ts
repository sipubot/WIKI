//https://github.com/TypeStrong/atom-typescript/blob/master/docs/tsconfig.md
// 아톰 쓸때 미리 봐둘것
//타입스크립트 시작
// function 인자에 기본적으로 타입형을 명시해주는 것을 권장하고 있음
// 앰비언트 선언은 좀더 자세히 공부해둘것
//ex
function returnString (i: number) {
  return i.toString();
}
//이 함수는 다음과 같이 기술 할수 있다.
function returnString2 (i: number => string) {
  return i.toString();
}
//다른방법
vote(i, function (){
  return i.toString();
});



//객체의 지정
var testObject: () => {
  x: number,
  y: string;
};
//다른표현 방식 ? 를 붙일경우 부가적인 필드가 되어 널값이 들어가도 오류가 나지 않는다.
interface testObject2 {
  x : number,
  y? : string;
}

//클래스 선언
class BankAccount {
	balance = 0;
	deposit(credit: number) {
		this.balance += credit;
		return this.balance;
	}
}
