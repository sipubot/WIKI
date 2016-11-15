def pattern(*args):
    # Happy Coding ^_^
    n = args[0]
    x = 1
    a = ""

    if (len(args) == 1) :
        x = 1
    else :
        x = args[1]

    if (n < 1) :
        return ""
    if (n == 1) :
        return "1"
    if (x <= 1) :
        x = 1

    for i in range(1, (2 * n) - 1) :
        if (i > 1) :
            a = a + ('\n')
        a = a + line(i,x,n)
    a = a + "\n"
    re = a * x
    re = re + line(1,x,n)

    return re

def line(idx,x,n):
    # Happy Coding ^_^
    st = ""
    if idx > n :
        idx = 2 * n - idx

    if ((2 * n) - 1) == idx or idx == 1 :
        st = st + "1" + (2 * (n-1) - 1) * " "
        st = st + "1"
    elif n == idx :
        st = st + (n - 1) * " " + str(n % 10) + (n - 2) * " "
        st = st + " "
    else :
        st = st + " " * (idx - 1) + str(idx % 10) + " " * (2 * (n - idx) - 1) + str(idx % 10) + " " * (idx - 2)
        st = st + " "

    return st


def mixed_fraction(s):
    def gcd(m,n):
        print(m,n)
        try :
          if m < n:
            m, n = n, m
          if n == 0:
            return m
          if m % n == 0:
            return n
          else:
            return gcd(n, m%n)

        except Exception, e:
             print(e)

    input = s.split('/')
    a = int(input[0])
    b = int(input[1])
    if b == 0 and b == -0:
        raise ZeroDivisionError()
    elif a == 0 :
        return "0"
    else :
        if a % b == 0 :
            return str(a / b)
        else :
            re = ''
            div = 1
            rem = 1
            h = 1
            #
            if a < 0 and b < 0 :
                a = -a
                b = -b
                div = int(round(a / b))
                rem = a % b
                h = gcd(rem, b)
            elif a > 0 and b > 0 :
                div = int(round(a / b))
                rem = a % b
                h = gcd(rem, b)
            elif a < 0 and b > 0 :
                a = -a
                div = int(round(a / b))
                rem = a % b
                h = gcd(rem, b)
                re = '-'
            elif a > 0 and b < 0 :
                b = -b
                div = int(round(a / b))
                rem = a % b
                h = gcd(rem, b)
                re = '-'

            if div != 0 :
                re = re + str(div) + ' '
            re = re + str(int(rem / h)) + '/' + str(b / h)
            return re
