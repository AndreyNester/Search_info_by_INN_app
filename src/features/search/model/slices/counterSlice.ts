import { getOrganizationInfo } from "@/src/entities";
import { Suggestion } from "@/src/entities/organizationInfo/api/types";
import { createAppSlice } from "@/src/shared/model";

export interface CounterSliceState {
  data : Suggestion[];
  status: "idle" | "loading" | "failed" | 'completed';
}

const initialState: CounterSliceState = {
  status: "idle",
  data : []
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createAppSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    doAsync : create.asyncThunk(
      async (action: number) => {
        const response = await getOrganizationInfo(action)
        return response
      },
      {
        pending : (state) => {
          state.status = 'loading'
        },
        fulfilled: (state, action) => {
          state.status = 'completed'
          state.data = action.payload.suggestions
        },
        rejected : (state, action) => {
          console.log(action);
          
          state.status = 'failed'
        }
      }
    )
   }),
});
export const { doAsync } = counterSlice.actions;

