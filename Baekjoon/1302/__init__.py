def solution(n, books):
    book_dict = {}

    for book in books:
        if book in book_dict:
            book_dict[book] += 1
        else:
            book_dict[book] = 1

    print(sorted(list(book_dict.items()), key=lambda x: (-x[1], x[0]))[0][0])


n = int(input())
books = [input() for _ in range(n)]
solution(n, books)
