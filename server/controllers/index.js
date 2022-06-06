import { validateLogin, validateRegister } from './validators.js';
import { users } from '../models/users.js';

const login = (req, res) => {
  if (!validateLogin(req.body)) return res.status(400).send('Your input has a wrong format!');
  const { email, password } = req.body;
  const user = users.find((el) => el.email === email && el.password === password);
  if (user) {
    const { id, name } = user;
    req.session.userid = id;
    return res.status(200).json({ id, name });
  }
  res.status(401).end();
};

const logout = (req, res) => {
  req.session.destroy();
  res.clearCookies(process.env.SESSION_NAME);
  return res.status(200).end();
};

const register = (req, res) => {
  if (!validateRegister(req.body)) return res.status(400).send('Your input has a wrong format!');
  const checkUser = users.find((el) => el.email === req.body.email);
  if (checkUser) return res.status(409).send('The provided email already exists!.');
  const { firstName, lastName, email, password } = req.body;
  const id = Math.max(...users.map((el) => el.id)) + 1;
  users.push({ id, firstName, lastName, email, password });
  return res.status(200).json('Congratulations! You are registered!');
};

const getSecret = (req, res) => {
  const user = users.find((el) => el.id === Number(req.params.id));
  if (!user) return res.status(404).send('Server error!');
  res.status(200).send(user.secret);
};

export { login, logout, register, getSecret };
