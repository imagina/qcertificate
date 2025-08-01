
export default {
  customers: {
    //permission: 'icertificate.customers.manage',
    activated: true,
    authenticated: true,
    path: '/certificate/customers/index',
    name: 'qcertificate.admin.customers',
    crud : import('@imagina/qcertificate/_crud/customers'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'icertificate.cms.sidebar.adminCustomers',
    icon: 'fa-light fa-diamond-exclamation',
    subHeader: {
        refresh: true,
    }
  },  
}
