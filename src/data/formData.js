export const formData = {
  user: {
    name: null,
    email: null,
    phone: null
  },
  billingCycles: [
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' }
  ],
  plans: [
    { id: 'arcade', label: 'Arcade', value: 9 },
    { id: 'advanced', label: 'Advanced', value: 12 },
    { id: 'pro', label: 'Pro', value: 15 }
  ],
  addOns: [
    {
      id: 'online-service',
      label: 'Online Service',
      description: 'Access to multiplayer games',
      value: 1
    },
    {
      id: 'larger-storage',
      label: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      value: 2
    },
    {
      id: 'customizable-profile',
      label: 'Customizable Profile',
      description: 'Custom theme on your profile',
      value: 2
    }
  ]
}