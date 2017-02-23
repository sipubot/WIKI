// https://www.codewars.com/kata/data-reverse/java
public class Kata {
  public static int[] DataReverse(int[] data) {
    int bytes[] = new int[data.length];
    //for에 들어가는 값을 여러개로 두고
    for (int i = data.length-8, j=0; i>=0; i-=8, j+=8) {
      //arraycopy 메소드를 사용하는 것이 이득.
      System.arraycopy(data, i, bytes, j, 8);
    }
    return bytes;
  }
  //stream 메소드 사용법 알아둘것
  //javascript map 과 유사하다.   http://iloveulhj.github.io/posts/java/java-stream-api.html
  public static double find_average(int[] array){
    return Arrays.stream(array).average().orElse(0);
  }
}
