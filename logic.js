function showNotice(msg) {
    const t = document.getElementById('toast');
    if (t) {
        t.innerText = msg;
        t.classList.add('active');
        setTimeout(() => t.classList.remove('active'), 2500);
    }
}

const gameState = {
  "players": [
    "玩家A",
    "玩家B",
    "玩家C",
    "玩家D"
  ],
  "balances": [
    153,
    -174,
    -395,
    416
  ],
  "settings": {
    "base": 10,
    "rate": 5
  },
  "dealerIndex": 2,
  "dealerStreak": 0,
  "pendingDebts": [
    {
      "creditor": 3,
      "debtor": 1,
      "amount": 210
    },
    {
      "creditor": 0,
      "debtor": 2,
      "amount": 180
    }
  ],
  "history": [
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": 17,
      "amount": 95,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": "-",
      "amount": 95,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "三家",
      "tai": 15,
      "amount": 85,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "三家",
      "tai": 17,
      "amount": 95,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家A",
      "tai": "-",
      "amount": 223,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": "-",
      "amount": 223,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": 40,
      "amount": 210,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家D",
      "tai": 17,
      "amount": 95,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": "-",
      "amount": 210,
      "remark": "⚡ 斷線"
    },
    {
      "round": "踢半",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": 33,
      "amount": 128,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "三家",
      "tai": 33,
      "amount": 175,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家B",
      "tai": "-",
      "amount": 510,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家A",
      "tai": "-",
      "amount": 175,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "三家",
      "tai": 34,
      "amount": 180,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家B",
      "tai": "-",
      "amount": 180,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家D",
      "tai": "-",
      "amount": 180,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "玩家B",
      "tai": 34,
      "amount": 180,
      "remark": "🎯 食糊 (+2)"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": 22,
      "amount": 120,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家B",
      "tai": "-",
      "amount": 180,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": "-",
      "amount": 120,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家B",
      "tai": 33,
      "amount": 175,
      "remark": "🎯 食糊 (+2)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家D",
      "tai": 17,
      "amount": 95,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家B",
      "tai": "-",
      "amount": 175,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家D",
      "tai": "-",
      "amount": 95,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家D",
      "tai": 15,
      "amount": 85,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": 17,
      "amount": 95,
      "remark": "🎯 食糊 (+2)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": "-",
      "amount": 180,
      "remark": "⚡ 斷線"
    },
    {
      "round": "踢半",
      "winner": "玩家D",
      "loser": "玩家B",
      "tai": 41,
      "amount": 173,
      "remark": "⚡ 踢半"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": "-",
      "amount": 95,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "三家",
      "tai": 41,
      "amount": 215,
      "remark": "🖐️ 自摸 (+4)"
    },
    {
      "round": "流局",
      "winner": "-",
      "loser": "-",
      "tai": "-",
      "amount": 0,
      "remark": "🌊 庄家連莊 (連1)"
    },
    {
      "round": "流局",
      "winner": "-",
      "loser": "-",
      "tai": "-",
      "amount": 0,
      "remark": "🌊 庄家連莊 (連2)"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家A",
      "tai": "-",
      "amount": 215,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": "-",
      "amount": 215,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": 21,
      "amount": 115,
      "remark": "🎯 食糊 (+4)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "三家",
      "tai": 22,
      "amount": 120,
      "remark": "🖐️ 自摸 (+6)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家B",
      "tai": 41,
      "amount": 215,
      "remark": "🎯 食糊 (+8)"
    },
    {
      "round": "流局",
      "winner": "-",
      "loser": "-",
      "tai": "-",
      "amount": 0,
      "remark": "🌊 庄家連莊 (連6)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": "-",
      "amount": 293,
      "remark": "⚡ 斷線"
    },
    {
      "round": "踢半",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": 35,
      "amount": 12,
      "remark": "⚡ 踢半"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家D",
      "tai": "-",
      "amount": 120,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "三家",
      "tai": 35,
      "amount": 185,
      "remark": "🖐️ 自摸 (+12)"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家A",
      "tai": 19,
      "amount": 105,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家D",
      "tai": 40,
      "amount": 210,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "流局",
      "winner": "-",
      "loser": "-",
      "tai": "-",
      "amount": 0,
      "remark": "🌊 庄家連莊 (連1)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家A",
      "tai": "-",
      "amount": 383,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": 18,
      "amount": 100,
      "remark": "🎯 食糊 (+2)"
    },
    {
      "round": "踢半",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": 22,
      "amount": 70,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": 22,
      "amount": 120,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家D",
      "tai": 41,
      "amount": 215,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家D",
      "tai": "-",
      "amount": 947,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "三家",
      "tai": 25,
      "amount": 135,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "三家",
      "tai": 27,
      "amount": 145,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "踢半",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": 18,
      "amount": 74,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": 18,
      "amount": 100,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "踢半",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": 17,
      "amount": 79,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": 17,
      "amount": 95,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": "-",
      "amount": 348,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "三家",
      "tai": 19,
      "amount": 105,
      "remark": "🖐️ 自摸 (+2)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家A",
      "tai": "-",
      "amount": 105,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": "-",
      "amount": 105,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": 31,
      "amount": 165,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家D",
      "tai": "-",
      "amount": 105,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家D",
      "tai": 34,
      "amount": 180,
      "remark": "🎯 食糊 (+2)"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "三家",
      "tai": 43,
      "amount": 225,
      "remark": "🖐️ 自摸 (+4)"
    },
    {
      "round": "斷線",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": "-",
      "amount": 473,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家A",
      "loser": "玩家D",
      "tai": "-",
      "amount": 495,
      "remark": "⚡ 斷線"
    },
    {
      "round": "踢半",
      "winner": "玩家B",
      "loser": "玩家A",
      "tai": 19,
      "amount": 7,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "三家",
      "tai": 19,
      "amount": 105,
      "remark": "🖐️ 自摸 (+6)"
    },
    {
      "round": "第X局",
      "winner": "玩家B",
      "loser": "玩家A",
      "tai": 29,
      "amount": 155,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "踢半",
      "winner": "玩家A",
      "loser": "玩家B",
      "tai": 19,
      "amount": 28,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家B",
      "tai": 19,
      "amount": 105,
      "remark": "🎯 食糊 (+2)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家C",
      "tai": "-",
      "amount": 105,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": 29,
      "amount": 155,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家B",
      "loser": "玩家D",
      "tai": "-",
      "amount": 105,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "三家",
      "tai": 36,
      "amount": 190,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "踢半",
      "winner": "玩家D",
      "loser": "玩家A",
      "tai": 30,
      "amount": 65,
      "remark": "⚡ 踢半"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "玩家A",
      "tai": 30,
      "amount": 160,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": 19,
      "amount": 105,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "三家",
      "tai": 40,
      "amount": 210,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": "-",
      "amount": 1320,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家A",
      "loser": "玩家B",
      "tai": "-",
      "amount": 495,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家B",
      "tai": 44,
      "amount": 230,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": 35,
      "amount": 185,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": 25,
      "amount": 135,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家B",
      "tai": "-",
      "amount": 230,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": "-",
      "amount": 413,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家B",
      "tai": 29,
      "amount": 155,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "第X局",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": 33,
      "amount": 175,
      "remark": "🎯 食糊 (+0)"
    },
    {
      "round": "踢半",
      "winner": "玩家D",
      "loser": "玩家A",
      "tai": 40,
      "amount": 105,
      "remark": "⚡ 踢半"
    },
    {
      "round": "斷線",
      "winner": "玩家A",
      "loser": "玩家B",
      "tai": "-",
      "amount": 155,
      "remark": "⚡ 斷線"
    },
    {
      "round": "斷線",
      "winner": "玩家C",
      "loser": "玩家A",
      "tai": "-",
      "amount": 175,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家D",
      "loser": "三家",
      "tai": 40,
      "amount": 210,
      "remark": "🖐️ 自摸 (+0)"
    },
    {
      "round": "斷線",
      "winner": "玩家D",
      "loser": "玩家C",
      "tai": "-",
      "amount": 210,
      "remark": "⚡ 斷線"
    },
    {
      "round": "第X局",
      "winner": "玩家A",
      "loser": "玩家C",
      "tai": 34,
      "amount": 180,
      "remark": "🎯 食糊 (+0)"
    }
  ],
  "historyStack": [],
  "balanceTrends": [
    [
      0,
      0,
      0,
      0
    ],
    [
      0,
      95,
      -95,
      0
    ],
    [
      -85,
      10,
      -180,
      255
    ],
    [
      -223,
      -128,
      -318,
      669
    ],
    [
      -433,
      -128,
      -108,
      669
    ],
    [
      -433,
      -128,
      -13,
      574
    ],
    [
      -608,
      -415,
      -236,
      1259
    ],
    [
      -788,
      -595,
      304,
      1079
    ],
    [
      -788,
      -775,
      304,
      1259
    ],
    [
      -788,
      -775,
      184,
      1379
    ],
    [
      -788,
      -950,
      359,
      1379
    ],
    [
      -788,
      -950,
      454,
      1284
    ],
    [
      -788,
      -865,
      454,
      1199
    ],
    [
      -788,
      -770,
      359,
      1199
    ],
    [
      -1003,
      -1028,
      144,
      1887
    ],
    [
      -1003,
      -1028,
      144,
      1887
    ],
    [
      -1003,
      -1028,
      144,
      1887
    ],
    [
      -1118,
      -1028,
      259,
      1887
    ],
    [
      -1296,
      -1148,
      677,
      1767
    ],
    [
      -1296,
      -1423,
      952,
      1767
    ],
    [
      -1296,
      -1423,
      952,
      1767
    ],
    [
      -1481,
      -670,
      569,
      1582
    ],
    [
      -1679,
      -472,
      569,
      1582
    ],
    [
      -1679,
      -169,
      569,
      1279
    ],
    [
      -1679,
      -169,
      569,
      1279
    ],
    [
      -1779,
      -169,
      669,
      1279
    ],
    [
      -1609,
      -169,
      499,
      1279
    ],
    [
      -1609,
      290,
      499,
      820
    ],
    [
      -1744,
      155,
      904,
      685
    ],
    [
      -1957,
      -58,
      1543,
      472
    ],
    [
      -1957,
      216,
      1269,
      472
    ],
    [
      -1957,
      216,
      1000,
      741
    ],
    [
      -2062,
      531,
      895,
      636
    ],
    [
      -1897,
      531,
      730,
      636
    ],
    [
      -1717,
      531,
      730,
      456
    ],
    [
      -869,
      306,
      422,
      141
    ],
    [
      -1087,
      734,
      317,
      36
    ],
    [
      -1242,
      889,
      317,
      36
    ],
    [
      -1059,
      706,
      317,
      36
    ],
    [
      -904,
      706,
      162,
      36
    ],
    [
      -256,
      516,
      -106,
      -154
    ],
    [
      -511,
      516,
      -106,
      101
    ],
    [
      -194,
      516,
      -423,
      101
    ],
    [
      901,
      211,
      -1003,
      -109
    ],
    [
      901,
      -19,
      -773,
      -109
    ],
    [
      716,
      -19,
      -588,
      -109
    ],
    [
      488,
      -19,
      -360,
      -109
    ],
    [
      643,
      -174,
      -360,
      -109
    ],
    [
      468,
      -174,
      -185,
      -109
    ],
    [
      153,
      -384,
      -395,
      626
    ],
    [
      333,
      -384,
      -575,
      626
    ]
  ],
  "h2h": [
    [
      0,
      5,
      8,
      4
    ],
    [
      5,
      0,
      6,
      6
    ],
    [
      10,
      7,
      0,
      6
    ],
    [
      6,
      6,
      7,
      0
    ]
  ],
  "stats": {
    "maxFans": [
      43,
      41,
      44,
      41
    ],
    "kickCounts": [
      2,
      3,
      0,
      5
    ],
    "dealerStreaks": [
      3,
      2,
      5,
      1
    ]
  }
};

