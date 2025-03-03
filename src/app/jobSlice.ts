import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import detrackService from "../services/detrackService";
import { Job as JobInterface } from "../interfaces/job";
import orcaService from "../services/orcaService";

interface JobSliceState {
  job: { data: JobInterface | null }
}

const JobInitialState: JobSliceState = {
  job: {
    data: null
  }
}

const jobSlice = createSlice({
  name: "jobs",
  initialState: JobInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.job = action.payload
      })
  },
})

export const fetchJob = createAsyncThunk(
  "document/fetchJob",
  async (doNumber: string) => {
    try {
      const response = await detrackService.getJob(doNumber)
      const responseData = await response.json()

      if ("data" in responseData) return responseData as JobInterface
      return responseData

    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message)
    }
  }
)

export const fetchSheetId = createAsyncThunk(
  "job/fetchSheetId",
  async () => {
    try {
      const response = await orcaService.getAllSheets()
      const responseData = await response.json()

      const findSheet = responseData.data.find((res: any) => res.name === 'A0227')
      return findSheet._id

    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message)
    }
  }
)

export const fetchSheet = createAsyncThunk(
  "job/fetchSheet",
  async (sheetId: string) => {
    try {
      const response = await orcaService.getSheet(sheetId)
      const responseData = await response.json()

      return responseData
    } catch (e: unknown) {
      if (e instanceof Error) throw new Error(e.message)
    }
  }
)

export const jobReducer = jobSlice.reducer