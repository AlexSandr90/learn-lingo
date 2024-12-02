import * as yup from 'yup';

const mainSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: yup
    .string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email. Example: example@mail.com'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required. Example: Querty123'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^\+\d{1,4}\d{6,12}$/,
      'Phone number must include country code and 6-12 digits'
    )
    .min(9, 'Too short')
    .max(15, 'Too long'),
  reason: yup
    .string()
    .oneOf(
      [
        'Career and business',
        'Lesson for kids',
        'Living abroad',
        'Exams and coursework',
        'Culture, travel or hobby',
      ],
      'Reason must be one of the predefined options'
    )
    .required('Reason is required'),
});

export const registerSchema = mainSchema.pick(['name', 'email', 'password']);

export const loginSchema = mainSchema.pick(['email', 'password']);

export const bookTrialSchema = mainSchema.pick([
  'name',
  'email',
  'phone',
  'reason',
]);