const activeCalcFans = new Map(); // Use Map to track count of each fan type
let lastHistoryLength = -1;

const tileMap = {
    'Man1':'🀇','Man2':'🀈','Man3':'🀉','Man4':'🀊','Man5':'🀋','Man6':'🀌','Man7':'🀍','Man8':'🀎','Man9':'🀏',
    'Sou1':'🀐','Sou2':'🀑','Sou3':'🀒','Sou4':'🀓','Sou5':'🀔','Sou6':'🀕','Sou7':'🀖','Sou8':'🀗','Sou9':'🀘',
    'Pin1':'🀙','Pin2':'🀚','Pin3':'🀛','Pin4':'🀜','Pin5':'🀝','Pin6':'🀞','Pin7':'🀟','Pin8':'🀠','Pin9':'🀡',
    'Ton':'🀀','Nan':'🀁','Shaa':'🀂','Pei':'🀃',
    'Chun':'🀄','Hatsu':'🀅','Haku':'🀆'
};

function preloadSVGs() {
    const baseUrl = './assets/tiles/';
    Object.keys(tileMap).forEach(key => {
        const img = new Image();
        img.src = `${baseUrl}${key}.svg`;
    });
}

function init() {
    const savedString = localStorage.getItem('mahjong_special_v1');
    if (savedString) {
        const saved = JSON.parse(savedString);
        // Migration: Ensure pendingDebts is an array (Handle legacy object format)
        if (saved.pendingDebts && !Array.isArray(saved.pendingDebts)) {
            saved.pendingDebts = [];
        }
        Object.assign(gameState, saved);
    }
    // Initialize new stats if missing
    if (!gameState.balanceTrends) gameState.balanceTrends = [[0, 0, 0, 0]];
    if (!gameState.h2h) gameState.h2h = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    if (!gameState.stats) gameState.stats = { maxFans: [0, 0, 0, 0], kickCounts: [0, 0, 0, 0], dealerStreaks: [0, 0, 0, 0], maxSingleGain: [0, 0, 0, 0], maxKickAmount: [0, 0, 0, 0] };
    
    if (gameState.roundIndex === undefined) gameState.roundIndex = 0;
    if (gameState.extraActive === undefined) gameState.extraActive = false;
    
    document.getElementById('base-val').value = gameState.settings.base;
    document.getElementById('rate-val').value = gameState.settings.rate;
    if (gameState.players) {
        document.getElementById('p1-val').value = gameState.players[0] || '玩家A';
        document.getElementById('p2-val').value = gameState.players[1] || '玩家B';
        document.getElementById('p3-val').value = gameState.players[2] || '玩家C';
        document.getElementById('p4-val').value = gameState.players[3] || '玩家D';
    }
    
    lastHistoryLength = -1;
    preloadSVGs();
    renderStaticHTML();
    updateAllUI();
}

function save() {
    // Save state but EXCLUDE historyStack to stay under 5MB quota
    const { historyStack, ...persistentState } = gameState;
    try {
        localStorage.setItem('mahjong_special_v1', JSON.stringify(persistentState));
    } catch (e) {
        console.error("Storage Error:", e);
        showNotice('記憶體已滿，請按「重啟」清空紀錄！');
    }
    updateAllUI();
}

function pushHistory() {
    // Snapshot state EXCLUDING the stack itself (Fix recursive leak)
    const { historyStack, ...clone } = gameState;
    const snapshot = JSON.parse(JSON.stringify(clone));
    gameState.historyStack.push(snapshot);
    if (gameState.historyStack.length > 10) gameState.historyStack.shift();
}

function undoLastAction() {
    if (gameState.historyStack.length === 0) return showNotice('沒有可復原的紀錄');
    const lastState = gameState.historyStack.pop();
    Object.assign(gameState, lastState);
    lastHistoryLength = -1;
    save();
    showNotice('已復原上一鋪');
}

let resetConfirmTimeout = null;
function resetGame() {
    const btn = document.querySelector('button[onclick="resetGame()"]');
    if (!resetConfirmTimeout) {
        if (btn) btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-xs"></i> 確定重啟?`;
        resetConfirmTimeout = setTimeout(() => {
            if (btn) btn.innerHTML = `<i class="fa-solid fa-trash-can text-xs"></i> 重啟`;
            resetConfirmTimeout = null;
        }, 3000);
        showNotice('請再次點擊「重啟」以確認清空所有紀錄');
        return;
    }
    
    // Confirmed
    clearTimeout(resetConfirmTimeout);
    resetConfirmTimeout = null;
    if (btn) btn.innerHTML = `<i class="fa-solid fa-trash-can text-xs"></i> 重啟`;
    
    // Soft Reset State
    localStorage.removeItem('mahjong_special_v1');
    Object.assign(gameState, {
        players: ["玩家A", "玩家B", "玩家C", "玩家D"],
        balances: [0, 0, 0, 0],
        settings: { base: 5, rate: 1 },
        dealerIndex: 0,
        dealerStreak: 0,
        roundIndex: 0,
        pendingDebts: [],
        history: [],
        historyStack: [],
        balanceTrends: [[0, 0, 0, 0]],
        h2h: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
        stats: { maxFans: [0, 0, 0, 0], kickCounts: [0, 0, 0, 0], dealerStreaks: [0, 0, 0, 0], maxSingleGain: [0, 0, 0, 0], maxKickAmount: [0, 0, 0, 0] }
    });
    activeCalcFans.clear();
    lastHistoryLength = -1;
    document.getElementById('base-val').value = 5;
    document.getElementById('rate-val').value = 1;
    document.getElementById('p1-val').value = '玩家A';
    document.getElementById('p2-val').value = '玩家B';
    document.getElementById('p3-val').value = '玩家C';
    document.getElementById('p4-val').value = '玩家D';
    document.getElementById('manual-tai-input').value = 0;
    save();
    renderStaticHTML();
    updateAllUI();
    showNotice('遊戲已完全重啟！');
}

