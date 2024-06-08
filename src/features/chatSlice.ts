import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IMessage {
  author: string;
  content: string;
  timestamp: string;
  _id: string;
}

export interface Chat {
  _id: string;
  participants: string[];
  messages: IMessage[];
}

export interface ChatsList {
  id: string;
  name: string;
}

interface ChatState {
  chat: Chat | null;
  chatsList: ChatsList[];
}

const initialState: ChatState = {
  chat: null,
  chatsList: [],
};

export const getAllChat = createAsyncThunk<
  ChatsList[],
  { id: string },
  { rejectValue: string }
>("chatsList/get", async ({ id }, { rejectWithValue }) => {
  const res = await fetch(`http://localhost:3010/chat/getAll/${id}`);

  if (!res.ok) {
    return rejectWithValue("server error");
  }

  return res.json();
});

export const getChatById = createAsyncThunk<
  Chat,
  { id: string },
  { rejectValue: string }
>("chat/get", async ({ id }, { rejectWithValue }) => {
  const res = await fetch(`http://localhost:3010/chat/${id}`);

  if (!res.ok) {
    return rejectWithValue("server error");
  }

  return res.json();
});

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllChat.fulfilled,
        (state: ChatState, action: PayloadAction<ChatsList[]>) => {
          state.chatsList = action.payload;
        }
      )
      .addCase(
        getChatById.fulfilled,
        (state: ChatState, action: PayloadAction<Chat>) => {
          state.chat = action.payload;
        }
      );
  },
});

export default chatSlice.reducer;
