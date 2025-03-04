import {
  LuChartNoAxesCombined,
  LuClipboardList,
  LuKey,
  LuLayoutDashboard,
  LuRadio,
} from "react-icons/lu";

export const links = [
  {
    placeholder: "داشبورد",
    href: "/dashboard",
    Icon: LuLayoutDashboard,
  },
  {
    placeholder: "پروژه ها",
    href: "/dashboard/projects",
    isLink: false,
    Icon: LuChartNoAxesCombined,
    projects: [
      {
        placeholder: "پروژه 1",
        href: "/dashboard/projects/1",
        Icon: LuClipboardList,
        domains: [
          {
            placeholder: "دامنه 1",
            href: "/dashboard/domains/1",
            Icon: LuRadio,
            keywords: [
              {
                placeholder: "کیورد 1",
                href: "/dashboard/keywords/1",
                Icon: LuKey,
              },
              {
                placeholder: "کیورد 2",
                href: "/dashboard/keywords/2",
                Icon: LuKey,
              },
              {
                placeholder: "کیورد 3",
                href: "/dashboard/keywords/3",
                Icon: LuKey,
              },
            ],
          },
          {
            placeholder: "دامنه 2",
            href: "/dashboard/domains/2",
            Icon: LuRadio,
            keywords: [
              {
                placeholder: "کیورد 1",
                href: "/dashboard/keywords/4",
                Icon: LuKey,
              },
              {
                placeholder: "کیورد 2",
                href: "/dashboard/keywords/1",
                Icon: LuKey,
              },
            ],
          },
        ],
      },
      {
        placeholder: "پروژه 2",
        href: "/dashboard/projects/2",
        Icon: LuClipboardList,
        domains: [
          {
            placeholder: "دامنه 1",
            href: "/dashboard/domains/3",
            Icon: LuRadio,
          },
          {
            placeholder: "دامنه 2",
            href: "/dashboard/domains/4",
            Icon: LuRadio,
            keywords: [
              {
                placeholder: "کیورد 1",
                href: "/dashboard/keywords/2",
                Icon: LuKey,
              },
              {
                placeholder: "کیورد 2",
                href: "/dashboard/keywords/3",
                Icon: LuKey,
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   placeholder: "دامنه ها",
  //   href: "/dashboard/domains",
  //   Icon: LuRadio,
  // },
  // {
  //   placeholder: "کیورد ها",
  //   href: "/dashboard/keywords",
  //   Icon: LuKey,
  // },
];

export const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export const yearOptions = [
  { value: 1403, placeholder: 1403 },
  { value: 1402, placeholder: 1402 },
  { value: 1401, placeholder: 1401 },
  { value: 1400, placeholder: 1400 },
  { value: 1399, placeholder: 1399 },
];

export const projects = [
  {
    id: 1,
    projectName: "پروژه الف",
    importance: "بالا",
    status: "در حال انجام",
    projectManager: "علی",
    startDate: "2025-01-01",
    endDate: "2025-06-01",
  },
  {
    id: 2,
    projectName: "پروژه ب",
    importance: "متوسط",
    status: "تمام شده",
    projectManager: "سمیرا",
    startDate: "2024-09-01",
    endDate: "2025-02-28",
  },
  {
    id: 3,
    projectName: "پروژه ج",
    importance: "پایین",
    status: "در حال برنامه‌ریزی",
    projectManager: "رضا",
    startDate: "2025-03-01",
    endDate: "2025-08-01",
  },
  {
    id: 4,
    projectName: "پروژه د",
    importance: "بالا",
    status: "در حال انجام",
    projectManager: "فاطمه",
    startDate: "2024-10-01",
    endDate: "2025-04-01",
  },
  {
    id: 5,
    projectName: "پروژه ه",
    importance: "متوسط",
    status: "تمام شده",
    projectManager: "حسین",
    startDate: "2023-12-01",
    endDate: "2024-12-31",
  },
];

export const domains = [
  {
    placeholder: "دامنه 1",
    domain: "127.0.0.1:3000",
    keywords: ["کیورد 1", "کیورد 2", "کیورد 3"],
  },
  {
    placeholder: "دامنه 2",
    domain: "127.0.0.1:3000",
    keywords: ["کیورد 1", "کیورد 2"],
  },
  {
    placeholder: "دامنه 3",
    domain: "127.0.0.1:3000",
    keywords: ["کیورد 1", "کیورد 2", "کیورد 3", "کیورد 4"],
  },
  {
    placeholder: "دامنه 4",
    domain: "127.0.0.1:3000",
    keywords: ["کیورد 1"],
  },
];
export const keywords = [
  {
    id: "1",
    placeholder: "کیورد 1",
    region: "ایران",
    language: "فارسی",
  },
  {
    id: "2",
    placeholder: "کیورد 2",
    region: "انگلیس",
    language: "انگلیسی",
  },
  {
    id: "3",
    placeholder: "کیورد 3",
    region: "قزاقستان",
    language: "قزاقستانی",
  },
  {
    id: "4",
    placeholder: "کیورد 4",
    region: "ترکیه",
    language: "ترکی",
  },
];
