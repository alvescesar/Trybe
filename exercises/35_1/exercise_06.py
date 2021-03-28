def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 or
            side2 + side3 > side1 or
            side1 + side3 > side2
    )

    if not is_triangle:
        return "Não é triângulo"
    elif side1 == side2 == side3:
        return "Equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "Isósceles"
    else:
        return "Escaleno"


print(type_of_triangle(5, 5, 5))
print(type_of_triangle(2, 3, 5))
print(type_of_triangle(2, 7, 2))
