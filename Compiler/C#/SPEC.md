# 스펙 정리 

>(필요하거나 알아야할것들만 전체적 정리는 하지 않기로 그런건 책으로 나와 있으니 혹은 언어개발이 아닌이상 할수도 없고)

## STL (표준 템플릿 라이브러리)

>C 나 C++은 고유 함수의 수가 매우 적어서 기본적으로 사용되는 함수나 메서드들을 라이브러리화 하여 쓰고 있다. C관련 개발자들은 기본적으로 사용하고 있는듯 하니 참고할것

[관련 링크](http://ehpub.co.kr/c%EC%96%B8%EC%96%B4-%ED%91%9C%EC%A4%80%EA%B3%BC-%EC%B1%85%EC%9D%98-%EA%B8%B0%EC%88%A0-%EB%B2%94%EC%9C%84/)

>아무래도 시스템 관련 언어다 보니 파일 입출력 수학계산 관련 함수가 많다. 물론 기본적으로 해시나 맵 같은 자료구조에 대한 것도 기본적으로 존재.

## LINQ (C# LIST 관련)

[예제](http://www.csharp-examples.net/linq-aggregation-methods/)
[MSDN 예제](https://docs.microsoft.com/ko-kr/dotnet/csharp/programming-guide/concepts/linq/index)

>C#의 버전업 가운데 가장 함수형 언어로서의 변화를 준 핵심 부분이 아닐까 싶다. <람다식>
>JS 기준 개념설명

- Sum : reduce와 비슷하지만 더하기만 가능
- Max : Math.max(...Array)
- Min : Math.min(...Array)
- Count : Array.length
- LongCount : Array.length (Int32.MaxValue)
- Average : Array.reduce((s,a)=>s+a,0)/Array.length
- Aggregate : (JS reduce 개념)
- All : Array.every()
- Any : (linq 쿼리에 사용)
- Append() : Array.push()
- AsEnumerable() : return object가 원래 오브젝트 형식과 동일(Linq select 참고할것)
- Cast() : 형식을 변환해서 반환 Array.map() 으로 변환시키는것과 유사
- Concat : Array.Concat(Array)
- Contains(val) : function (val) { return Array.some(a=>a===val)}
- DefaultIfEmpty :
- Distinct() : Array.filter((a,i)=>Array.indexOf(a)===i);
