
export default {
  customers: {
    permission: 'icertificate.customers.manage',
    activated: true,
    authenticated: true,
    path: '/certificate/customers/index',
    name: 'qcertificate.admin.customers',
    crud : import('@imagina/qcertificate/_crud/customers'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'icertificate.cms.sidebar.adminCustomers',
    icon: 'fa-light fa-user',
    subHeader: {
      refresh: true,
    } 
  },  
  companies: {
    permission: 'icertificate.companies.manage',
    activated: true,
    authenticated: true,
    path: '/certificate/companies/index',
    name: 'qcertificate.admin.companies',
    crud : import('@imagina/qcertificate/_crud/companies'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'icertificate.cms.sidebar.adminCompanies',
    icon: 'fa-light fa-buildings',
    subHeader: {
      refresh: true,
    }
  },  
}
