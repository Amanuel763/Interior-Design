import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jane lance',
        email: 'Janelance@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Kevin User',
        email: 'Kevinuser@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Lawrance user',
        email: 'Lawranceuser@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users;