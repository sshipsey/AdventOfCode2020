const hash = (inp: number[]) => {
  return inp.join('x');
};

const day10p1 = (input: number[]) => {
  let adapterSet = new Set<number>(input.concat(Math.max(...input) + 3));
  let rating = 0;
  let ones = 0;
  let threes = 0;

  while (adapterSet.size > 0) {
    const r = rating;
    rating = checkForAdapter(adapterSet, rating, 1);
    if (rating !== r) {
      ones++;
      continue;
    }
    rating = checkForAdapter(adapterSet, rating, 2);
    if (rating !== r) continue;
    rating = checkForAdapter(adapterSet, rating, 3);
    if (rating !== r) threes++;
  }

  return ones * threes;
};

const checkForAdapter = (
  adapters: Set<number>,
  rating: number,
  increment: number
) => (adapters.delete(rating + increment) ? rating + increment : rating);

let t: number = 0;
let workingSet: number[] = [0];
let originalSize = 0;
let hashes = new Set<string>();

const day10p2 = (adapterSet: Set<number>, rating: number, target: number) => {
  if (originalSize === 0) {
    originalSize = adapterSet.size;
  }
  while (workingSet.length > 0) {
    if (rating >= target - 3) {
      t += 1;
      hashes.add(hash(workingSet));
      workingSet = [0];
      rating = 0;
      continue;
      // console.log('***found valid*** ' + t);
    }
    console.log(workingSet);
    console.log(rating);
    console.log(hashes);
    let r = rating;

    const rating1 = checkForAdapter(new Set(adapterSet), rating, 1);
    const hash1 = hash(workingSet.concat(rating1));
    const rating2 = checkForAdapter(new Set(adapterSet), rating, 2);
    const hash2 = hash(workingSet.concat(rating2));
    const rating3 = checkForAdapter(new Set(adapterSet), rating, 3);
    const hash3 = hash(workingSet.concat(rating3));

    if (hashes.has(hash1) && hashes.has(hash2) && hashes.has(hash3)) {
      return;
    }

    if (rating1 !== r && !(hash1 in hashes)) {
      console.log('stuck?!');
      workingSet.push(rating1);
      hashes.add(hash1);
      day10p2(new Set(adapterSet), rating1, target);
    } else if (rating2 !== r && !(hash2 in hashes)) {
      console.log('stuck?!!');
      workingSet.push(rating2);
      hashes.add(hash2);
      day10p2(new Set(adapterSet), rating2, target);
    } else if (rating3 !== r && !(hash3 in hashes)) {
      console.log('stuck?!!!');
      workingSet.push(rating3);
      hashes.add(hash3);
      day10p2(new Set(adapterSet), rating3, target);
    } else {
      console.log('stuck?!!!!');
      rating -= workingSet.pop() || 0;
      console.log(rating);
    }
  }
};

const day10test = `16
10
15
5
1
11
7
19
6
12
4`;

const day10inp = `115
134
121
184
78
84
77
159
133
90
71
185
152
165
39
64
85
50
20
75
2
120
137
164
101
56
153
63
70
10
72
37
86
27
166
186
154
131
1
122
95
14
119
3
99
172
111
142
26
82
8
31
53
28
139
110
138
175
108
145
58
76
7
23
83
49
132
57
40
48
102
11
105
146
149
66
38
155
109
128
181
43
44
94
4
169
89
96
60
69
9
163
116
45
59
15
178
34
114
17
16
79
91
100
162
125
156
65`;

const day10inpArr = day10inp.split('\n').map(Number);
console.log(day10p1(day10inpArr));
const day10inpArrTest = day10test.split('\n').map(Number);
const day10inpSet = new Set<number>(day10inpArr);
const day10inpSetTest = new Set<number>(day10inpArrTest);

// test
// day10p2(day10inpSetTest, 0, Math.max(...day10inpArrTest) + 3);
// console.log(t);
