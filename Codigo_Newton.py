def encontrar_Pn(funcion, a,b, n):
    if funcion(a) == 0:
        return a
    elif funcion(b) == 0:
        return b
    elif funcion(a)*funcion(b) > 0:
        return None
    for i in range(n):
        p = (a+b)/2
        if funcion(p) == 0:
            return p
        if funcion(a)*funcion(p) < 0:
            b = p
        else:
            a = p
    error = abs((p - (a+b)/2)/p)
    return p, funcion(p), f"{error:.10f}"

def f(x):
    return x**3 - x - 1

a = 1
b = 2
n = 5
print(encontrar_Pn(f, a, b, n))