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

const dbDelUserStock = async (userId, symbol) => {
  const { rows } = await query(
    'DELETE FROM userstocks WHERE userid = $1 AND symbol = $2',
    [userId, symbol],
  );
  return rows[0];
};

const dbAddUserStock = async (userId, symbol) => {
  
}

export { dbPostUser, dbGetUsers, dbGetUserByEmail, dbDelUserStock };
