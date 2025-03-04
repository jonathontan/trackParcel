const mobileBreakpoint: number = 700
const tabletBreakpoint: number = 768
const drawerWidth: number = 100
const navigationItems: {
  label: string,
  href: string
}[] = [
    {
      label: "TRACK PARCEL",
      href: ""
    },
    {
      label: "CAN'T FIND YOUR AWB",
      href: "/#faq"
    },
    {
      label: "1800 3161661",
      href: ""
    }
  ]
  const statusSteps: {
    label: string,
    icon: string
  }[] = [
    {
      label: 'Info Received',
      icon: 'material-symbols:info-outline'
    },
    {
      label: 'At Warehouse',
      icon: 'material-symbols:warehouse-outline'
    },
    {
      label: 'Out For Delivery',
      icon: 'circum:delivery-truck'
    },
    {
      label: 'Completed',
      icon: 'charm:tick'
    }
  ]

  const deliveryRemarksList: string[] = ['Leave at door step', 'Put in riser']

export default { mobileBreakpoint, tabletBreakpoint, navigationItems, drawerWidth, statusSteps, deliveryRemarksList }