export const generateId = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const setLocalStorage = (key, value) => {
  if (typeof key !== 'string') {
    // Dummy error handling
    console.log('Invalid Key')
    return
  }
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const rehireEligibleEmployees = [
  {
    id: 0,
    name: 'Tim',
    position: 'Senior Software Engineer',
    rehire_eligible: true,
    voluntary: true,
    terminated_date: '23 March 2021',
    termination_reason: null,
    profile_link: 'https://linkedin.com', // Meant to be the homepage of linkedin as a mock
    email: 'tim@gmail.com',
  },
  {
    id: 1,
    name: 'Bob',
    position: 'Senior Software Engineer',
    rehire_eligible: true,
    voluntary: false,
    terminated_date: '22 March 2021',
    termination_reason: null,
    profile_link: 'https://linkedin.com',
    email: 'bob@gmail.com',
  },
  {
    id: 2,
    name: 'SusanSusan',
    position: 'Senior Software Engineer',
    rehire_eligible: true,
    voluntary: true,
    terminated_date: '22 March 2021',
    termination_reason: 'Left because of a new opportunity',
    profile_link: 'https://linkedin.com',
    email: 'susan@gmail.com',
  },
]

export const rehireInellgibleEmployees = [
  {
    id: 3,
    name: 'De Gea',
    position: 'Senior Software Engineer',
    rehire_eligible: false,
    voluntary: true,
    terminated_date: '23 March 2021',
    termination_reason: null,
    profile_link: 'https://linkedin.com',
    email: 'de_gea@gmail.com',
  },
  {
    id: 4,
    name: 'Pogba',
    position: 'Senior Software Engineer',
    rehire_eligible: false,
    voluntary: true,
    terminated_date: '22 March 2021',
    termination_reason: null,
    profile_link: 'https://linkedin.com',
    email: 'pogba@gmail.com',
  },
  {
    id: 5,
    name: 'Juan',
    position: 'Senior Software Engineer',
    rehire_eligible: false,
    voluntary: true,
    terminated_date: '22 March 2021',
    termination_reason: null,
    profile_link: 'https://linkedin.com',
    email: 'pogba@gmail.com',
  },
]

export const rehireUnknownEmployees = [
  {
    id: 6,
    name: 'Juan',
    position: 'Senior Software Engineer',
    rehire_eligible: false,
    voluntary: true,
    terminated_date: '23 March 2021',
    termination_reason: null,
    profile_link: 'https://linkedin.com',
    email: 'juan@gmail.com',
  },
]