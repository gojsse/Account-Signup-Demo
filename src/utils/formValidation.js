import Joi from 'joi'
import joiPhone from 'joi-phone-number'

const extendedJoi = Joi.extend(joiPhone)

// Message options
// 'string.empty': 'Name cannot be an empty field',
// 'any.required': 'Name is required'

const isRequired = (value) => {
  const validation = extendedJoi.string().required().validate(value)

  if (validation.error) {
    return 'This field is required'
  }

  return ''
}

const validateName = (value) => {
  const validation = extendedJoi
    .string()
    .min(2)
    .messages({
      'string.min': `Name should be min {#limit} characters..`
    })
    .validate(value)

  if (validation.error) {
    return validation.error
  }

  return ''
}

const validatePhoneNumber = (value) => {
  const validation = extendedJoi
    .string()
    .phoneNumber({
      defaultCountry: 'US',
      format: 'national',
      strict: true
    })
    .validate(value)

  if (validation.error) {
    return 'Please enter a valid phone number'
  }

  return ''
}

const validateEmail = (value) => {
  const validation = extendedJoi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .validate(value)

  if (validation.error) {
    return 'Please enter a valid email address'
  }

  return ''
}

const validateBoolean = (value) => {
  const validation = extendedJoi.boolean().required().validate(value)

  if (validation.error) {
    return 'Switch selection was invalid'
  }

  return ''
}

const validateRadioGroup = (value) => {
  const validation = extendedJoi.object().required().validate(value)

  if (validation.error) {
    return 'Radio selection was invalid'
  }

  return ''
}

const validateCheckboxGroup = (value, validOptions) => {
  const validation = extendedJoi
    .array()
    .items(extendedJoi.string().valid(...validOptions.map((a) => a.id)))
    .validate(value)

  if (validation.error) {
    return 'Checkbox selection was invalid'
  }

  return ''
}

export const validate = {
  // Required
  isRequired: isRequired,
  // Types
  name: validateName,
  phoneNumber: validatePhoneNumber,
  email: validateEmail,
  boolean: validateBoolean,
  radioGroup: validateRadioGroup,
  checkboxGroup: validateCheckboxGroup
}
