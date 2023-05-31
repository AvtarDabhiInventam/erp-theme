const navigation = () => {
  return [
    // {
    //   title: 'Masters',
    //   path: '/home',
    //   icon: 'mdi:home-outline',
    // },
    {
      title: 'Masters',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Account Master',
          path: '/Masters/account-master'
        },
        {
          title: 'Item Master',
          path: ''
        },
        {
          title: 'Quality Master',
          path: ''
        },
        {
          title: 'SubHead Master',
          path: ''
        },
        {
          title: 'Company Master',
          path: ''
        },
        {
          title: 'City Master',
          path: ''
        },
        {
          title: 'Currency Master',
          path: ''
        },
        {
          title: 'Sub Company Master',
          path: ''
        },
        {
          title: 'Master Data',
          path: ''
        }
      ]
    },
    {
      title: 'Transaction',
      path: '/second-page',
      icon: 'mdi:email-outline',
    }
  ]
}

export default navigation
