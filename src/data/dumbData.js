export const OBJECT_TEST = [
    {
        name: "children-1",
        description: "is simply dummy text of the printing and typesetting industry."
    },
    {
        name: "children-2",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        name: "children-3",
        description: "sometimes on purpose (injected humour and the like)."
    },
    {
        name: "children-4",
        description: "Various versions have evolved over the years, sometimes by accident,"
    }

]
// export const ticket = {
//     id: null,
//     name: "",
//     number: "",
//     status: "",
//     sprintId: null,
//     priority: "",
//     qaId: null,
// };

export const asba = [
    {
        id: 1,
        name: "Pcic updates",
        number: 4808,
        status: "bqa",
        sprintId: null,
        priority: "Critical",
        qaId: 1,
        project: "amp",
        ba: true,
        progress: 25
    },
    {
        id: 2,
        name: "IM/BR",
        number: 2684,
        status: "in progress",
        sprintId: null,
        priority: "High",
        qaId: 1,
        project: "amp",
        ba: false,
        progress: 49
    },
    {
        id: 3,
        name: "PD INCLINE",
        number: 1305,
        status: "code review",
        sprintId: null,
        priority: "Normal",
        qaId: 2,
        project: "amp",
        ba: false,
        progress: 75
    },
    {
        id: 4,
        name: "CA surplus lines",
        number: 2005,
        status: "done",
        sprintId: null,
        priority: "",
        qaId: 3,
        project: "ir",
        ba: false,
        progress: 0
    },
    {
        id: 5,
        name: "Texas surplus lines",
        number: 4809,
        status: "qa",
        sprintId: null,
        priority: "",
        qaId: 4,
        project: "ir",
        ba: false,
        progress: 100
    },
    {
        id: 6,
        name: "Texas surplus lines",
        number: 4809,
        status: "ba",
        sprintId: null,
        priority: "",
        qaId: 4,
        project: "ir",
        ba: false,
        progress: 10
    },

]

export const targetList = {
    id: null,
    name: "Target List",
    tickets: [1, 2, 3, 4, 5, 6],
};

export const priorityList = {
    id: null,
    name: "Priority List",
    tickets: [1, 2, 3, 4],
}

export const users = [
    {
        id: 1,
        firstName: "Hamza",
        lastName: "Bouthour",
        tickets: [1, 2, 3, 4],
        activeTicket: [1, 2],
        active: true
    },
    {
        id: 2,
        firstName: "Jon",
        lastName: "Bouthour",
        tickets: [1, 2, 3, 4],
        activeTicket: [3, 2],
        active: true
    },
    {
        id: 3,
        firstName: "Volod",
        lastName: "Bouthour",
        tickets: [1, 2, 3, 4],
        activeTicket: [4, 2],
        active: false
    },
    {
        id: 4,
        firstName: "Sarah",
        lastName: "Bouthour",
        tickets: [1, 2, 3, 4],
        activeTicket: [1, 5],
        active: false,
    },
    // {
    //     id: 5,
    //     firstName: "Sarah",
    //     lastName: "Bouthour",
    //     tickets: [1, 2, 3, 4],
    //     activeTicket: [1, 5],
    //     active: false,
    // },
]