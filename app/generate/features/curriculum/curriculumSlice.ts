import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../../store'; // Assuming you'll define AppThunk type in store.ts

interface CurriculumState {
  data: any; // Modify the type according to your actual data structure
  loading: boolean;
  error: string | null;
}

const initialState: CurriculumState = {
  data: null,
  loading: false,
  error: null,
};

const curriculumSlice = createSlice({
  name: 'curriculum',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = curriculumSlice.actions;

export default curriculumSlice.reducer;

// Async action to fetch curriculum data from an API
export const fetchCurriculumData = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('https://api.example.com/curriculum');
    if (!response.ok) {
      throw new Error('Failed to fetch curriculum data');
    }
    const data = await response.json();
    dispatch(setData(data));
  } catch (error: any) {
    dispatch(setError(error.message));
  }
  dispatch(setLoading(false));
};
