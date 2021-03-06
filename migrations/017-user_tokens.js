var db = require('./db')

exports.up = function (next) {
  var sql = [
    'drop table if exists users',
    `create table if not exists user_tokens (
      token text PRIMARY KEY,
      name text NOT NULL,
      created timestamptz NOT NULL default now()
    )`,
    `create table if not exists one_time_passes (
      token text PRIMARY KEY,
      name text NOT NULL,
      created timestamptz NOT NULL default now()
    )`
  ]
  db.multi(sql, next)
}

exports.down = function (next) {
  next()
}
