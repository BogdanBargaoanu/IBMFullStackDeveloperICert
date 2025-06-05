def summation(a, b):
    try:
        a_float = float(a)
        b_float = float(b)
    except ValueError:
        return "Non-numerical values!"
    result = a+b
    return result

def subtraction(a, b):
    try:
        a_float = float(a)
        b_float = float(b)
    except ValueError:
        return "Non-numerical values!"
    result = a-b
    return result

def multiplication(a, b):
    try:
        a_float = float(a)
        b_float = float(b)
    except ValueError:
        return "Non-numerical values!"
    result = a*b
    return result

