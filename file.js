/* 
1) 'number' + 3 + 3 -> "number33". The lines are glued together as a result of concatenation

2) null + 3 -> 3. In this case, null becomes a number, and null = 0. Therefore, the result is 3

3) 5 && "qwerty" -> 'qwerty'. 5 and 'qwerty' are try. So && returns last true

4) +'40' + +'2' + "hillel" ->  '42hillel'. String 40 and 2 is turned into a number using unary plus, the numbers are added together and then the concatenation property works and 42 is glued to the "hillel" word 

5) '10' - 5 === 6 -> false. The string 10 becomes the number 10 - 5 = 5 during subtracted. And then we get 5 is strictly equal to 6, which is not true

6) true + false -> 1. Plus applies to boolean values and turns them into a number. True = 1, false = 0, 1 + 0 = 1

7) '4px' - 3 -> NaN. Minus converts the string to a number. But since we cannot convert '4px' string to a number, the result is NaN

8) '4' - 3 -> 1. As mentioned above. Minus converts the string to a number so 4 - 3 = 1

9) '6' + 3 ** 0 -> '61'. 3**0 = 1 and the lines are glued together as a result of concatenation

10) 12 / '6' -> 2. Division brings both operands to a number. So we get 12/6 = 2

11) '10' + (5 === 6) -> 10false. We need to take a look at the expression in parentheses and 5 does not equal 6, which means false. "10" + false are glued together as a result of concatenation

12) null == '' -> false. null and empty string are different data types and cannot be cast to the same type

13) 3 ** (9 / 3) -> 27. First at all, take a look at the expression in parentheses 9/3 = 3 and then 3**3 = 27

14) !!'false' == !!'true' -> true. !! converts the data into boolean data without changing it to opposite ones as just!
Therefore, non-empty strings are true, true, so true==true is right!

15) 0 || '0' && 1 -> 1. In first part, 0 is false, '0' is true, || found and select first true; second part is '0' && 1. '0' true and 1 is true, && select last true, so the answer is 1.

16) (+null == false) < 1 -> false; +null turns into number that is 0, with == false turns to number to, so 0==0 is true, true<1 - true in this case turns into number too (true=1). So we get 1<1 which is false

17) false && true || true -> true. false && true = true as && select true, and || select true value too

18) false && (false || true). false || true = true as || select true value, and false && true returns true as && is also looking for true.

19) (+null == false) < 1 ** 5 -> true. +null turns into number that is 0, with == false turns to number to, so 0==0 is true; 1**5 = 1; true<1 - true in this case turns into number too (true=1). So we get 1<1 which is false.