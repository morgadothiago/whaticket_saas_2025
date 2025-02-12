export const mockUsers = [
  {
    id: 1,
    fullName: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    user: [
      {
        id: 1,
        username: 'user@user.com',
        email: 'user@user.com',
        role: 'user',
      },
    ],
    status: 'active',
  },
  {
    id: 2,
    fullName: 'Regular User',
    email: 'user@example.com',
    password: 'user123',
    role: 'user',
  },
];

export default mockUsers;
