const pages = config('pages') // Get Pages from config

//task
export default [
    {
      title: 'icertificate.cms.sidebar.adminGroup',
      icon: 'fa-light fa-list-check',
      children: [
        pages.qcertificate.customers,        
      ]
    },
  ]
