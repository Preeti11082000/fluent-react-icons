
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RolesState, Role, Permission } from '../types';

const initialState: RolesState = {
  roles: [],
  currentRole: null,
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchRoles = createAsyncThunk('roles/fetchRoles', async () => {
  // Simulate API call
  const mockRoles: Role[] = [
    {
      id: '1',
      name: 'Super Admin',
      permissions: [
        {
          module: 'Dashboard',
          actions: { view: true, edit: true, add: true, delete: true, activeBlocked: true }
        },
        {
          module: 'Content Management',
          actions: { view: true, edit: true, add: true, delete: true, activeBlocked: true }
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  ];
  
  return mockRoles;
});

export const createRole = createAsyncThunk(
  'roles/createRole',
  async (roleData: { name: string; permissions: Permission[] }) => {
    // Simulate API call
    const newRole: Role = {
      id: Date.now().toString(),
      name: roleData.name,
      permissions: roleData.permissions,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    return newRole;
  }
);

export const updateRole = createAsyncThunk(
  'roles/updateRole',
  async (roleData: { id: string; name: string; permissions: Permission[] }) => {
    // Simulate API call
    const updatedRole: Role = {
      id: roleData.id,
      name: roleData.name,
      permissions: roleData.permissions,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    return updatedRole;
  }
);

export const deleteRole = createAsyncThunk(
  'roles/deleteRole',
  async (roleId: string) => {
    // Simulate API call
    return roleId;
  }
);

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setCurrentRole: (state, action: PayloadAction<Role | null>) => {
      state.currentRole = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Roles
      .addCase(fetchRoles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.roles = action.payload;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch roles';
      })
      // Create Role
      .addCase(createRole.fulfilled, (state, action) => {
        state.roles.push(action.payload);
      })
      // Update Role
      .addCase(updateRole.fulfilled, (state, action) => {
        const index = state.roles.findIndex(role => role.id === action.payload.id);
        if (index !== -1) {
          state.roles[index] = action.payload;
        }
      })
      // Delete Role
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.roles = state.roles.filter(role => role.id !== action.payload);
      });
  },
});

export const { setCurrentRole, clearError } = rolesSlice.actions;
export default rolesSlice.reducer;
