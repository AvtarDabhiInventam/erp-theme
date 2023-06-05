const navigation = () => {
  return [
    // {
    //   title: 'Masters',
    //   path: '/home',
    //   icon: 'mdi:home-outline',
    // },
    {
      title: 'Transaction',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Sales',
          path: ''
        },
        {
          title: 'Purchase',
          path: ''
        },
        {
          title: 'Bank/Cash',
          path: ''
        },
        {
          title: 'Journal Voucher',
          path: ''
        },
        {
          title: 'Income/Exp Voucher',
          path: ''
        },
        {
          title: 'Credit Note',
          path: ''
        },
        {
          title: 'Debit Note',
          path: ''
        },
        {
          title: 'Opening',
          path: ''
        }
      ]
    },
    {
      title: 'Reports',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Ledger Account',
          path: ''
        },
        {
          title: 'OutStanding Report',
          path: ''
        },
        {
          title: 'Sales Purchase Report',
          path: ''
        },
        {
          title: 'TDS/TCS Report',
          path: ''
        },
        {
          title: 'GST Report',
          path: ''
        },
        {
          title: 'Final Report',
          path: ''
        },
        {
          title: 'Reconsilation Report',
          path: ''
        },
        {
          title: 'Interest Report',
          path: ''
        },
        {
          title: 'Order And Challan Report',
          path: ''
        },
        {
          title: 'Income/Exp Report',
          path: ''
        },
        {
          title: 'Brokerage Report',
          path: ''
        },
        {
          title: 'Inventory Report',
          path: ''
        },
        {
          title: 'Ledger-O/S Report',
          path: ''
        },
        {
          title: 'Multi-Account Ledger',
          path: ''
        }
      ]
    },
    {
      title: 'Masters',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Account Master',
          path: '/Masters/accounts-master-profile'
        },
        {
          title: 'Item Master',
          path: '/Masters/items-master-profile'
        },
        {
          title: 'Quality Master',
          path: '/Masters/quality-master-profile'
        },
        {
          title: 'SubHead Master',
          path: ''
        },
        {
          title: 'Company Master',
          path: '/company-master/CompanyMaster'
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
      title: 'Utility',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Logout',
          path: ''
        },
        {
          title: 'Data Scan',
          path: ''
        },
        {
          title: 'Data Restore',
          path: ''
        },
        {
          title: 'Data Backup',
          path: ''
        },
        {
          title: 'Fast JV Enteries',
          path: ''
        },
        {
          title: 'Sync to Server',
          path: ''
        },
        {
          title: 'Backup Location',
          path: ''
        },
        {
          title: 'Add Proxy Server',
          path: ''
        }
      ]
    },
    {
      title: 'Accessories',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'Update Database',
          path: ''
        },
        {
          title: 'Send Bulk Whats App',
          path: ''
        },
        {
          title: 'Fill Challan',
          path: ''
        },
        {
          title: 'Data Transfer',
          path: ''
        },
        {
          title: 'Admin',
          path: ''
        },
        {
          title: 'Create New Year',
          path: ''
        },
        {
          title: 'Excel',
          path: ''
        }
      ]
    },
    {
      title: 'Help',
      icon: 'mdi:file-document-outline',
      children: [
        {
          title: 'About',
          path: ''
        },
        {
          title: 'Missing VoucherNo',
          path: ''
        }
      ]
    }
  ]
}

export default navigation
