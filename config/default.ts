export default {
  port: 1331,
  host: 'localhost',
  dbUri: 'mongodb://localhost:27017/rest-user-api',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  jsonWebTokenSecretOrPrivateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgG7OsosjDqax/xZTqpI/AjPVwVabUcd0tBL6rLTijY0xqsy47WHs
  wwdM+bHGMeXsw6uLQVa863FpXgqeoOwQO5XPbp62OVQ73H+HG/+n1oVr6uFqTspd
  Ab4UPCXzxF3uRdyoY3f27z1vprHAD5WVataukxcbfW2alfMUaSeqPYXxAgMBAAEC
  gYBHKuJpkr6aOcBIKrxm6akUebmPUnqXzFDLz8yU8N1RThERI8TzHAm26q2EjHMH
  5aVWzD3O48+kK7SGxZM9ir95g9ChJ7z2itZtCcMlFU5xwfxkGY0hsUlinJX//pRE
  OmTn/Lz4iWsVF+P/3Y+fnqxM8CJzotPHyYS9tUCMuv2E8QJBALOiDi/gI7rX2bry
  GZ6b7guoqeSroKSKD2q4MlbgIsB6SJQtk1t1YZO1OqrkEvG+Rxid3ywFkgyeNjUJ
  g3IKgxMCQQCd6ipYrChCE5wjZsw4vmFEx5fAHRLQQ/ySWg5L+ePZyO/CiWbwvy1p
  ZuVyo9Pnc5BDqT6eJPUXOJ/WaEQH3u9rAkAarik5RytHZyP5tlfDzRkwNh71zeAQ
  UEk16qHfcW7387GwAIzweqDBlZtfIn0F1uMsbtZk7Xbh1OXsPrt9Rr5tAkAwPJ5Q
  1c26WWkhez44uxbVPq7BFWBw08OsJOwnEx8hoHp0jyotsgg6IR9HhHmvQqK3uFQT
  VLC1NivE/7aAPP4fAkEAnK4LG5HSaBQk4JeYMp3Uv0qLSatwaZIsLSZwyZpZZ72m
  B4K4AVRVxdh+9grEyhHG69T+qSfciCvWXnEYKaWdHg==
  -----END RSA PRIVATE KEY-----`,
};