function renderMahjongText(text) {
    if (!text) return '';
    return text.toString().replace(/[\u{1F000}-\u{1F02F}]+/gu, match => {
        return `<span class="inline-block bg-white text-2xl shadow-sm rounded-md border border-slate-200 px-1 py-0.5 mx-0.5 leading-none align-middle text-slate-800">${match}</span>`;
    });
}

function getTileImg(itemArray) {
    if (!itemArray) return '';
    if (!Array.isArray(itemArray)) return `<span class="align-middle text-slate-600 font-medium text-sm mx-1">${renderMahjongText(itemArray)}</span>`;
    
    const baseUrl = './assets/tiles/';
    return itemArray.map(item => {
        if (item.endsWith('.svg')) {
            const tk = item.replace('.svg', '');
            const fallback = tileMap[tk] || '';
            const onerr = `this.onerror=null; this.outerHTML='<span class=&quot;inline-block bg-white text-2xl shadow-sm rounded-md border-2 border-slate-200 px-1 py-0.5 mx-0.5 leading-none align-middle text-slate-800&quot;>${fallback}</span>';`;
            const isHaku = item.includes('Haku.svg');
            const extraClass = isHaku ? 'rounded border-2 border-slate-200' : '';
            return `<img src="${baseUrl}${item}" onerror="${onerr}" class="inline-block h-7 shadow-sm mr-0.5 align-middle ${extraClass}" alt="${item}">`;
        } else {
            return `<span class="align-middle text-slate-600 font-medium text-sm mx-0.5">${renderMahjongText(item)}</span>`;
        }
    }).join('');
}

function renderStaticHTML() {
    document.getElementById('rules-grid').innerHTML = mahjongData.rules.map((r, i) => `
        <div class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
            <h5 class="font-black text-mahjong uppercase text-[10px] tracking-widest">規則 ${i + 1}</h5>
            <p class="text-slate-600 leading-relaxed font-medium">${r}</p>
        </div>
    `).join('');

    if (mahjongData.instantPay && document.getElementById('instant-pay-grid')) {
        document.getElementById('instant-pay-grid').innerHTML = mahjongData.instantPay.map(p => `
            <div class="p-5 bg-orange-50/50 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between">
                <div class="flex justify-between items-start mb-2">
                    <h5 class="font-black text-orange-600">${p.name}</h5>
                    <span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-black whitespace-nowrap">${p.amount}</span>
                </div>
                <p class="text-slate-500 text-xs font-medium">${p.desc}</p>
            </div>
        `).join('');
    }

    const groupedFans = {};
    const fansWithIndex = mahjongData.fanTable.map((t, idx) => ({ ...t, originalIndex: idx }));
    fansWithIndex.forEach(t => {
        if (!groupedFans[t.category]) groupedFans[t.category] = [];
        groupedFans[t.category].push(t);
    });

    let tableHTML = `
        <table class="w-full text-left">
            <thead class="bg-slate-50 border-b border-slate-100">
                <tr class="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    <th class="px-6 py-4">番數</th><th class="px-6 py-4">名稱 (Name)</th><th class="px-6 py-4">條件 (Condition)</th><th class="px-6 py-4">圖例 (Example)</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
    `;
    
    for (const [cat, fans] of Object.entries(groupedFans)) {
        tableHTML += `<tr class="bg-slate-100"><td colspan="4" class="px-6 py-2 font-black text-slate-700 uppercase tracking-widest text-xs"><i class="fa-solid fa-layer-group opacity-50 mr-2"></i> ${cat}</td></tr>`;
        fans.forEach(t => {
            tableHTML += `
                <tr class="hover:bg-slate-50 transition-colors">
                            <td class="px-6 py-4 font-black text-mahjong whitespace-nowrap text-lg">${t.fan} 番</td>
                            <td class="px-6 py-4 font-bold text-slate-800">${t.name}</td>
                            <td class="px-6 py-4 font-medium text-slate-500 text-xs">${t.condition}</td>
                            <td class="px-6 py-4 text-sm font-medium text-slate-600">${getTileImg(t.example)}</td>
                </tr>
            `;
        });
    }
    tableHTML += `</tbody></table>`;
    document.getElementById('teach-table-container').innerHTML = tableHTML;

    let calcHTML = '';
    for (const [cat, fans] of Object.entries(groupedFans)) {
        calcHTML += `
            <div class="mb-6">
                <h4 class="font-black text-slate-400 uppercase tracking-widest text-[11px] mb-3 flex items-center gap-2"><div class="w-1.5 h-3 bg-mahjong rounded-full"></div> ${cat}</h4>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    ${fans.map(t => {
                        const count = activeCalcFans.get(t.originalIndex) || 0;
                        return `
                        <button onclick="toggleFan(${t.originalIndex})" id="fan-${t.originalIndex}" class="btn-fan relative p-4 bg-white rounded-2xl border-2 border-slate-100 text-left transition-all flex flex-col gap-1 justify-between h-full hover:border-mahjong/30 ${count > 0 ? 'active' : ''}">
                            <div class="flex justify-between items-start w-full gap-2 mb-2">
                                <span class="target-name text-sm font-bold text-slate-700 truncate w-full">${t.name}</span>
                                <span class="target-fan text-mahjong font-black whitespace-nowrap text-right">${t.fan} 番</span>
                            </div>
                            <div class="target-example mt-auto text-left w-full text-xs font-medium text-slate-500 overflow-hidden leading-relaxed">${getTileImg(t.example)}</div>
                            ${count > 0 ? `
                                <div class="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle border-2 border-white">
                                    x${count}
                                </div>
                            ` : ''}
                        </button>
                    `}).join('')}
                </div>
            </div>
        `;
    }
    if (document.getElementById('calc-categories-container')) {
        document.getElementById('calc-categories-container').innerHTML = calcHTML;
    }

    const players = gameState.players;
    const winnerContainer = document.getElementById('winner-checkboxes');
    if (winnerContainer) {
        winnerContainer.innerHTML = players.map((p, i) => `
            <div class="flex items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all">
                <input type="checkbox" id="winner-${i}" class="winner-checkbox w-4 h-4 text-mahjong border-slate-200 rounded focus:ring-mahjong" data-index="${i}">
                <label for="winner-${i}" class="text-xs font-black text-slate-700 cursor-pointer flex-1 line-clamp-1">${p}</label>
            </div>
        `).join('');
    }
    
    const lSelect = document.getElementById('loser-select');
    if (lSelect) {
        lSelect.innerHTML = `<option value="self">自摸 (三家賠)</option>` + 
            players.map((p, i) => `<option value="${i}">${p}</option>`).join('');
    }
    
    document.getElementById('adj-payer').innerHTML = players.map((p, i) => `<option value="${i}">${p}</option>`).join('');
    document.getElementById('adj-payee').innerHTML = players.map((p, i) => `<option value="${i}">${p}</option>`).join('');
}

function toggleFan(idx) {
    const current = activeCalcFans.get(idx) || 0;
    
    // Increment count (allow multiple clicks)
    activeCalcFans.set(idx, current + 1);
    
    // We need to re-render to show the count badge
    renderStaticHTML();
    
    // Auto-sum selected fans and push to manual input
    recalculateTotal();
}

function recalculateTotal() {
    let sum = 0;
    activeCalcFans.forEach((count, i) => sum += (mahjongData.fanTable[i].fan * count));
    
    if (gameState.extraActive) {
        sum += (2 * gameState.dealerStreak) + 1;
    }
    
    document.getElementById('manual-tai-input').value = sum;
    updateAllUI();
}

