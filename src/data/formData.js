export const formData = {
  name: null,
  email: null,
  phone: null,
  billingCycles: [
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' }
  ],
  // .value is in monthly us dollars
  plans: [
    { id: 'arcade', label: 'Arcade', value: 9, iconColor: 'text-orange-300', iconName: 'IconJoy' },
    {
      id: 'advanced',
      label: 'Advanced',
      value: 12,
      iconColor: 'text-rose-400',
      iconName: 'Icon16B'
    },
    { id: 'pro', label: 'Pro', value: 15, iconColor: 'text-blue-400', iconName: 'Icon32B' }
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
