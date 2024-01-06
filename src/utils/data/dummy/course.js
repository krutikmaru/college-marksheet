import { v4 as uuidv4 } from "uuid";
export const courseData = {
  data: {
    "2021-24": {
      BSCIT: {
        SEM1: {
          title: "Semester 1",
          subjects: [
            {
              objectId: uuidv4(),
              title: "Computer Organization & Architecture",
              id: "SBIT101",
              abbrevation: "COA",
              isPublished: {
                ca1: true,
                ca2: true,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Communication Skills",
              id: "SBIT102",
              abbrevation: "CS",
              isPublished: {
                ca1: true,
                ca2: true,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Fundamentals Of Programming",
              id: "SBIT103",
              abbrevation: "FOP",
              isPublished: {
                ca1: true,
                ca2: true,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Web Programming",
              id: "SBIT104",
              abbrevation: "WP",
              isPublished: {
                ca1: true,
                ca2: true,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Discrete Mathematics",
              id: "SBIT105",
              abbrevation: "DM",
              isPublished: {
                ca1: true,
                ca2: true,
                pr: false,
                see: false,
              },
            },
          ],
          assignedTeacher: [
            { name: "Sunita Jena", id: "BSCIT_SJ" },
            { name: "Wilson Rao", id: "BSCIT_WR" },
            { name: "Shruti Shah", id: "BSCIT_SS" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
            { name: "Fatima Shaikh", id: "BSCIT_FS" },
          ],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [
            {
              objectId: uuidv4(),
              title: "Python Programming",
              id: "SBIT201",
              abbrevation: "PP",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Computer Networks",
              id: "SBIT202",
              abbrevation: "CN",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Microprocessor",
              id: "SBIT203",
              abbrevation: "MP",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Green Computing",
              id: "SBIT204",
              abbrevation: "GC",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Advance Web Programming",
              id: "SBIT205",
              abbrevation: "AWP",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
          ],
          assignedTeacher: [
            { name: "Fatima Shaikh", id: "BSCIT_FS" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
            { name: "Shruti Shah", id: "BSCIT_SS" },
            { name: "Shraddha Devi Singh", id: "BSCIT_SDS" },
          ],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [
            {
              objectId: uuidv4(),
              title: "Database Management Systems",
              id: "SBIT301",
              abbrevation: "DBMS",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Operating Systems",
              id: "SBIT302",
              abbrevation: "OS",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Core Java",
              id: "SBIT303",
              abbrevation: "CJ",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Data Structures",
              id: "SBIT304",
              abbrevation: "DS",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Applied Mathematics",
              id: "SBIT305",
              abbrevation: "AM",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
          ],
          assignedTeacher: [
            { name: "Shraddha Devi Singh", id: "BSCIT_SDS" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
            { name: "Fatima Shaikh", id: "BSCIT_FS" },
            { name: "Shruti Shah", id: "BSCIT_SS" },
            { name: "Priti Shelar", id: "BSCIT_PS" },
          ],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [
            {
              objectId: uuidv4(),
              title: "ASP Dot Net",
              id: "SBIT401",
              abbrevation: "ADN",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Computer Oriented Statistics and Analysis",
              id: "SBIT402",
              abbrevation: "COST",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Advance Networks and Security",
              id: "SBIT403",
              abbrevation: "ANS",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Internet of Things",
              id: "SBIT404",
              abbrevation: "IOT",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Software Methodologies and Management",
              id: "SBIT405",
              abbrevation: "SMM",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
          ],
          assignedTeacher: [
            { name: "Shraddha Devi Singh", id: "BSCIT_SDS" },
            { name: "Priti Shelar", id: "BSCIT_PS" },
            { name: "Wilson Rao", id: "BSCIT_WR" },
            { name: "Shruti Shah", id: "BSCIT_SS" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
          ],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [
            {
              objectId: uuidv4(),
              title: "Mobile Application Development",
              id: "SBIT501",
              abbrevation: "MAD",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Unity",
              id: "SBIT502",
              abbrevation: "U",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Theory Of Computing",
              id: "SBIT503",
              abbrevation: "TOC",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Artificial Intelligence",
              id: "SBIT504",
              abbrevation: "AI",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Service Oriented Architecture",
              id: "SBIT505",
              abbrevation: "SOA",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
          ],
          assignedTeacher: [
            { name: "Sunita Jena", id: "BSCIT_SJ" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
            { name: "Fatima Shaikh", id: "BSCIT_FS" },
            { name: "Priti Shelar", id: "BSCIT_PS" },
            { name: "Wilson Rao", id: "BSCIT_WR" },
          ],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [
            {
              objectId: uuidv4(),
              title: "Cyber Security & Forensics",
              id: "SBIT601",
              abbrevation: "CSF",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Infrastructure Management",
              id: "SBIT602",
              abbrevation: "ITM",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Big Data",
              id: "SBIT603",
              abbrevation: "BD",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Machine Learning",
              id: "SBIT604",
              abbrevation: "ML",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
            {
              objectId: uuidv4(),
              title: "Cloud Computing",
              id: "SBIT605",
              abbrevation: "CC",
              isPublished: {
                ca1: false,
                ca2: false,
                pr: false,
                see: false,
              },
            },
          ],
          assignedTeacher: [
            { name: "Sunita Jena", id: "BSCIT_SJ" },
            { name: "Afreen Shaikh", id: "BSCIT_AS" },
            { name: "Fatima Shaikh", id: "BSCIT_FS" },
            { name: "Priti Shelar", id: "BSCIT_PS" },
            { name: "Wilson Rao", id: "BSCIT_WR" },
          ],
        },
      },
      BMS: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
    },
    "2022-25": {
      BSCIT: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
      BMS: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
    },
    "2024-27": {
      BSCIT: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
      BMS: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
    },
    "2023-26": {
      BSCIT: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
      BMS: {
        SEM1: {
          title: "Semester 1",
          subjects: [],
          assignedTeacher: [],
        },
        SEM2: {
          title: "Semester 2",
          subjects: [],
          assignedTeacher: [],
        },
        SEM3: {
          title: "Semester 3",
          subjects: [],
          assignedTeacher: [],
        },
        SEM4: {
          title: "Semester 4",
          subjects: [],
          assignedTeacher: [],
        },
        SEM5: {
          title: "Semester 5",
          subjects: [],
          assignedTeacher: [],
        },
        SEM6: {
          title: "Semester 6",
          subjects: [],
          assignedTeacher: [],
        },
      },
    },
  },
};
