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
