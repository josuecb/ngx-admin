import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Home",
    link: "/pages/home",
    home: true,
  },
  {
    title: "Shipment",
    link: "/pages/shipment",
    children: [
      {
        title: "Rate Shipment",
        link: "/pages/shipment/rate_shipment",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Work Distribution",
        link: "/pages/shipment/work_distribution",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Mass Update Shipment",
        link: "/pages/shipment/mass_update_shipment",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Archive Search",
        link: "/pages/shipment/archive_search",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Auditing",
        link: "/pages/shipment/auditing",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Audit",
        link: "/pages/shipment/audit",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
    ],

  },
  {
    title: "Miscellaneous",
    link: "/pages/miscellaneous",
    children: [
      {
        title: "Report",
        link: "/pages/miscellaneous/report",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Customer",
        link: "/pages/miscellaneous/customer",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Shipment History",
        link: "/pages/miscellaneous/shipment_history",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Virtual Shipment",
        link: "/pages/miscellaneous/virtual_shipment",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Consolidate",
        link: "/pages/miscellaneous/consolidate",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Consolidate Freight",
        link: "/pages/miscellaneous/consolidate_freight",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
    ],
  },
  {
    title: "Way Bill",
    link: "/pages/waybill",
    children: [
      {
        title: "View Waybill",
        link: "/pages/waybill/view",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Edit Waybill",
        link: "/pages/waybill/edit",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Edit Movements",
        link: "/pages/waybill/edit_movements",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Mass Update Waybill",
        link: "/pages/waybill/mass_update",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
    ]
  },
  
  {
    title: "Admin",
    link: "/pages/admin",
    children: [
      {
        title: "View Proccess Status",
        link: "/pages/admin/view_proccess_status",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Report Erroed Shipment",
        link: "/pages/admin/report_erroed_shipment",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Manage Master Data",
        link: "/pages/admin/manage_master_data",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
        children: [
          {
            title: "View Waybill",
            link: "/pages/waybill/view",
            icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
          },
          {
            title: "Edit Waybill",
            link: "/pages/waybill/edit",
            icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
          },
          {
            title: "Edit Movements",
            link: "/pages/waybill/edit_movements",
            icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
          },
          {
            title: "Mass Update Waybill",
            link: "/pages/waybill/mass_update",
            icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
          },
        ]
      },
      {
        title: "Manage Work Groups",
        link: "/pages/admin/manage_work_groups",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Manage Customer Pri...",
        link: "/pages/admin/manage_customer",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Manage User Profile",
        link: "/pages/admin/manage_user_profile",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
    ],
  },
  {
    title: "Security",
    link: "/pages/security",
    children: [
      {
        title: "Manage Users",
        link: "/pages/security/manage_users",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Manage Groups",
        link: "/pages/security/manage_groups",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      },
      {
        title: "Manage Applications",
        link: "/pages/security/manage_applications",
        icon: { icon: "arrow-forward-outline", pack: "eva", options: [{ animation: { type: 'zoom' }}]},
      }
    ],
  },
];
