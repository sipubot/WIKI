//https://www.codewars.com/kata/595519279be6c575b5000016/
using System.Linq;

public class Kata
{
  public static string Battle(string x, string y)
  {
    int firstGroupPower = x.Sum(e => e - 65);
    int secondGroupPower = y.Sum(e => e - 65);
    
    return firstGroupPower > secondGroupPower ? x
      : firstGroupPower < secondGroupPower ? y
      : "Tie!";
  }
}