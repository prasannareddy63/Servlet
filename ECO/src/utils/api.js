const API_URL = 'http://localhost:5000';

const generateToken = (user) => {
  // In a real app, this would be done server-side
  return btoa(JSON.stringify({ id: user.id, email: user.email }));
};

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/users?email=${credentials.email}`);
  const users = await response.json();
  const user = users[0];

  if (!user || user.password !== credentials.password) {
    throw new Error('Invalid credentials');
  }

  const token = generateToken(user);
  const { password, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, token };
};

export const register = async (userData) => {
  // Check if user exists
  const checkResponse = await fetch(`${API_URL}/users?email=${userData.email}`);
  const existingUsers = await checkResponse.json();

  if (existingUsers.length > 0) {
    throw new Error('Email already registered');
  }

  // Create new user
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }),
  });

  if (!response.ok) {
    throw new Error('Registration failed');
  }

  const newUser = await response.json();
  const token = generateToken(newUser);
  const { password, ...userWithoutPassword } = newUser;

  return { user: userWithoutPassword, token };
};

export const logout = async () => {
  // With JSON Server, we don't need to do anything server-side for logout
  return { message: 'Logged out successfully' };
};