SELECT buyer_id,buy_date,book_name,price
FROM library,orderInfo
WHERE library.book_id = orderInfo.book_id and (book_name = "Looking with Elice" or buy_date between "2020-07-27" and "2020-07-31")
ORDER BY buy_date asc;

-- 두 개 테이블, 중복 안되게 만들고,합쳐진 테이블에서 특정 조건(조건 문자열과 같은거, 구매일자 특정범위 사이인거) 추출
