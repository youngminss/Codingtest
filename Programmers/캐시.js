function cacheHit(cache, targetCity) {
  for (let city in cache) {
    cache[city] += 1;
  }
  cache[targetCity] = 0;

  return cache;
}
function cacheMiss(cache, cacheSize, targetCity) {
  if (cacheSize === 0) {
    return cache;
  }

  const CUR_CACHE_SIZE = Object.entries(cache).length;
  let leastRecentedUsedCity;
  let leastRecentedUsedTime = 0;

  for (let city in cache) {
    cache[city] += 1;
  }

  if (CUR_CACHE_SIZE < cacheSize) {
    cache[targetCity] = 0;
  } else {
    for (let city in cache) {
      if (cache[city] >= leastRecentedUsedTime) {
        leastRecentedUsedCity = city;
        leastRecentedUsedTime = cache[city];
      }
    }
    delete cache[leastRecentedUsedCity];
    cache[targetCity] = 0;
  }

  return cache;
}

function solution(cacheSize, cities) {
  const CACHE_HIT = 1;
  const CACHE_MISS = 5;
  let result = 0;
  let cache = {};

  cities = cities.map((city) => city.toUpperCase());
  for (let city of cities) {
    if (city in cache) {
      result += CACHE_HIT;
      cache = cacheHit(cache, city);
    } else {
      result += CACHE_MISS;
      cache = cacheMiss(cache, cacheSize, city);
    }
  }

  return result;
}

// solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]);                           // 50
// solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]);                                  // 21
// solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]);  // 60
// solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]);  // 52
// solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]);                                                                           // 16
// solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]);                                                                       // 25
// solution(0, ["LA", "LA"]);                                                                                                       // 10

/**
 * 문제: 캐시 (2018 KAKAO BLIND - Level 2)
 * 테마: 구현 (LRU 알고리즘)
 * 출처: https://programmers.co.kr/learn/courses/30/lessons/17680
 *
 * [Approach]
 * + cities 인풋을 하나씩 순회하면서 다음을 반복
 *   - cache 객체 내부 키들 중에 city가 존재하면 = cache hit -> cache update
 *   - cache 객체 내부 키들 중에 city가 존재하지 않으면 = cache miss -> cache update
 * + 단, cache miss 일 경우, cache 업데이트 이전에 cacheSize 부터 확인할 것 !
 *
 * [NOTE]
 * + JS 문자열 대문자 변환 - String.prototype.toUpperCase();
 * + JS 문자열 소문자 변환 - String.prototype.toLowerCase();
 * + JS 객체 -> 배열 변환 - Object.entries(obj)
 */
