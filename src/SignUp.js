import { ref } from 'vue';
import { firebaseAuth } from 'firebase/auth';

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await firebaseAuth.signup(email, password);
    if (!res) {
      throw new Error('Signup error, try again.');
    }
    await res.user.updateProfil({
      displayName,
    });
    error.value = null;

    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const SignUp = () => {
    return {
        error, signup
    }
}

export default SignUp;
