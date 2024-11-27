import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 6 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const bookTrialSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please provide a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^\+\d{1,4}\d{6,12}$/,
      'Phone number must include country code and 6-12 digits'
    ),
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
    .required(),
});
