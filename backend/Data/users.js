import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane lance',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kevin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Lawrance user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]