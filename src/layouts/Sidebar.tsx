import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarItems } from '../constants/sidebarItems';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const location = useLocation();
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  useEffect(() => {
    sidebarItems.forEach((item) => {
      if (item.subItems) {
        const isSubItemActive = item.subItems.some(subItem => location.pathname.includes(subItem.href));
        if (isSubItemActive) {
          setOpenItemId(item.id);
        }
      }
    });
  }, [location]);

  const toggleDropdown = (itemId: number) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  const isActive = (href: string) => {
    return location.pathname.includes(href) ? 'bg-gray-200 dark:bg-gray-700' : '';
  };

  return (
    <>
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                {item.subItems ? (
                  <button
                    type="button"
                    className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isActive(item.href)}`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                      {item.label}
                    </span>
                    <svg
                      className={`w-3 h-3 transform ${openItemId === item.id ? 'rotate-180' : 'rotate-0'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${isActive(item.href)}`}
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
                  </Link>
                )}

                {item.subItems && (
                  <ul
                    id={`dropdown-${item.id}`}
                    className={`py-2 space-y-2 ${openItemId === item.id ? '' : 'hidden'}`}
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <Link
                          to={subItem.href}
                          className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isActive(subItem.href)}`}
                        >
                          <span className="flex-1 ms-3 whitespace-nowrap">{subItem.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
