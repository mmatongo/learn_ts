impl Solution {
    pub fn get_length_of_optimal_compression(s: String, k: i32) -> i32 {
        let s = s.into_bytes();
        let n = s.len();
        let mut dp = vec![vec![vec![n as i32; 27]; k as usize + 1]; n + 1];
        dp[0][0][26] = 0;
        for i in 0..n {
            for j in 0..=k as usize {
                for c in 0..26 {
                    dp[i + 1][j][c] = dp[i][j][c].min(dp[i][j][26] + 1);
                }
                let mut cnt = 0;
                for l in i..n {
                    if s[l] == s[i] {
                        cnt += 1;
                    }
                    if j + cnt as usize > k as usize {
                        break;
                    }
                    let len = if cnt < 10 {
                        1
                    } else if cnt < 100 {
                        2
                    } else {
                        3
                    };
                    dp[l + 1][j + cnt as usize][s[i] - b'a'] = dp[l + 1][j + cnt as usize][s[i] - b'a'].min(dp[i][j][26] + len);
                }
                dp[i + 1][j][26] = dp[i + 1][j][26].min(dp[i][j][26] + 1);
            }
        }
        dp[n][k as usize][26]
    }
}
