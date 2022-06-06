import validator from 'is-my-json-valid';

const validateLogin = validator({
  required: true,
  type: 'object',
  properties: {
    email: {
      required: true,
      type: 'string',
    },
    password: {
      required: true,
      type: 'string',
    },
  },
});

const validateRegister = validator({
  required: true,
  type: 'object',
  properties: {
    email: {
      required: true,
      type: 'string',
      format: 'email',
    },
    password: {
      required: true,
      type: 'string',
    },
    firstName: {
      required: true,
      type: 'string',
    },
    lastName: {
      required: true,
      type: 'string',
    },
  },
});

export { validateLogin, validateRegister };