function clearCalcSelections() {
    activeCalcFans.clear();
    gameState.extraActive = false;
    document.getElementById('manual-tai-input').value = 0;
    renderStaticHTML();
    updateAllUI();
}

function updateAllUI() {
    // Safety Migration: Ensure pendingDebts is an array
    if (gameState.pendingDebts && !Array.isArray(gameState.pendingDebts)) {
        gameState.pendingDebts = [];
    }

    if (gameState.roundIndex === undefined) gameState.roundIndex = 0;
    const winds = ['東', '南', '西', '北'];
    
    document.getElementById('wind-badge').innerText = winds[gameState.dealerIndex];
    document.getElementById('round-text').innerText = `${winds[gameState.roundIndex]}圈`;
    
    const extraBtn = document.getElementById('extra-fan-card');
    if (extraBtn) {
        if (gameState.extraActive) {
            extraBtn.classList.add('active');
        } else {
            extraBtn.classList.remove('active');
        }
    }

    const dealerName = gameState.players[gameState.dealerIndex];
    const streak = gameState.dealerStreak;
    document.getElementById('dealer-name').innerText = dealerName;
    document.getElementById('dealer-streak-text').innerText = `連莊: ${streak} (${streak === 0 ? '平庄' : '連' + streak})`;
    
    // Sync to Ledger Tab as well
    if (document.getElementById('ledger-wind-badge')) {
        document.getElementById('ledger-wind-badge').innerText = winds[gameState.dealerIndex];
        document.getElementById('ledger-round-text').innerText = `${winds[gameState.roundIndex]}圈`;
        document.getElementById('ledger-dealer-name').innerText = dealerName;
        document.getElementById('ledger-dealer-streak-text').innerText = `連莊: ${streak} (${streak === 0 ? '平庄' : '連' + streak})`;
    }
    
    const diceContainer = document.getElementById('dice-icons');
    const diceIcons = ['one', 'two', 'three', 'four', 'five', 'six'];
    const extraFan = (2 * streak) + 1;
    const totalFans = parseInt(document.getElementById('manual-tai-input').value) || 0;
    let diceHTML = '';
    if (streak === 0) {
        diceHTML = '<i class="fa-solid fa-dice-one text-slate-200 text-lg"></i>';
    } else {
        let remaining = streak;
        while (remaining > 0) {
            let v = Math.min(remaining, 6);
            diceHTML += `<i class="fa-solid fa-dice-${diceIcons[v-1]} text-mahjong text-lg"></i>`;
            remaining -= v;
        }
    }
    diceContainer.innerHTML = diceHTML;
    
    document.getElementById('extra-fan-display').innerText = `+${extraFan} Extra`;
    
    document.getElementById('ledger-fans-preview').value = totalFans;
    document.getElementById('ledger-base-preview').innerText = `${gameState.settings.base}`;
    
    const rawAmt = gameState.settings.base + (totalFans * gameState.settings.rate);
    document.getElementById('amount-preview').innerText = `$${rawAmt}`;

    document.getElementById('balance-grid').innerHTML = gameState.balances.map((b, i) => `
        <div class="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm">
            <p class="text-[10px] font-black uppercase text-slate-400">${gameState.players[i]}</p>
            <p class="text-2xl font-black ${b >= 0 ? 'text-green-600' : 'text-red-500'} mt-1">${b > 0 ? '+' : ''}${b}</p>
        </div>
    `).join('');

    const content = document.getElementById('pending-debt-content');
    if (content) {
        if (gameState.pendingDebts.length === 0) {
            content.innerHTML = `
                <div class="flex flex-col items-center justify-center py-12 text-white/20">
                    <i class="fa-solid fa-mug-hot text-6xl mb-4 text-white/10"></i>
                    <p class="font-black italic">目前冇人爭錢，輕鬆啲！</p>
                </div>
            `;
        } else {
            content.innerHTML = gameState.pendingDebts.map((d, idx) => `
                <div class="bg-white/10 p-5 rounded-3xl flex items-center justify-between group relative border border-white/5 hover:bg-white/20 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="flex flex-col">
                            <span class="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">債主 (Winner)</span>
                            <span class="text-lg font-black text-white">${gameState.players[d.creditor]}</span>
                        </div>
                        <i class="fa-solid fa-arrow-right-long text-yellow-400"></i>
                        <div class="flex flex-col">
                            <span class="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">債仔 (Loser)</span>
                            <span class="text-lg font-black text-white">${gameState.players[d.debtor]}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <span class="block text-[10px] font-black text-white/40 uppercase tracking-widest">欠款額</span>
                            <span class="text-3xl font-black text-yellow-400 tracking-tighter shadow-sm">$${d.amount || 0}</span>
                        </div>
                        <button onclick="settleIndividualDebt(${idx})" class="w-12 h-12 bg-white/20 hover:bg-red-500 text-white rounded-2xl flex items-center justify-center text-xl transition-all shadow-xl group/btn ring-1 ring-white/10">
                            <span class="group-hover/btn:hidden font-black">清</span>
                            <i class="fa-solid fa-check hidden group-hover/btn:block font-black"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    if (gameState.history.length !== lastHistoryLength) {
        document.getElementById('history-table-body').innerHTML = gameState.history.slice().reverse().map(log => `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-6 py-4 font-black text-slate-400">${log.round === '平帳' ? '⚖️' : (log.round === '流局' ? '🌊' : (log.round === '即時' ? '⚡' : log.round))}</td>
                <td class="px-6 py-4 font-bold text-green-600">${log.winner}</td>
                <td class="px-6 py-4 font-bold text-red-500">${log.loser || '-'}</td>
                <td class="px-6 py-4 font-black text-slate-700">${log.tai || 0}</td>
                <td class="px-6 py-4 font-black text-slate-800">$${log.amount}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 whitespace-nowrap">${log.remark}</span>
                </td>
            </tr>
        `).join('');
        
        const countEl = document.getElementById('history-count');
        if (countEl) countEl.innerText = `${gameState.history.length} 條紀錄`;
        
        lastHistoryLength = gameState.history.length;
    }
}

function getNetWorths() {
    return gameState.balances.map((b, i) => {
        let net = Number(b) || 0;
        gameState.pendingDebts.forEach(d => {
            if (d.creditor === i) net += (Number(d.amount) || 0);
            if (d.debtor === i) net -= (Number(d.amount) || 0);
        });
        return net;
    });
}

function recordDraw() {
    pushHistory();
    gameState.dealerStreak += 1;
    gameState.history.push({
        round: "流局",
        winner: "-",
        loser: "-",
        tai: "-",
        amount: 0,
        remark: `🌊 庄家連莊 (連${gameState.dealerStreak})`
    });
    gameState.balanceTrends.push(getNetWorths());
    save();
    updateAllUI();
    showNotice('已紀錄流局，連莊 +1');
}

function addExtraFans() {
    gameState.extraActive = !gameState.extraActive;
    recalculateTotal();
}

function recordSpecialTransaction() {
    // 1. Inputs
    const winnerCheckboxes = document.querySelectorAll('.winner-checkbox:checked');
    const winners = Array.from(winnerCheckboxes).map(cb => parseInt(cb.dataset.index));
    const loseVal = document.getElementById('loser-select').value;
    const loseIdx = loseVal === 'self' ? -1 : parseInt(loseVal);
    
    if (winners.length === 0) return showNotice('請至少選擇一位贏家');
    if (winners.includes(loseIdx)) return showNotice('贏家與輸家不可相同');

    pushHistory();

    const totalFans = parseInt(document.getElementById('manual-tai-input').value) || 0;
    const baseAmount = gameState.settings.base + (totalFans * gameState.settings.rate);
    
    // Resolve Sub-Win Transactions (Round Pairs)
    const roundPairs = [];
    winners.forEach(w => {
        const losers = (loseIdx === -1) ? [0, 1, 2, 3].filter(i => !winners.includes(i)) : [loseIdx];
        losers.forEach(l => {
            roundPairs.push({ w, l, absorbed: false });
            // Update H2H matrix
            gameState.h2h[w][l]++;
        });
        // Update Max Fans
        gameState.stats.maxFans[w] = Math.max(gameState.stats.maxFans[w], totalFans);
    });

    const snapshot = JSON.parse(JSON.stringify(gameState.pendingDebts));
    const newPendingList = [];
    
    // Process Each Existing Debt Against Current Round
    snapshot.forEach(d => {
        let outcome = "B"; // Default: Stay (Neutral)
        let relevantPair = null;

        // Rule C: Creditor Privilege (Stay or Pull)
        if (winners.includes(d.creditor)) {
            // Check if it's a direct PULL (Creditor wins from Debtor)
            relevantPair = roundPairs.find(p => p.w === d.creditor && p.l === d.debtor);
            if (relevantPair) {
                outcome = "C_PULL";
            } else {
                outcome = "C_STAY";
            }
        } 
        // Rule D: Kick (Debtor wins from Creditor)
        else if (winners.includes(d.debtor) && (loseIdx === d.creditor || (loseIdx === -1 && !winners.includes(d.creditor)))) {
            // Note: In self-win, loseIdx -1 means everyone not in winners lost.
            relevantPair = roundPairs.find(p => p.w === d.debtor && p.l === d.creditor);
            if (relevantPair) outcome = "D_KICK";
        }
        // Rule A: Debtor Trigger (Debtor involved without Creditor winning)
        else {
            const isDebtorWinner = winners.includes(d.debtor);
            const isDebtorLoser = (loseIdx === d.debtor || (loseIdx === -1 && !winners.includes(d.debtor)));
            if (isDebtorWinner || isDebtorLoser) {
                outcome = "A_SETTLE";
            }
        }

        // Execute Outcome
        if (outcome === "C_PULL") {
            relevantPair.absorbed = true;
            d.amount = Math.ceil(d.amount * 1.5) + baseAmount;
            newPendingList.push(d);
            showNotice(`🔥 ${gameState.players[d.creditor]} 繼續拉住 ${gameState.players[d.debtor]}！`);
        } else if (outcome === "C_STAY") {
            newPendingList.push(d); // Maintain existing debt
        } else if (outcome === "D_KICK") {
            relevantPair.absorbed = true;
            const kickOldAmount = Math.floor(d.amount * 0.5);
            // Net Change: Winner gets new win but PAYS BACK half of old debt
            const netChange = baseAmount - kickOldAmount; 
            
            gameState.balances[d.debtor] += netChange;
            gameState.balances[d.creditor] -= netChange;
            
            // Stats: Kick count & Max Kick Amount
            gameState.stats.kickCounts[d.debtor]++;
            gameState.stats.maxKickAmount[d.debtor] = Math.max(gameState.stats.maxKickAmount[d.debtor], baseAmount);

            gameState.history.push({
                round: "踢半",
                winner: gameState.players[d.debtor],
                loser: gameState.players[d.creditor],
                tai: totalFans,
                amount: Math.abs(netChange),
                remark: `⚡ 踢半 (${netChange >= 0 ? '贏' : '輸'} ${Math.abs(netChange)} | 舊${kickOldAmount} vs 新${baseAmount})`
            });
            showNotice(`❄️ ${gameState.players[d.debtor]} 極速斷尾！債務清零。`);
        } else if (outcome === "A_SETTLE") {
            gameState.balances[d.creditor] += d.amount;
            gameState.balances[d.debtor] -= d.amount;
            gameState.history.push({
                round: "斷線",
                winner: gameState.players[d.creditor],
                loser: gameState.players[d.debtor],
                tai: "-",
                amount: d.amount,
                remark: `⚡ 斷線 (結算 ${gameState.players[d.debtor]} -> ${gameState.players[d.creditor]})`
            });
            showNotice(`☁️ ${gameState.players[d.debtor]} 捲入其他勝負，債務自動結帳。`);
        } else {
            // Scenario B: Neutral Stay
            newPendingList.push(d);
        }
    });

    // Handle Unabsorbed Winner Pairs (New Pends)
    roundPairs.forEach(p => {
        if (!p.absorbed) {
            newPendingList.push({
                creditor: p.w,
                debtor: p.l,
                amount: baseAmount
            });
        }
    });

    gameState.pendingDebts = newPendingList;

    // --- Dealer State Update ---
    const isDealerWinning = winners.includes(gameState.dealerIndex);
    if (isDealerWinning) {
        gameState.dealerStreak += 1;
        gameState.stats.dealerStreaks[gameState.dealerIndex] = Math.max(gameState.stats.dealerStreaks[gameState.dealerIndex], gameState.dealerStreak);
    } else {
        if (gameState.dealerIndex === 3) gameState.roundIndex = (gameState.roundIndex + 1) % 4;
        gameState.dealerIndex = (gameState.dealerIndex + 1) % 4;
        gameState.dealerStreak = 0;
    }

    // Stats: Max Single Gain
    const winAmtPerWinner = baseAmount * (loseIdx === -1 ? 3 : 1);
    winners.forEach(w => {
        gameState.stats.maxSingleGain[w] = Math.max(gameState.stats.maxSingleGain[w], winAmtPerWinner);
    });

    gameState.history.push({
        round: gameState.history.length + 1,
        winner: winners.map(i => gameState.players[i]).join(' & '),
        loser: loseIdx === -1 ? "三家" : gameState.players[loseIdx],
        tai: totalFans,
        amount: baseAmount * (loseIdx === -1 ? 3 : 1),
        remark: `${winners.length > 1 ? '一炮多響 | ' : ''}${isDealerWinning ? '連莊 | ' : ''}${loseIdx === -1 ? '自摸' : '出銃'}`
    });

    // Record Balance Trend (Net Worth)
    gameState.balanceTrends.push(getNetWorths());

    save();
    showNotice('入帳成功');
    clearCalcSelections();
}

function toggleManualModal(show) {
    document.getElementById('manual-modal').classList.toggle('active', show);
}

function submitManualAdjustment() {
    const payer = parseInt(document.getElementById('adj-payer').value);
    const payee = parseInt(document.getElementById('adj-payee').value);
    const amt = parseInt(document.getElementById('adj-amount').value);
    const remark = document.getElementById('adj-remark').value || "手動平帳";

    if (payer === payee) return showNotice('付款人與收款人不可相同');
    if (isNaN(amt) || amt <= 0) return showNotice('請輸入有效金額');

    pushHistory();
    gameState.balances[payer] -= amt;
    gameState.balances[payee] += amt;

    gameState.history.push({
        round: '平帳',
        winner: gameState.players[payee],
        loser: gameState.players[payer],
        tai: "-",
        amount: amt,
        remark: `⚖️ ${remark}`
    });

    // Record Balance Trend (Net Worth)
    gameState.balanceTrends.push(getNetWorths());

    save();
    toggleManualModal(false);
    showNotice('平帳成功');
}

function clearSystemData() {
    if (confirm('⚠️ 確定要重置所有數據嗎？\n所有手動輸入嘅紀錄將會被永久刪除，系統會恢復到初始測試狀態。')) {
        localStorage.removeItem('mahjong_special_v1');
        location.reload();
    }
}

function saveSpecialSettings() {
    gameState.settings.base = parseInt(document.getElementById('base-val').value);
    gameState.settings.rate = parseInt(document.getElementById('rate-val').value);
    
    gameState.players = [
        document.getElementById('p1-val').value.trim() || '玩家A',
        document.getElementById('p2-val').value.trim() || '玩家B',
        document.getElementById('p3-val').value.trim() || '玩家C',
        document.getElementById('p4-val').value.trim() || '玩家D'
    ];
    
    save();
    renderStaticHTML();
    updateAllUI();
    showNotice('設定及玩家名稱已生效');
}

function syncFansToCalc(val) {
    const v = parseInt(val) || 0;
    document.getElementById('manual-tai-input').value = v;
    updateAllUI();
}

let currentInstantType = '';
function openInstantModal(type) {
    currentInstantType = type;
    const title = document.getElementById('instant-modal-title');
    const desc = document.getElementById('instant-modal-desc');
    const list = document.getElementById('instant-player-list');
    
    title.innerText = type;
    if (type === '追' || type === '詐胡') {
        desc.innerText = '誰人賠款 (Payer)？';
    } else {
        desc.innerText = '誰人收費 (Winner)？';
    }
    
    list.innerHTML = gameState.players.map((p, i) => `
        <button onclick="recordInstantPay(${i})" class="p-4 bg-slate-50 hover:bg-mahjong hover:text-white rounded-2xl font-black transition-all text-left flex justify-between items-center group">
            <span>${p}</span>
            <i class="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
        </button>
    `).join('');
    
    toggleInstantModal(true);
}

function toggleInstantModal(show) {
    document.getElementById('instant-modal').classList.toggle('active', show);
}

function recordInstantPay(playerIdx) {
    const type = currentInstantType;
    const base = gameState.settings.base;
    const rate = gameState.settings.rate;
    
    pushHistory();
    
    let amountPerPerson = 0;
    let remark = "";
    let winner = "-";
    let loser = "-";
    
    if (type === '追') {
        amountPerPerson = base;
        loser = gameState.players[playerIdx];
        winner = "其餘三家";
        remark = `🏃 追 (賠全家 $${base})`;
        gameState.balances[playerIdx] -= (amountPerPerson * 3);
        [0,1,2,3].forEach(i => { if(i !== playerIdx) gameState.balances[i] += amountPerPerson; });
    } else if (type === '詐胡') {
        amountPerPerson = 30 * rate;
        loser = gameState.players[playerIdx];
        winner = "其餘三家";
        remark = `🚫 詐胡 (賠全家 $${amountPerPerson})`;
        gameState.balances[playerIdx] -= (amountPerPerson * 3);
        [0,1,2,3].forEach(i => { if(i !== playerIdx) gameState.balances[i] += amountPerPerson; });
    } else {
        // 暗槓, 一台草, 一台花 (Receiver is playerIdx)
        winner = gameState.players[playerIdx];
        loser = "其餘三家";
        if (type === '暗槓') { amountPerPerson = base; remark = `🌑 暗槓 (收三家 $${base})`; }
        else if (type === '一台草') { amountPerPerson = Math.floor(base / 2); remark = `🌿 一台草 (收三家 $${amountPerPerson})`; }
        else if (type === '一台花') { amountPerPerson = base; remark = `🌸 一台花 (收三家 $${base})`; }
        
        gameState.balances[playerIdx] += (amountPerPerson * 3);
        [0,1,2,3].forEach(i => { if(i !== playerIdx) gameState.balances[i] -= amountPerPerson; });
    }
    
    gameState.history.push({
        round: "即時",
        winner: winner,
        loser: loser,
        tai: (type === '詐胡' ? 30 : "-"),
        amount: amountPerPerson * 3,
        remark: remark
    });
    
    // Record Balance Trend (Net Worth)
    gameState.balanceTrends.push(getNetWorths());

    toggleInstantModal(false);
    save();
    updateAllUI();
    showNotice(`${type} 已入帳`);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active', 'opacity-100'));
    document.querySelectorAll('.btn-tab').forEach(b => b.classList.add('opacity-60'));
    
    document.getElementById(`view-${tabId}`).classList.remove('hidden');
    document.getElementById(`tab-${tabId}`).classList.add('active', 'opacity-100');
    window.scrollTo(0, 0);

    if (tabId === 'stats') {
        setTimeout(updateStatsTab, 100);
    }
}

function updateStatsTab() {
    renderChart();
    renderMedals();
    renderScorecard();
}

function renderChart() {
    const container = document.getElementById('stats-chart-container');
    const legends = document.getElementById('stats-chart-legends');
    if (!container) return;

    const data = gameState.balanceTrends;
    const players = gameState.players;
    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444']; // A, B, C, D colors

    // Legends
    legends.innerHTML = players.map((p, i) => `
        <div class="flex items-center gap-1.5">
            <div class="w-3 h-3 rounded-full" style="background:${colors[i]}"></div>
            <span class="text-[10px] font-black text-slate-500 uppercase">${p}</span>
        </div>
    `).join('');

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 400;
    const padding = 40;
    const paddingRight = 120; // Re-added paddingRight missing from previous logic

    const numRounds = data.length - 1;

    let minVal = 0;
    let maxVal = 0;
    data.forEach(round => {
        round.forEach(v => {
            if (v < minVal) minVal = v;
            if (v > maxVal) maxVal = v;
        });
    });

    // Buffers
    minVal -= 20;
    maxVal += 20;
    const range = Number(maxVal - minVal) || 100;

    const getX = (roundIdx) => padding + (Number(roundIdx) / (numRounds || 1)) * (width - padding - paddingRight);
    const getY = (val) => height - padding - ((Number(val) - minVal) / range) * (height - 2 * padding);

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" class="overflow-visible">`;
    
    // Background
    svg += `<rect width="${width}" height="${height}" fill="#1a1a1a" rx="16" />`;
    
    // Y-Axis Grid (every 100)
    const yStart = Math.floor(minVal / 100) * 100;
    for (let v = yStart; v <= maxVal; v += 100) {
        if (v === 0) continue;
        svg += `<line x1="${padding}" y1="${getY(v)}" x2="${width - paddingRight}" y2="${getY(v)}" stroke="#333333" stroke-width="1" stroke-dasharray="4 4" />`;
        svg += `<text x="${padding - 5}" y="${getY(v) + 4}" font-family="Inter" font-size="10" fill="#666" text-anchor="end">$${v}</text>`;
    }
    
    // X-Axis Grid (every 5 rounds)
    for (let r = 5; r <= numRounds; r += 5) {
        svg += `<line x1="${getX(r)}" y1="${padding}" x2="${getX(r)}" y2="${height - padding}" stroke="#333333" stroke-width="1" />`;
        svg += `<text x="${getX(r)}" y="${height - padding + 15}" font-family="Inter" font-size="10" fill="#666" text-anchor="middle">${r}</text>`;
    }

    // Zero Line
    svg += `<line x1="${padding}" y1="${getY(0)}" x2="${width - paddingRight}" y2="${getY(0)}" stroke="white" stroke-width="2" />`;
    svg += `<text x="${padding - 5}" y="${getY(0) + 4}" font-family="Inter" font-size="10" fill="white" font-weight="bold" text-anchor="end">$0</text>`;

    // Tracking for collision avoidance
    const labelPositions = {};

    function getAdjustedY(roundIdx, baseY, delta, buffer = 14) {
        if (!labelPositions[roundIdx]) labelPositions[roundIdx] = [];
        let adjustedY = baseY + (delta > 0 ? -12 : 12);
        let attempts = 0;
        while (labelPositions[roundIdx].some(pos => Math.abs(pos - adjustedY) < buffer) && attempts < 5) {
            adjustedY += (delta > 0 ? -buffer : buffer);
            attempts++;
        }
        labelPositions[roundIdx].push(adjustedY);
        return adjustedY;
    }

    // Draw Paths
    for (let p = 0; p < 4; p++) {
        let path = `M ${getX(0)} ${getY(data[0][p])}`;
        for (let r = 1; r <= numRounds; r++) {
            path += ` L ${getX(r)} ${getY(data[r-1][p])} L ${getX(r)} ${getY(data[r][p])}`;
        }
        svg += `<path d="${path}" fill="none" stroke="${colors[p]}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;

        // Point Labels (Threshold >= 50)
        for (let r = 1; r <= numRounds; r++) {
            const delta = data[r][p] - data[r-1][p];
            if (Math.abs(delta) >= 50) {
                const h = gameState.history[r - 1];
                const x = getX(r);
                const y = getY(data[r][p]);
                
                let icon = '';
                if (h && h.winner.includes(players[p])) {
                    if (h.remark.includes('拉') || h.remark.includes('連')) icon = '🔥';
                    else if (h.remark.includes('踢')) icon = '🥊';
                }

                const color = delta > 0 ? '#4ade80' : '#f87171'; 
                const label = (delta > 0 ? '+$' : '-$') + Math.abs(delta);
                const adjY = getAdjustedY(r, y, delta);

                let groupInner = `<title>第 ${r} 局: ${players[p]} ${delta > 0 ? '贏' : '輸'} $${Math.abs(delta)}\n${h ? h.remark : ''}</title>`;
                if (icon) {
                    groupInner += `<text x="${x + (delta > 0 ? -2 : 2)}" y="${y + (delta > 0 ? 8 : -2)}" font-size="12" text-anchor="${delta > 0 ? 'end' : 'start'}" fill="${colors[p]}">${icon}</text>`;
                }
                groupInner += `<text x="${x}" y="${adjY + 4}" font-family="Inter" font-size="14" font-weight="900" fill="${color}" text-anchor="middle">${label}</text>`;
                svg += `<g class="cursor-pointer">${groupInner}</g>`;
            }
        }
    }

    // Right-side Dynamic Labels (Aligned with Endpoints)
    const finalPositions = [];
    for (let p = 0; p < 4; p++) {
        const val = data[numRounds][p];
        finalPositions.push({
            pIdx: p,
            name: players[p],
            val: val,
            color: colors[p],
            y: getY(val)
        });
    }

    // Sort by Y position to handle vertical spacing
    finalPositions.sort((a, b) => a.y - b.y);

    // Collision avoidance for right-side labels
    const minPadding = 30; 
    for (let i = 1; i < finalPositions.length; i++) {
        if (finalPositions[i].y - finalPositions[i-1].y < minPadding) {
            finalPositions[i].y = finalPositions[i-1].y + minPadding;
        }
    }

    const stackX = width - paddingRight + 15;
    finalPositions.forEach(fb => {
        const valText = (fb.val > 0 ? '+$' : (fb.val < 0 ? '-$' : '$')) + Math.abs(fb.val);
        const endpointY = getY(fb.val);
        
        svg += `
            <g>
                <!-- Connector Line -->
                <line x1="${width - paddingRight}" y1="${endpointY}" x2="${stackX - 5}" y2="${fb.y}" stroke="${fb.color}" stroke-width="2" stroke-dasharray="2 2" opacity="0.6" />
                
                <text x="${stackX}" y="${fb.y - 4}" font-family="Inter" font-size="14" font-weight="900" fill="#94a3b8" text-transform="uppercase">${fb.name}:</text>
                <text x="${stackX}" y="${fb.y + 18}" font-family="Inter" font-size="20" font-weight="900" fill="${fb.color}">${valText}</text>
            </g>
        `;
    });

    svg += `</svg>`;
    container.innerHTML = svg;
}

function renderMedals() {
    const grid = document.getElementById('stats-medals-grid');
    if (!grid) return;

    const players = gameState.players;
    const history = gameState.history;
    
    // Calculations
    const winCounts = [0,0,0,0];
    const lossCounts = [0,0,0,0];
    const totalTai = [0,0,0,0];
    const winTimes = [0,0,0,0];

    history.forEach(h => {
        if (typeof h.tai === 'number') {
            if (h.winner && h.winner !== "-" && h.winner !== "其餘三家") {
                const ws = h.winner.split('&').map(s => s.trim());
                ws.forEach(wName => {
                    const idx = players.findIndex(p => p.trim() === wName);
                    if (idx !== -1) {
                        winCounts[idx]++;
                        totalTai[idx] += h.tai;
                        winTimes[idx]++;
                    }
                });
            }
            if (h.loser && h.loser !== "-" && h.loser !== "三家") {
                const idx = players.findIndex(p => p.trim() === h.loser.trim());
                if (idx !== -1) lossCounts[idx]++;
            }
        }
    });

    const avgTai = winTimes.map((t, i) => t > 0 ? (totalTai[i] / t).toFixed(1) : 0);
    const netWorths = getNetWorths();

    const getPlayerByMax = (arr) => {
        const m = Math.max(...arr);
        return (m === -Infinity || isNaN(m)) ? -1 : arr.indexOf(m);
    };
    const getPlayerByMin = (arr) => {
        const m = Math.min(...arr);
        return (m === Infinity || isNaN(m)) ? -1 : arr.indexOf(m);
    };

    const medals = [
        { title: '勝局統計 (Wins)', desc: '食糊次數最多', player: getPlayerByMax(winCounts), value: getPlayerByMax(winCounts) !== -1 ? `食 ${winCounts[getPlayerByMax(winCounts)]} 舖` : "無數據", color: 'bg-[#2a2a2a] text-amber-500 border-amber-600/30' },
        { title: '防禦統計 (Defense)', desc: '成功踢半次數最多', player: getPlayerByMax(gameState.stats.kickCounts), value: `踢 ${gameState.stats.kickCounts[getPlayerByMax(gameState.stats.kickCounts)] || 0} 次`, color: 'bg-[#2a2a2a] text-blue-400 border-blue-500/30' },
        { title: '連莊紀錄 (Dealer Streak)', desc: '最強連莊紀錄', player: getPlayerByMax(gameState.stats.dealerStreaks), value: `連 ${gameState.stats.dealerStreaks[getPlayerByMax(gameState.stats.dealerStreaks)] || 0} 莊`, color: 'bg-[#2a2a2a] text-orange-400 border-orange-500/30' },
        { title: '損耗統計 (Losses)', desc: '全場最慷慨 (輸最多)', player: getPlayerByMin(netWorths), value: `$${netWorths[getPlayerByMin(netWorths)] || 0}`, color: 'bg-[#2a2a2a] text-red-500 border-red-500/30' },
        { title: '平均番數 (Avg. Tai)', desc: '平均番數最低 (無大志)', player: getPlayerByMin(avgTai.map((v, i) => winTimes[i] > 0 ? Number(v) : 999)), 
          value: getPlayerByMin(avgTai.map((v, i) => winTimes[i] > 0 ? Number(v) : 999)) !== -1 && winTimes[getPlayerByMin(avgTai.map((v, i) => winTimes[i] > 0 ? Number(v) : 999))] > 0 
            ? `均 ${avgTai[getPlayerByMin(avgTai.map((v, i) => winTimes[i] > 0 ? Number(v) : 999))]} 番` : "無數據", color: 'bg-[#2a2a2a] text-slate-300 border-slate-600/30' },
        { title: '最高番數 (Max Tai)', desc: '單局最高番數', player: getPlayerByMax(gameState.stats.maxFans), value: `${gameState.stats.maxFans[getPlayerByMax(gameState.stats.maxFans)] || 0} 番`, color: 'bg-[#2a2a2a] text-emerald-400 border-emerald-500/30' },
        { title: '單筆最高斬獲', desc: '單次贏取最高金額', player: getPlayerByMax(gameState.stats.maxSingleGain), value: `$${gameState.stats.maxSingleGain[getPlayerByMax(gameState.stats.maxSingleGain)] || 0}`, color: 'bg-[#2a2a2a] text-amber-300 border-amber-500/30' },
        { title: '反拉最高金額', desc: '成功踢半最高金額', player: getPlayerByMax(gameState.stats.maxKickAmount), value: `$${gameState.stats.maxKickAmount[getPlayerByMax(gameState.stats.maxKickAmount)] || 0}`, color: 'bg-[#2a2a2a] text-blue-300 border-blue-500/30' }
    ];

    grid.innerHTML = medals.map(m => `
        <div class="stat-card p-5 rounded-2xl flex flex-col items-center text-center shadow-lg border ${m.color}">
            <h4 class="text-[15px] font-black mb-1">${m.title}</h4>
            <p class="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-4">${m.desc}</p>
            <div class="bg-black/30 px-4 py-2 rounded-xl border border-white/5 w-full">
                <p class="text-[10px] font-black uppercase opacity-70 tracking-widest">${players[m.player] || '無數據'}</p>
                <p class="text-xl font-black mt-1">${m.value}</p>
            </div>
        </div>
    `).join('');
}

function renderScorecard() {
    const container = document.getElementById('stats-scorecard-container');
    if (!container) return;

    const players = gameState.players;
    const history = gameState.history;
    const netWorths = getNetWorths();

    let html = `
        <table class="w-full text-center border-collapse text-sm">
            <thead>
                <tr>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">玩家</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">最終損益 (HKD)</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">食 / 銃 (W/L)</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">自摸率 (%)</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">平均番數 (Avg.)</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">最高連莊 (Streak)</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">最高番數 (Max)</th>
                    <th class="px-2 py-4 bg-[#2a2a2a] border border-[#3f3f46] text-slate-300 font-bold whitespace-nowrap">踢半 (Kicks)</th>
                </tr>
            </thead>
            <tbody>
    `;

    for (let i = 0; i < 4; i++) {
        const p = players[i];
        let wins = 0;
        let losses = 0;
        let selfDrawn = 0;
        let totalTai = 0;

        history.forEach(h => {
            if (typeof h.tai === 'number') {
                if (h.winner && h.winner.includes(p)) {
                    wins++;
                    totalTai += h.tai;
                    if (h.loser === "三家" || h.loser === "-") selfDrawn++;
                }
                if (h.loser && h.loser.includes(p) && h.loser !== "三家" && h.loser !== "其餘三家") {
                    losses++;
                } else if (h.loser === "三家" && h.winner && !h.winner.includes(p)) {
                    losses++;
                }
            }
        });

        const net = netWorths[i];
        const selfDrawRate = wins > 0 ? Math.round((selfDrawn / wins) * 100) : 0;
        const avgTai = wins > 0 ? (totalTai / wins).toFixed(1) : 0;
        const streak = gameState.stats.dealerStreaks[i] || 0;
        const maxTai = gameState.stats.maxFans[i] || 0;
        const kicks = gameState.stats.kickCounts[i] || 0;

        const netColor = net > 0 ? 'text-[#4ade80]' : (net < 0 ? 'text-[#f87171]' : 'text-slate-300');
        const netText = (net > 0 ? '+$' : (net < 0 ? '-$' : '$')) + Math.abs(net);

        html += `
            <tr class="hover:bg-white/5 transition-colors">
                <td class="px-2 py-4 border border-[#3f3f46] font-black text-slate-200">${p}</td>
                <td class="px-2 py-4 border border-[#3f3f46] font-black text-xl ${netColor}">${netText}</td>
                <td class="px-2 py-4 border border-[#3f3f46] text-slate-300 font-bold text-lg">${wins} / ${losses}</td>
                <td class="px-2 py-4 border border-[#3f3f46] text-slate-300 text-lg">${selfDrawRate}%</td>
                <td class="px-2 py-4 border border-[#3f3f46] text-slate-300 text-lg">${avgTai}</td>
                <td class="px-2 py-4 border border-[#3f3f46] text-slate-300 text-lg">${streak}</td>
                <td class="px-2 py-4 border border-[#3f3f46] text-slate-300 text-lg">${maxTai}</td>
                <td class="px-2 py-4 border border-[#3f3f46] text-slate-300 text-lg">${kicks}</td>
            </tr>
        `;
    }

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// --- Settlement (截數) ---
window.settleIndividualDebt = function(debtIndex) {
    const d = gameState.pendingDebts[debtIndex];
    if (!d) return;

    pushHistory();
    
    // Move to Permanent Balances
    gameState.balances[d.creditor] += d.amount;
    gameState.balances[d.debtor] -= d.amount;

    gameState.history.push({
        round: "截數",
        winner: gameState.players[d.creditor],
        loser: gameState.players[d.debtor],
        tai: "-",
        amount: d.amount,
        remark: `⚡ 截數 (結清 ${gameState.players[d.debtor]} -> ${gameState.players[d.creditor]})`
    });

    // Remove from array
    gameState.pendingDebts.splice(debtIndex, 1);

    // Record Balance Trend (Net Worth)
    gameState.balanceTrends.push(getNetWorths());

    save();
    showNotice(`已結清一條債務`);
};

document.addEventListener("DOMContentLoaded", init);

// --- EXPORT IMAGE LOGIC ---
window.exportAsImage = function() {
    showNotice('📸 正在生成參謀部戰績摘要...');
    
    const wrap = document.getElementById('export-summary-wrap');
    if (!wrap) return;

    // 1. Current Date
    const now = new Date();
    const dateStr = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
    document.getElementById('export-date').innerText = dateStr;
    document.getElementById('export-footer-text').innerText = `數據由 [參謀部小帳本] 系統生成 V3.0 | ${dateStr}`;

    // 2. Rankings & Data Count
    const players = gameState.players;
    const history = gameState.history;
    const netWorths = getNetWorths();
    const rankings = players.map((name, i) => ({ name, val: netWorths[i], i })).sort((a,b) => b.val - a.val);

    document.getElementById('export-data-count').innerText = history.length;

    const rankIcons = ['🥇', '🥈', '🥉', '🎖️'];
    const rankSuffixes = ['ST', 'ND', 'RD', 'TH'];
    document.getElementById('export-rankings').innerHTML = rankings.map((r, i) => `
        <div class="flex items-center justify-between border-b border-slate-200 pb-2">
            <div class="flex items-center gap-3">
                <span class="text-2xl">${rankIcons[i] || '•'}</span>
                <div>
                    <span class="text-lg font-black text-slate-800">${i+1}${rankSuffixes[i]} ${r.name}</span>
                </div>
            </div>
            <span class="text-2xl font-black ${r.val >= 0 ? 'text-emerald-600' : 'text-rose-600'}">${(r.val >= 0 ? '+$' : '-$') + Math.abs(r.val)}</span>
        </div>
    `).join('');

    // 3. Stats Calculation (Sync with Scorecard logic)
    const winCounts = [0,0,0,0];
    const totalTai = [0,0,0,0];
    const selfDrawn = [0,0,0,0];
    const losses = [0,0,0,0];

    history.forEach(h => {
        if (typeof h.tai === 'number') {
            players.forEach((p, idx) => {
                if (h.winner && h.winner.includes(p)) {
                    winCounts[idx]++;
                    totalTai[idx] += h.tai;
                    if (h.loser === "三家" || h.loser === "-") selfDrawn[idx]++;
                }
                if (h.loser && h.loser.includes(p) && h.loser !== "三家" && h.loser !== "其餘三家") losses[idx]++;
                else if (h.loser === "三家" && h.winner && !h.winner.includes(p)) losses[idx]++;
            });
        }
    });

    const getPlayerByMax = (arr) => {
        const m = Math.max(...arr);
        return { idx: arr.indexOf(m), val: m };
    };
    const getPlayerByMin = (arr) => {
        const m = Math.min(...arr);
        return { idx: arr.indexOf(m), val: m };
    };

    const maxTaiVal = getPlayerByMax(gameState.stats.maxFans);
    const winMax = getPlayerByMax(winCounts);
    const selfDrawnPct = selfDrawn.map((s, i) => winCounts[i] > 0 ? Math.round((s / winCounts[i]) * 100) : 0);
    const sdMax = getPlayerByMax(selfDrawnPct);

    const kickMax = getPlayerByMax(gameState.stats.kickCounts);
    const lossMax = getPlayerByMax(losses);
    const lossMin = getPlayerByMin(losses); 
    const avgTai = winCounts.map((w, i) => w > 0 ? (totalTai[i] / w).toFixed(1) : 0);
    const avgMax = getPlayerByMax(avgTai.map(v => Number(v)));

    const maxGainData = getPlayerByMax(gameState.stats.maxSingleGain);
    const maxKickAmtData = getPlayerByMax(gameState.stats.maxKickAmount);

    const maxGainString = maxGainData.idx !== -1 ? `${players[maxGainData.idx]} ($${gameState.stats.maxSingleGain[maxGainData.idx]})` : "無數據";
    const maxKickAmtString = maxKickAmtData.idx !== -1 ? `${players[maxKickAmtData.idx]} ($${gameState.stats.maxKickAmount[maxKickAmtData.idx]})` : "無數據";

    // 4. Fill Lists
    document.getElementById('export-tech-metrics').innerHTML = `
        <li class="flex gap-2">🔥 單局最高番數: ${players[maxTaiVal.idx]} (${maxTaiVal.val} 番)</li>
        <li class="flex gap-2">✍️ 食糊最多: ${players[winMax.idx]} (${winMax.val} 舖)</li>
        <li class="flex gap-2">📏 自摸率之冠: ${players[sdMax.idx]} (${sdMax.val}%)</li>
        <li class="flex gap-2">⚖️ 平均番數: ${players[avgMax.idx]} (${avgMax.val} 番)</li>
        <li class="flex gap-2">💰 單筆最高斬獲: ${maxGainString}</li>
    `;

    document.getElementById('export-defense-records').innerHTML = `
        <li class="flex gap-2">🛡️ 反拉紀錄: ${players[kickMax.idx]} (${kickMax.val} 次)</li>
        <li class="flex gap-2">🎯 出沖最多: ${players[lossMax.idx]} (${lossMax.val} 次)</li>
        <li class="flex gap-2">🍀 出沖最少: ${players[lossMin.idx]} (${lossMin.val} 次)</li>
        <li class="flex gap-2">⚡ 反拉最高金額: ${maxKickAmtString}</li>
    `;





    // 5. Chart Clone & Style Force
    const originalSvg = document.querySelector('#stats-chart-container svg');
    const chartExport = document.getElementById('export-chart-container');
    if (originalSvg && chartExport) {
        const clonedSvg = originalSvg.cloneNode(true);
        clonedSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        chartExport.innerHTML = '';
        chartExport.appendChild(clonedSvg);
        
        // Adapt colors for light mode image - FORCE HIGH CONTRAST
        clonedSvg.querySelector('rect').setAttribute('fill', 'rgba(255,255,255,0.01)'); 
        clonedSvg.querySelectorAll('text').forEach(t => t.setAttribute('fill', '#475569')); // Darker slate
        clonedSvg.querySelectorAll('line').forEach(l => {
            if (l.getAttribute('stroke') === 'white' || l.getAttribute('stroke') === '#0f172a') l.setAttribute('stroke', '#0f172a'); // Zero line
            else l.setAttribute('stroke', '#f1f5f9'); // Grid lines
        });
    }

    // 6. html2canvas capture
    const captureArea = document.getElementById('export-summary-container');
    html2canvas(captureArea, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `MJ_Summary_${now.getTime()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showNotice('✅ 截圖已成功下載！');
    }).catch(err => {
        console.error('Export Error:', err);
        showNotice('❌ 截圖失敗，請檢查瀏覽器相容性');
    });
};
