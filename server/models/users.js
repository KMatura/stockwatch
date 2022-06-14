import query from '../db/index.js';

const dbPostUser = async ({ name, email, password, secret}) => {
  const { rows } = await query(
    'INSERT INTO users(name, email, password, secret) values ($1, $2, $3, $4) returning *',
    [name, email, password, secret],
  );
  return rows[0];
};

const dbGetUsers = async () => {
  const { rows } = await query('SELECT * FROM users');
  return rows;
};

const dbGetUserByEmail = async (email) => {
  const { rows } = await query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  return rows[0];
};

const dbDelUserStock = async (uid, symbol) => {
  const { rows } = await query(
    'update users set userStocks = (select array_remove(userStocks, $1)) WHERE uid = $2',
    [uid, symbol],
  );
  return rows[0];
};

const dbAddUserStock = async (userId, symbol) => {
  const { rows } = await query(
    'update users set userStocks = (select array_append(userStocks, $1)) WHERE uid = $2',
    [symbol, userId],
  );
  return rows[0];
}

export { dbPostUser, dbGetUsers, dbGetUserByEmail, dbDelUserStock, dbAddUserStock };
