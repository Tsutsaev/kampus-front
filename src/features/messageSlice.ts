import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./userSlice";

export interface Message {
    _id: string;
    author:User,
    content: string,
    timestamp: Date
  }
  
  interface MessageState {
    messages: Message[]; 
  }
  
  const initialState: MessageState = {
    messages: [],
  };
  


// // export const fetchMessages = createAsyncThunk<MessageState, { id: string }>(
// //   "fetch/favorites",
// //   async ({ id }, { rejectWithValue }) => {
// //     const res = await fetch(`http://localhost:3010/favorite/${id}`);
// //     if (!res.ok) {
// //       return rejectWithValue("server error");
// //     }

// //     return res.json();
// //   }
// // );

export const addMessage = createAsyncThunk<
  MessageState,
  { chatId: string; content: string, author:string }
>("messages/add", async ({ chatId, content, author }, { rejectWithValue }) => {
  const res = await fetch(`http://localhost:3010/messages/add/${chatId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content, author }),
  });
  if (!res.ok) {
    return rejectWithValue("server error");
  }

  return res.json();
});


// // export const deleteToFavorite = createAsyncThunk<
// //   string,
// //   { id: string; productId: string; size: number }
// // >("delete/favorite", async ({ id, productId, size }, { rejectWithValue }) => {
// //   const res = await fetch(`http://localhost:3010/favorite/delete/${id}`, {
// //     method: "PATCH",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({ product: productId, size: size }),
// //   });
// //   if (!res.ok) {
// //     return rejectWithValue("server error");
// //   }

// //   return res.json();
// // });

// const favoriteSlice = createSlice({
//   name: "favorite",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//     //   .addCase(
//     //     fetchFavorites.fulfilled,
//     //     (state: FavoriteState, action: PayloadAction<FavoriteState>) => {
//     //       state.favorite = action.payload.favorite;
//     //       state._id = action.payload._id;
//     //     }
//     //   )
//       .addCase(
//         addToFavorite.fulfilled,
//         (state: MessageState, action: PayloadAction<MessageState>) => {
//           state.messages = action.payload.messages;
//         }
//       )
//     //   .addCase(
//     //     deleteToFavorite.fulfilled,
//     //     (state: FavoriteState, action: PayloadAction<string>) => {
//     //       state.favorite = state.favorite.filter(
//     //         (item) => item.product._id !== action.payload
//     //       );
//     //     }
//     //   );
//   },
// });

// export default favoriteSlice.reducer;
