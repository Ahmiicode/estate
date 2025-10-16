// DashboardLayout.jsx
import { Outlet, useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Post Listing", path: "/addproperty" },
  { name: "Property Management", path: "/dashboard/property-management" },
  { name: "All Listings", path: "/dashboard/all-listings" },
  { name: "Inbox", path: "/dashboard/inbox" },
  { name: "Settings", path: "/dashboard/settings" },
  { name: "Prop Shop", path: "/dashboard/prop-shop" },
];

export default function Dashboardpage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen mt-33 bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-6">My Properties</h2>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className="p-3 rounded cursor-pointer mb-2 hover:bg-gray-200"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet /> {/* This renders DashboardPage or other pages */}
      </main>
    </div>
  );
}
