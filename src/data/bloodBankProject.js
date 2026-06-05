export const BLOOD_BANK_PROJECT = {
  title: 'Blood Bank Management System',
  role: 'React Frontend Developer — Client Project',
  badge: 'Major Project',
  intro:
    'A web-based application to digitize blood bank operations—donor registration, inventory with expiry and screening tracking, hospital blood requests with approval workflows, and role-based access for staff.',
  problem: [
    'Donor records were manual and hard to track.',
    'Blood inventory and expiry/testing procedures were difficult to monitor.',
    'Hospital requests were delayed by paper-based processes.',
    'No proper role-based security for different staff.',
  ],
  objectives: [
    'Automate donor registration and management.',
    'Monitor blood inventory and screening status in real time.',
    'Manage hospital requests with approval workflows.',
    'Provide secure role-based access for Admin, Sub-Admin, and staff.',
    'Support blood camps, QR codes, reminders, and report export.',
  ],
  stack: [
    'Next.js',
    'React',
    'TypeScript',
    'Redux Toolkit',
    'Tailwind CSS',
    'Radix UI',
    'AG Grid',
    'Formik',
    'Yup',
    'Axios',
    'REST & GraphQL',
    'Google Maps',
    'ExcelJS',
    'React PDF',
    'Cloudflare Turnstile',
  ],
  modules: [
    {
      name: 'Authentication',
      desc: 'Login, registration, captcha, protected routes, session handling, and token refresh with RBAC.',
    },
    {
      name: 'Dashboard',
      desc: 'Summary widgets for donors, inventory, and hospital requests.',
    },
    {
      name: 'Donor Management',
      desc: 'Full donor lifecycle—search, filter, donation history, unique ref numbers, and QR codes.',
    },
    {
      name: 'Inventory',
      desc: 'Track blood units from collection to storage; available, quarantined, and testing status.',
    },
    {
      name: 'Blood Request',
      desc: 'Hospital requests with patient details, urgency, approval/rejection, and unit allocation.',
    },
    {
      name: 'Screening & Lab',
      desc: 'Test visits and results; status updates as safe, quarantined, or in progress.',
    },
    {
      name: 'Settings & Admin',
      desc: 'Users, roles, permissions, master data, hospitals, storage, and org branding.',
    },
    {
      name: 'Tools & Utilities',
      desc: 'Blood camps, QR generation, reminders, donor card printing, stats, and report export.',
    },
  ],
  security: [
    'Secure login with captcha and role-based authorization.',
    'Protected routes and module-level permissions.',
    'Session management and automatic token refresh.',
    'Form validation and masked sensitive data (e.g. Aadhaar).',
  ],
  testing: [
    'Functional testing for login, donors, inventory, requests, and permissions.',
    'Integration testing for frontend–backend API communication.',
    'UI testing for responsiveness, loaders, and empty states.',
    'Security testing for unauthorized access; Jest unit tests documented.',
  ],
  future: [
    'Donor mobile app with SMS/WhatsApp reminders.',
    'ML-based blood demand prediction.',
    'Barcode/RFID scanning and multi-branch support.',
    'Offline mode for donation camps.',
  ],
}
