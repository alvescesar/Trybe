def paint_budget(area):
    can_price = 80
    required_liters = area // 3
    required_cans = required_liters % 18
    return f"You'll need {required_cans} cans, and it will cost US$ {required_cans * can_price}"


print(paint_budget(250))
