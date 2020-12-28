// naive
const part1 = (input: string) => {
  const inp = input.split('\n').map(Number);
  for (let i = 0; i < inp.length; i++) {
    for (let j = 0; j < inp.length; j++) {
      for (let k = 0; k < inp.length; k++) {
        if (i === j || j === k || i === k) continue;

        if (inp[i] + inp[j] + inp[k] === 2020) {
          return inp[i] * inp[j] * inp[k];
        }
      }
    }
  }
};

// efficient
const day1Efficient = (input: string) => {
  const inpArr = input.split('\n').map(Number);
  const inpSet = new Set<number>();

  for (let i = 0; i < inpArr.length; ++i) {
    for (let j = 0; j < inpArr.length; ++j) {
      const key = 2020 - inpArr[i] - inpArr[j];
      if (i !== 0 && i !== j && inpSet.has(key)) {
        return inpArr[i] * inpArr[j] * key;
      }
    }
    inpSet.add(inpArr[i]);
  }
};

const input = `1228
1584
1258
1692
1509
1927
1177
1854
1946
1815
1925
1531
1529
1920
1576
1392
1744
1937
1636
1615
1944
1949
1931
1253
1587
1860
1874
1611
2008
1182
1900
1515
1978
1996
116
1588
1322
1680
1174
1712
1513
1778
1443
1569
1453
708
1783
1926
1959
2001
1776
1643
1654
1934
1983
1630
1382
1486
1422
1836
1728
1315
1843
1521
1995
1403
1897
1280
1981
1901
1870
1519
1945
1857
591
1329
1954
1679
1726
1846
1709
1695
1293
1602
1665
1940
1921
1861
1710
1524
1303
1849
1742
1892
1913
1530
1484
1903
1545
1609
1652
1908
1923
1188
1649
1994
1790
1832
140
867
1664
1598
1371
1018
35
1833
1161
1898
1482
1767
1252
1882
1448
1032
1459
1661
1391
1770
1806
1465
1295
1546
1355
1358
1321
1368
1514
1756
1775
1957
1468
1975
631
1812
1151
1167
1251
1960
1991
1972
1936
1552
1419
1577
1549
1580
1974
1830
1813
1893
1492
1389
1454
1522
1556
1172
1653
1822
1328
1907
1999
1281
1912
1919
1896
1722
1341
1720
1201
1512
1298
1254
1947
1505
1594
1334
1592
1943
1405
1589
1263
1930
1736
1180
1984
1401
1340
1292
1979
1876
`;

// comparator a - b is ascending
(() => {
  console.log(part1(input));
  console.log(day1Efficient(input));
})();
