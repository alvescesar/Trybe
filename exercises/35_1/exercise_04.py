def find_longest_name(names):
    longest_name = names[0]
    for name in names:
        if len(name) > len(longest_name):
            longest_name = name
    return longest_name


print(find_longest_name(['Etelvina', 'Leovegildo', 'Agripina']))